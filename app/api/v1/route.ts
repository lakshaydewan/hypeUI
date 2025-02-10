import { NextRequest, NextResponse } from "next/server";

const dummyData = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
    { id: 3, name: "Bob Smith" },
    { id: 4, name: "Alice Johnson" },
    { id: 5, name: "John Doe" },
    { id: 6, name: "Jane Doe" },
    { id: 7, name: "Bob Smith" },
    { id: 8, name: "Alice Johnson" },
    { id: 9, name: "John Doe" },
    { id: 10, name: "Jane Doe" },
];

export async function GET(req: NextRequest) {
    
    const { searchParams } = req.nextUrl;
    const { method } = req;
    const quantity = Number(searchParams.get("quantity"))

    if (quantity) {
        return NextResponse.json(dummyData.slice(0, quantity ));
    }

    if (method === "GET") {
        return NextResponse.json(dummyData);
    }
}