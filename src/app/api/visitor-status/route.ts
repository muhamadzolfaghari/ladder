// app/api/auth/register/route.js
import { NextResponse } from "next/server";
import { auth } from "@/auth";
import client from "@/lib/db";
import { User } from "next-auth";

async function getIsFirstVisit(userId: string | undefined) {
  const query = "SELECT * FROM visitor_status WHERE user_id = $1";
  const values = [userId];
  const result = await client.query(query, values);
  const [row] = result.rows;
  let is_first_visit = false;

  if (row?.is_first_visit) {
    is_first_visit = true;
  }

  return is_first_visit;
}

async function getUser(): Promise<User | undefined> {
  const session = await auth();

  if (!session || !session.user) {
    NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    return;
  }

  return session.user;
}

export async function GET() {
  try {
    const user = await getUser();

    if (!user?.id) {
      return;
    }

    let is_first_visit = await getIsFirstVisit(user.id);

    return NextResponse.json({ is_first_visit }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Some errors happened" },
      { status: 400 },
    );
  }
}

async function updateOrExitIsFirstVisit(userId: string | undefined) {
  const isFirstVisit = await getIsFirstVisit(userId);

  if (isFirstVisit) {
    return;
  }

  const query = "UPDATE visitor_status WHERE user_id = [userId]";
  client.query(query, [userId]);
}

export async function POST() {
  try {
    const user = await getUser();

    if (!user?.id) {
      return;
    }

    updateOrExitIsFirstVisit(user.id);
  } catch {}
}
