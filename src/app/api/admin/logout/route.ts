import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { sessionOptions, AdminSession } from "@/lib/adminAuth";
import { NextResponse } from "next/server";

export async function POST() {
  const session = await getIronSession<AdminSession>(await cookies(), sessionOptions);
  session.destroy();
  return NextResponse.json({ success: true });
}
