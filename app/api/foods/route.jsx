import { NextResponse } from "next/server";
const Foods = ["Pizza", "Burger", "Snadwich", "Pasta"];
export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 6000));
  return NextResponse.json(Foods);
}
