import getDomain from "@/app/lib/get-domain";
export default async function Home() {
  return (
    <h1>Hello, Next.js</h1>
  );
}

// something about controlling what servers next uses
// this is per server page
// export const runtime = "edge";
// export const preferredRegion = "iad1";