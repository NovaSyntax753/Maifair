import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.log("Enquiry received:", data);
    return NextResponse.json({ success: true, message: "Enquiry received" }, { status: 200 });
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request payload" }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json({ message: "Enquiry endpoint is active." }, { status: 200 });
}
