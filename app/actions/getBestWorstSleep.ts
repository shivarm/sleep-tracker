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
      return { bestSleep: undefined, worstSleep: undefined };
    }

    const amount = records.map((record) => record.amount);
    const bestSleep = Math.max(...amount); // Highest amount

    // If only one record, worstSleep is undefined
    let worstSleep: number | undefined = undefined;
    if (amount.length > 1) {
      worstSleep = Math.min(...amount);
    }

    return { bestSleep, worstSleep };
  } catch (error) {
    console.error("Error fetching sleep amount", error);
    return { error: "Database error" };
  }
}

export default getBestWorstSleep;