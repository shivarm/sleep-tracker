"use server";

import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

export async function getSleepGoal() {
  const { userId } = await auth();
  
  if (!userId) return { error: "User not found" };

  const user = await db.user.findUnique({ where: { clerkUserId: userId } });
  return { sleepGoal: user?.sleepGoal ?? 8 };
}

export async function setSleepGoal(goal: number) {
  const { userId } = await auth();
  if (!userId) return { error: "User not found" };
  if (
    typeof goal !== "number" ||
    !Number.isFinite(goal) ||
    goal < 1 ||
    goal > 24
  ) {
    return { error: "Invalid sleep goal. Must be a number between 1 and 24." };
  }
  await db.user.update({ where: { clerkUserId: userId }, data: { sleepGoal: goal } });
  return { success: true };
}
