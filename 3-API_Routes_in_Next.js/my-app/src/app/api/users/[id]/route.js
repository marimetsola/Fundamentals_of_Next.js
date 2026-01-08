import { NextResponse } from "next/server";
import { users } from "../data";

export async function GET(_req, { params }) {
  const { id } = await params;

  const user = users.find((u) => u.id === parseInt(id, 10));

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user);
}
