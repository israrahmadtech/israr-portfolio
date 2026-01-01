import { NextResponse } from "next/server";

export function middleware(req) {
    const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");
    const isLoginPage = req.nextUrl.pathname === "/admin/login";

    const adminCookie = req.cookies.get("admin-auth")?.value;

    // Not logged in → block admin routes
    if (isAdminRoute && !isLoginPage && adminCookie !== "authenticated") {
        return NextResponse.redirect(new URL("/admin/login", req.url));
    }

    // Already logged in → block login page
    if (isLoginPage && adminCookie === "authenticated") {
        return NextResponse.redirect(new URL("/admin/dashboard", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*"],
};
