import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function useLogout() {
    const router = useRouter();

    const handleLogout = async () => {
        try {
            const res = await fetch("/api/logout", { method: "POST" });
            
            if (!res.ok) throw new Error("Logout failed");

            const data = await res.json();

            toast.success("Logged out successfully");
            router.push("/admin/login");
        } catch (err) {
            toast.error(err.message);
        }
    };

    return handleLogout;
}
