// app/api/projects/route.js
import { NextResponse } from "next/server";
import { getItems, addItem, updateItem, deleteItem } from "@/services/dbService";

const TABLE_NAME = "projects"; // Table name for this route

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const category = searchParams.get("category");

        // fetch items using generic dbService
        const projects = await getItems({
            table: TABLE_NAME,
            filter: category ? { category } : undefined,
        });

        return NextResponse.json(
            { success: true, data: projects },
            { status: 200 }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { success: false, message: error.message || "Failed to fetch projects" },
            { status: 500 }
        );
    }
}

export async function POST(req) {
    try {
        const body = await req.json();

        const project = await addItem({table: TABLE_NAME, item: body});

        return NextResponse.json(
            { success: true, data: project },
            { status: 201 }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { success: false, message: error.message || "Failed to create project" },
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
                { success: false, message: "Project ID is required" },
                { status: 400 }
            );
        }

        const updatedProject = await updateItem({table: TABLE_NAME, id, updates});

        return NextResponse.json(
            { success: true, data: updatedProject },
            { status: 200 }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { success: false, message: error.message || "Failed to update project" },
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
                { success: false, message: "Project ID is required" },
                { status: 400 }
            );
        }

        await deleteItem({table: TABLE_NAME, id});

        return NextResponse.json(
            { success: true, message: "Project deleted successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { success: false, message: error.message || "Failed to delete project" },
            { status: 500 }
        );
    }
}
