import { addEmail, getEmails } from "@/services/emails";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url)
        const page = +searchParams.get("page") || 1

        const { data, count } = await getEmails(page)

        return NextResponse.json(
            { success: true, data, totalEmails: count, page, perPage: 18 }
        )
    }
    catch (error) {
        return NextResponse.json(
            {success: false, message: "Failed to fetch emails"},
            {status: 500}
        )
    }
}

export async function POST(req) {
    try {
        const body = await req.json()
        const { email } = body

        if (!email) {
            return NextResponse.json(
                { success: false, message: "Email is required!" },
                { status: 400 }
            )
        }

        const res = await addEmail(email)

        return NextResponse.json(
            { success: true, body: res },
            { status: 201 }
        )
    } catch (error) {
        console.error("POST /api/emails error:", error)
        return NextResponse.json(
            { success: false, message: error.message },
            { status: 500 }
        )
    }
}