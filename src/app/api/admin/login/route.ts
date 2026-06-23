import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { sessionOptions, AdminSession } from "@/lib/adminAuth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { password } = await req.json();

  if (password === process.env.ADMIN_PASSWORD) {
    const session = await getIronSession<AdminSession>(await cookies(), sessionOptions);
    session.isLoggedIn = true;
    await session.save();

    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
}

export async function GET() {
  const session = await getIronSession<AdminSession>(await cookies(), sessionOptions);
  return NextResponse.json({ isLoggedIn: !!session.isLoggedIn });
}
