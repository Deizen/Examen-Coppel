import { NextResponse } from "next/server";
import products from "../../data/productos"

export async function GET() {
  return NextResponse.json(products);
}