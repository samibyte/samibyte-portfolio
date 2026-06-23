import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { sessionOptions, AdminSession } from "@/lib/adminAuth";
import { NextResponse, NextRequest } from "next/server";
import { saveProject, deleteProject } from "@/lib/projectStore";

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getIronSession<AdminSession>(await cookies(), sessionOptions);
  
  if (!session.isLoggedIn) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const project = await req.json();
  
  if (project.id !== id) {
    return NextResponse.json({ error: "ID mismatch" }, { status: 400 });
  }

  const saved = await saveProject(project);
  return NextResponse.json(saved);
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getIronSession<AdminSession>(await cookies(), sessionOptions);
  
  if (!session.isLoggedIn) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  await deleteProject(id);
  return NextResponse.json({ success: true });
}
