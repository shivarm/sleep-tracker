"use client";

import { useEffect, useState } from "react";
import getRecords from "@/app/actions/getRecords";
import { getSleepGoal } from "@/app/actions/sleepGoal";

export default function SleepProgress() {
  const [goal, setGoal] = useState<number>(8);
  const [records, setRecords] = useState<{ amount: number; date: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const [{ sleepGoal }, { records }] = await Promise.all([
        getSleepGoal(),
        getRecords(),
      ]);
      setGoal(typeof sleepGoal === "number" ? sleepGoal : 8);
      setRecords(
        (records ?? []).map((r) => ({ amount: r.amount, date: String(r.date) }))
      );
      setLoading(false);
    })();
  }, []);

  const [average, setAverage] = useState(0);
  useEffect(() => {
    if (records.length === 0) {
      setAverage(0);
      return;
    }
    // Calculate average sleep per night (last 7 days)
    const last7 = records
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 7);
    const avg = last7.reduce((sum, r) => sum + r.amount, 0) / last7.length;
    setAverage(avg);
  }, [records]);

  const percent = goal > 0 ? Math.min((average / goal) * 100, 100) : 0;

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-4 bg-white rounded shadow w-full max-w-7xl mx-auto mb-6">
      <h2 className="text-lg font-bold mb-2 text-gray-600">
        Sleep Goal Progress
      </h2>
      <div className="mb-2 text-gray-600 ">
        Last 7 days average:{" "}
        <span className="font-bold">{average.toFixed(1)}</span> / {goal}{" "}
        hours/night
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-800 rounded h-4">
        <div
          className="bg-purple-600 h-4 rounded"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        {percent >= 100 ? "Goal met! 🎉" : `Progress: ${percent.toFixed(0)}%`}
      </div>
    </div>
  );
}
