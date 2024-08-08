import getLadderByUserId from "@/lib/db/getLadderByUserId";
import { updateLaddersByUserId } from "@/lib/db/updateLaddersByUserId";
import getUser from "@/lib/utils/getUser";
import CreateLadderRequest from "@/types/CreateLadderRequest";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest): Promise<NextResponse> {
  try {
    const user = await getUser();

    if (!user?.id) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const row = await getLadderByUserId(user.id);

    if (!row) {
      return NextResponse.json({ error: "Ladder not found" }, { status: 404 });
    }

    const newLadder = (await request.json()) as CreateLadderRequest;
    await updateLaddersByUserId(user.id, newLadder);

    return NextResponse.json({ result: "ok" });
  } catch (e) {
    console.log(e);
    return NextResponse.json(e);
  }
}
