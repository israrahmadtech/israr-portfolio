import { NextResponse } from "next/server";

export async function POST(req) {
  const res = NextResponse.json({ success: true, message: "Logged out" });

  res.cookies.set("admin-auth", "", {
    path: "/",
    maxAge: 0,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });

  return res;
}
