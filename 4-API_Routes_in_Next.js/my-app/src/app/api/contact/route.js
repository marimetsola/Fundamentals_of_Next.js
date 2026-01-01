import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();

  console.log(`Received message "${body.message}" from ${body.name}`);

  return NextResponse.json(
    { success: true, message: "Message received" },
    { status: 200 }
  );
}
