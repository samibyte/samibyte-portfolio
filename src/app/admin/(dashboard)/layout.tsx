import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { sessionOptions, AdminSession } from "@/lib/adminAuth";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getIronSession<AdminSession>(await cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-space-black text-white">
      {/* Dashboard Brand Header */}
      <header className="sticky top-0 z-[100] border-b border-matrix-border/20 bg-space-deep/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-matrix-green bg-matrix-green/10 font-mono text-xl font-bold text-matrix-green">
              A
            </div>
            <div>
              <h1 className="font-mono text-sm font-bold tracking-widest text-matrix-green uppercase">
                Admin Control Deck
              </h1>
              <p className="font-mono text-[8px] text-text-muted uppercase tracking-[0.2em]">
                System Status: Online / Authorized
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6">
              <a href="/" className="font-mono text-[10px] uppercase tracking-widest text-text-muted hover:text-white transition-colors">
                Public Site
              </a>
            </nav>
            <div className="h-4 w-px bg-white/10" />
            <AdminLogoutButton />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl p-6 md:p-12">
        {children}
      </main>

      {/* Global Background Glow for Admin */}
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-5">
        <div className="absolute top-0 right-0 h-[600px] w-[600px] translate-x-1/2 -translate-y-1/2 rounded-full bg-matrix-green blur-[150px]" />
        <div className="absolute bottom-0 left-0 h-[600px] w-[600px] -translate-x-1/2 translate-y-1/2 rounded-full bg-matrix-green blur-[150px]" />
      </div>
    </div>
  );
}

// Client component for logout logic
import { IconX } from "@/components/ui/Icons";
import AdminLogoutButton from "./AdminLogoutButton";
