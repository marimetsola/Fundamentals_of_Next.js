import { NextResponse } from "next/server";
import { users } from "./data";

export async function GET() {
  return NextResponse.json(users);
}

export async function POST(req) {
  const body = await req.json();
  const { name, email } = body;

  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required" },
      { status: 400 }
    );
  }

  const newUser = {
    id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
    name,
    email,
  };

  users.push(newUser);

  return NextResponse.json(newUser, { status: 201 });
}
