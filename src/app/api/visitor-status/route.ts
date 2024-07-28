import { NextResponse } from "next/server";
import insertOrExistVisitorStatus from "@/app/api/visitor-status/db/insertOrExistVisitorStatus";
import getVisitorStatusById from "@/app/api/visitor-status/db/getVisitorStatusById";
import getUser from "@/lib/utilities/getUser";
import client from "@/lib/db";

export async function GET() {
  try {
    const user = await getUser();

    if (!user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const row = await getVisitorStatusById(user.id);
    const isFirstVisit = row?.is_first_visit !== false;

    return NextResponse.json(
      { is_first_visit: isFirstVisit ?? false },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Some errors happened" },
      { status: 500 },
    );
  }
}

export async function POST() {
  try {
    const user = await getUser();

    if (!user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    await insertOrExistVisitorStatus(user.id);

    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    console.log("visitor-status route", error);
    return NextResponse.json(
      { error: "Some errors happened" },
      { status: 400 },
    );
  }
}

// todo remove this route later
export async function DELETE() {
  try {
    const user = await getUser();

    if (!user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    await client.query(`DELETE FROM visitor_status WHERE user_id = ${user.id}`);

    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    console.log("visitor-status route", error);
    return NextResponse.json(
      { error: "Some errors happened" },
      { status: 400 },
    );
  }
}
