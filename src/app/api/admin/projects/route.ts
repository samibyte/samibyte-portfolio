import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { sessionOptions, AdminSession } from "@/lib/adminAuth";
import { NextResponse, NextRequest } from "next/server";
import { getProjects, saveProject } from "@/lib/projectStore";

export async function GET() {
  const session = await getIronSession<AdminSession>(await cookies(), sessionOptions);
  
  if (!session.isLoggedIn) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const projects = await getProjects();
  return NextResponse.json(projects);
}

export async function POST(req: NextRequest) {
  const session = await getIronSession<AdminSession>(await cookies(), sessionOptions);
  
  if (!session.isLoggedIn) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const project = await req.json();
  const saved = await saveProject(project);
  return NextResponse.json(saved);
}
