import {neon} from '@neondatabase/serverless'
const url = process.env.DATABASE_URL as string
const sql = neon(url)

export async function hello(): Promise<string> {
  const [result] = await sql`select now()`
  return new Date(result.now).toDateString()
}