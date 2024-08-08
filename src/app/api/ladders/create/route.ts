import CreateLadderRequest from "@/types/CreateLadderRequest";
import { NextRequest, NextResponse } from "next/server";
import getUser from "@/lib/utils/getUser";
import { insertLaddersByUserId } from "@/lib/db/insertLaddersByUserId";
import getLadderByUserId from "@/lib/db/getLadderByUserId";

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const user = await getUser();

    if (!user?.id) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const row = await getLadderByUserId(user.id);

    if (row) {
      return NextResponse.json(
        { error: "Ladder already exists" },
        { status: 400 }
      );
    }

    const newLadder = (await request.json()) as CreateLadderRequest;
    await insertLaddersByUserId(user.id, newLadder);

    return NextResponse.json({ result: "ok" });
  } catch (e) {
    console.error("create-ladder-api", e);
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}
