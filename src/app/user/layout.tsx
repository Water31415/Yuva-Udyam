import { Navbar } from "@/src/components/dashboard/NavBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0B0E14] text-slate-300 font-sans">
      {/* PERSISTENT DETACHED NAVBAR */}
      <Navbar />
      
      {/* PAGE CONTENT */}
      <main className="max-w-[1400px] mx-auto p-8">
        {children}
      </main>
    </div>
  );
}