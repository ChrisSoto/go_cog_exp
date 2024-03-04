import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const url = "postgresql://admin:XXX@ep-dark-paper-a6jz48xe.us-west-2.aws.neon.tech/go-cog?sslmode=require"
const sql = neon(url);
export const db = drizzle(sql);