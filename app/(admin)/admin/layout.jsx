import { AdminSidebar } from "@/app/components/AdminSidebar/AdminSidebar";
import CursorEffect from "@/app/components/CursorEffect/CursorEffect";
import DarkModeToggle from "@/app/components/DarkMode/DarkMode";
import { cn } from "@/lib/utils";
import { Toaster } from "react-hot-toast";

export default function AdminLayout({ children }) {
  return (
    <>
      <div
        className={cn(
          "w-full flex flex-1 flex-col md:flex-row border border-violet-500/20",
          "h-screen"
        )}
      >
        <AdminSidebar />

        <main className="z-40 flex-1 p-6 overflow-y-auto">
          {children}
        </main>
      </div>

      <DarkModeToggle />
      <CursorEffect />
    </>
  );
}
