import { getItems, addItem, updateItem, deleteItem } from "@/services/dbService";
import { NextResponse } from "next/server";

const TABLE = "highlights"; // yaha table ka naam set karo

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const category = searchParams.get("category");

        const highlights = await getItems({ table: TABLE, category });

        return NextResponse.json(
            {
                success: true,
                data: highlights,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                success: false,
                message: error.message || "Failed to fetch highlights",
            },
            { status: 500 }
        );
    }
}

export async function POST(req) {
    try {
        const body = await req.json();

        const highlight = await addItem({ table: TABLE, item: body });

        return NextResponse.json(
            {
                success: true,
                data: highlight,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                success: false,
                message: error.message || "Failed to create highlight",
            },
            { status: 500 }
        );
    }
}

export async function PUT(req) {
    try {
        const body = await req.json();
        const { id, ...updates } = body;

        if (!id) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Highlight ID is required",
                },
                { status: 400 }
            );
        }

        const updatedHighlight = await updateItem({ table: TABLE, id, updates });

        return NextResponse.json(
            {
                success: true,
                data: updatedHighlight,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                success: false,
                message: error.message || "Failed to update highlight",
            },
            { status: 500 }
        );
    }
}

export async function DELETE(req) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");

        if (!id) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Highlight ID is required",
                },
                { status: 400 }
            );
        }

        await deleteItem({ table: TABLE, id, imageField: "image" }); // agar image column highlight me cover_image ho

        return NextResponse.json(
            {
                success: true,
                message: "Highlight deleted successfully",
            },
            { status: 200 }
        );
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                success: false,
                message: error.message || "Failed to delete highlight",
            },
            { status: 500 }
        );
    }
}
