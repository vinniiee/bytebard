import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const topics = await db.topic.findMany({
            take: 10,
        });
        return NextResponse.json(topics);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch topics' }, { status: 500 });
    }
}