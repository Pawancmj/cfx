import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminSidebar from "./components/AdminSidebar";

export const dynamic = 'force-dynamic';

export default async function AdminDashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Basic Authentication Check
    const cookieStore = await cookies();
    const session = cookieStore.get("admin_session");

    if (!session || session.value !== "authenticated") {
        redirect("/admin/login");
    }

    return (
        <div className="flex h-screen bg-[#05080a] text-zinc-100 overflow-hidden pt-20">
            {/* Sidebar */}
            <AdminSidebar />


            <main className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-10 relative">
                {/* Background ambient light */}
                <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
