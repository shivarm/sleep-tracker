"use server";

import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { Record } from "@/types/Record";

async function getRecords(): Promise<{
  records?: Record[];
  error?: string;
}> {
  const { userId } = await auth();

  if (!userId) {
    return { error: "User not found" };
  }

  try {
    const records = await db.record.findMany({
      where: { userId },
      orderBy: {
        date: "desc", // Sort by the `date` field in descending order
      },
      take: 10, // Limit the request to 10 records
    });

    return { records };
  } catch (error) {
    console.error("Error fetching records:", error); 
    return { error: "Database error" };
  }
}

export default getRecords;