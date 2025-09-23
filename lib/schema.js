import { timestamp, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  clerkId: varchar("clerk_id", { length: 255 }).primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  imageUrl: varchar("imageUrl", { length: 1024 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
