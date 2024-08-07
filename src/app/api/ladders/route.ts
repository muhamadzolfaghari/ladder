import getLadderByUserId from "@/lib/db/getLadderByUserId";
import getUser from "@/lib/utilities/getUser";
import { NextResponse } from "next/server";

export default async function GET() {
  try {
    const user = await getUser();

    if (!user?.id) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const row = await getLadderByUserId(user.id);

    if (!row) {
      return NextResponse.json({ error: "Ladder not found" }, { status: 404 });
    }

    return NextResponse.json({ result: row });
  } catch {
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}
