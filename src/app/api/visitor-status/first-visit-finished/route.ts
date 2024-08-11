import { NextResponse } from "next/server";
import getUser from "@/lib/utils/getUser";
import insertIntoTable from "@/lib/db/InsertIntoTable";

export async function POST() {
  try {
    const user = await getUser();

    if (!user?.id) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    await insertIntoTable("visitor_status", {
      user_id: user.id,
      is_first_visit: false,
    });

    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    console.log("visitor-status route", error);
    return NextResponse.json(
      { error: "Some errors happened" },
      { status: 400 }
    );
  }
}
