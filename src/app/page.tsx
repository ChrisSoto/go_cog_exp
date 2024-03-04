import getDomain from "@/app/lib/get-domain";
import { hello } from "@/app/lib/db";
export default async function Home() {
  const now = await hello();
  return (
    <h1>Hello, Next.js { now }</h1>
  );
}
