import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { sessionOptions, AdminSession } from "@/lib/adminAuth";
import { NextResponse, NextRequest } from "next/server";
import { reorderProjects } from "@/lib/projectStore";

export async function PATCH(req: NextRequest) {
  const session = await getIronSession<AdminSession>(await cookies(), sessionOptions);
  
  if (!session.isLoggedIn) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { ids } = await req.json();
  await reorderProjects(ids);
  return NextResponse.json({ success: true });
}
