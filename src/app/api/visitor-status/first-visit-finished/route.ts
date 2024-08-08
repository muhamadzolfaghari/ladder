import { NextResponse } from "next/server";
import getUser from "@/lib/utils/getUser";
import updateVisitorStatusById from "@/lib/db/updateVisitorStatusById";

export async function POST() {
  try {
    const user = await getUser();

    if (!user?.id) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    await updateVisitorStatusById(user.id, false, false);

    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    console.log("visitor-status route", error);
    return NextResponse.json(
      { error: "Some errors happened" },
      { status: 400 }
    );
  }
}
