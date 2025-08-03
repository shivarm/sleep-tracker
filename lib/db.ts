import { PrismaClient } from "@prisma/client/extension";

// following code is used to prevent the Prisma Client from being instantiated multiple times
// in development mode, which can lead to issues with hot reloading and memory leaks.
// This code ensures that the Prisma Client is only instantiated once and reused across the application.

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
