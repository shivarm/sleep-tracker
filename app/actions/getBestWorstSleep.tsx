"use server";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

async function getBestWorstSleep(): Promise<{
  bestSleep?: number;
  worstSleep?: number;
  error?: string;
}> {
  const { userId } = await auth();

  if (!userId) {
    return { error: "User not found" };
  }

  try {
    const records = await db.record.findMany({
      where: { userId },
      select: { amount: true }, // fetch only amount for efficiency
    });

    if (!records || records.length === 0) {
      return { bestSleep: 0, worstSleep: 0 };
    }

    const amount = records.map((record) => record.amount);

    const bestSleep = Math.max(...amount); // Heighest amount
    const worstSleep = Math.min(...amount); // lowest amount

    return { bestSleep, worstSleep };
  } catch (error) {
    console.error("Error fetching sleep amount", error);
    return { error: "Database error" };
  }
}

export default getBestWorstSleep;