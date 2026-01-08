import { NextResponse } from "next/server";

export async function GET(_req, { params }) {
  const { id } = await params;

  return NextResponse.json({
    id,
    name: "mock_product_01",
    price: 15,
    description:
      "This is the description of a super useful and affordable mock product.",
  });
}
