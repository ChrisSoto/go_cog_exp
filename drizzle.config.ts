import type { Config } from "drizzle-kit"

export default {
  schema: "./src/app/db/schema.ts",
  out: "./src/migrations"
} satisfies Config