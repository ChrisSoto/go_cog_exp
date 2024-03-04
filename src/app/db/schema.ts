import { timestamp, text, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const LinksTable = pgTable("links", {
  id: serial("id").primaryKey().notNull(),
  url: text("url").notNull(),
  short: varchar("short", { length: 6 }).notNull(),
  created_at: timestamp("created_at").defaultNow().notNull(),
})