"use client";

import { useEffect, useState } from "react";
import { getSleepGoal, setSleepGoal } from "@/app/actions/sleepGoal";

export default function SleepGoalSetter() {
  const [goal, setGoal] = useState<number>(8);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    (async () => {
      const { sleepGoal } = await getSleepGoal();
      setGoal(typeof sleepGoal === "number" ? sleepGoal : 8);
      setLoading(false);
    })();
  }, []);

  const handleSave = async () => {
    setSaving(true);
    await setSleepGoal(goal);
    setSaving(false);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2500);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-4 bg-white rounded shadow w-full max-w-7xl mx-auto mb-6">
      <h2 className="text-lg font-bold mb-2 text-gray-600">Set Your Sleep Goal</h2>
      <div className="flex items-center space-x-2">
        <input
          type="number"
          min={1}
          max={24}
          value={goal}
          onChange={e => setGoal(Number(e.target.value))}
          className="border rounded px-2 py-1 w-20 text-gray-600 bg-gray-100"
        />
        <span className="text-gray-700">hours/night</span>
        <button
          onClick={handleSave}
          className="ml-4 px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700 cursor-pointer"
          disabled={saving}
        >
          {saving ? "Saving..." : "Save"}
        </button>
      </div>
      {showAlert && (
        <div className="mt-3 px-4 py-2 bg-green-100 text-green-800 rounded shadow text-sm">
          Sleep goal updated successfully!
        </div>
      )}
    </div>
  );
}
