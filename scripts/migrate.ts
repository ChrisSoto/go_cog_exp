import { migrate } from 'drizzle-orm/neon-http/migrator'
import { db } from '@/app/db/db'

async function main() {
  await migrate(db, { migrationsFolder: './src/migrations' })
}

main()