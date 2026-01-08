import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const { name, message } = body;

  if (req.headers.get("authorization") !== "Bearer token666") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!name || !message) {
    return NextResponse.json(
      { error: "Name and message are required" },
      { status: 400 }
    );
  }

  console.log(`Received message "${message}" from ${name}`);

  return NextResponse.json(
    { success: true, message: "Message received" },
    { status: 201 }
  );
}
