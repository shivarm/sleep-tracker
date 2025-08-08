"use server";

import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

async function getUserRecord(): Promise<{
  record?: number;
  daysWithRecords?: number;
  error?: string;
}> {
  const { userId } = await auth();

  if (!userId) {
    return { error: "User not found" };
  }

  try {
    const records = await db.record.findMany({
      where: { userId },
    });
    
    if (records.length === 0) {
      return { record: 0, daysWithRecords: 0 };
    }

    // Calculate the total amount of sleep from all records
    const record = records.reduce((sum, record) => sum + record.amount, 0);

    // Count the number of days with valid sleep records
    const daysWithRecords = records.filter((record) => record.amount > 0).length;

    return { record, daysWithRecords };
  } catch (error) {
    console.error("Error fetching user record:", error);
    return { error: "Database error" };
  }
}

export default getUserRecord;