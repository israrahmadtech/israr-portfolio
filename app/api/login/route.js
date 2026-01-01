import { NextResponse } from "next/server";

const adminUsername = process.env.NEXT_PUBLIC_ADMIN_USERNAME
const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD

export async function POST(req) {
    const { username, password } = await req.json();

    // Basic validation
    if (!username || !password) {
        return NextResponse.json(
            { success: false, message: "Username & password required" },
            { status: 400 }
        );
    }

    // Static admin check
    if (
        username !== adminUsername ||
        password !== adminPassword
    ) {
        return NextResponse.json(
            { success: false, message: "Invalid credentials" },
            { status: 401 }
        );
    }

    const res = NextResponse.json({
        success: true,
        message: "Login successful",
    });

    // 🔐 Admin session cookie
    res.cookies.set("admin-auth", "authenticated", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60 * 24, // 1 day
    });

    return res;
}
