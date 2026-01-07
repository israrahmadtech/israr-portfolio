"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    async function handleLogin(e) {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;

        if (!username || !password) {
            toast.error("Username & password required");
            return;
        }

        try {
            setLoading(true);

            const res = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Login failed");
            }

            toast.success("Welcome Admin 👋");
            router.refresh();
            router.push("/admin/dashboard");
        } catch (err) {
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="h-screen w-screen flex items-center justify-center p-4 fixed top-0 left-0 bg-zinc-100 dark:bg-[#0a0611] z-5000000001">
            <form
                onSubmit={handleLogin}
                className="w-full max-w-md rounded-2xl p-6 bg-gradient-to-br from-violet-500/20 to-transparent border border-violet-500/30 backdrop-blur-sm"
            >
                <h1 className="text-2xl font-bold text-violet-600 dark:text-white">
                    Admin Login
                </h1>
                <p className="mt-1 text-sm text-violet-400 dark:text-violet-300">
                    Access portfolio control panel
                </p>

                <div className="mt-6 space-y-4">
                    <input
                        name="username"
                        type="text"
                        placeholder="Username"
                        className="w-full rounded-xl px-4 py-2 bg-white/50 dark:bg-black/30 border border-violet-500/30 text-zinc-900 dark:text-white outline-none focus:border-violet-500/80"
                    />

                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="w-full rounded-xl px-4 py-2 bg-white/50 dark:bg-black/30 border border-violet-500/30 text-zinc-900 dark:text-white outline-none focus:border-violet-500/80"
                    />

                    <button
                        disabled={loading}
                        className="w-full rounded-xl py-2 font-medium bg-violet-500 text-white hover:bg-violet-600 transition disabled:opacity-50"
                    >
                        {loading ? "Signing in..." : "Login"}
                    </button>
                </div>
            </form>
        </div>
    );
}
