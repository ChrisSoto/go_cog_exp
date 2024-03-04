import {  NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({ name: "John Doe" })
}

export async function POST({ body }) {
  return NextResponse.json({ name: body.name })
}
