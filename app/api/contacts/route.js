import { NextResponse } from "next/server";
import { addContact, getContacts } from "@/services/contacts";

export async function GET(req) {
    try {
        // extract "page" from query in url
        const { searchParams } = new URL(req.url)
        const page = +searchParams.get('page') || 1

        // data from supabase by calling getContacts
        const { data, count } = await getContacts(page)

        // return data to frontend
        return NextResponse.json({
            success: true, data, totalContacts: count, page, perPage: 6
        })
    }
    catch (error) {
        return NextResponse.json(
            { success: false, message: "Failed to fetch contacts" },
            { status: 500 }
        )
    }
}

export async function POST(req) {
    try {
        const body = await req.json()
        const { email, message } = body

        if (!email || !message) {
            return NextResponse.json(
                { success: false, message: "All fields are required" },
                { status: 400 }
            )
        }

        const contact = await addContact(body)

        return NextResponse.json(
            { success: true, data: contact },
            { status: 201 }
        )
    }
    catch (error) {
        console.error("POST /api/contacts error:", error)
        return NextResponse.json(
            { success: false, message: "Failed to add contact" },
            { status: 500 }
        )
    }
}