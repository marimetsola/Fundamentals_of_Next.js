import { NextResponse } from "next/server";
import { getHelloMessage } from "./logic";

export async function GET() {
  return NextResponse.json(getHelloMessage());
}
