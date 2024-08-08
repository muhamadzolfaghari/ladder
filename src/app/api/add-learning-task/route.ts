import CreateLadderRequest from "@/types/CreateLadderRequest";
import { NextRequest, NextResponse } from "next/server";
import getUser from "@/lib/utilities/getUser";
import { insertLaddersByUserId } from "@/lib/db/insertLaddersByUserId";
import getLadderByUserId from "@/lib/db/getLadderByUserId";
import { LearningPath } from "@/types/Ladder";
import { z } from "zod";

const LearningTaskSchema = z.object({
  task: z.string(),
  resource: z.string(),
  time: z.string(),
});

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const user = await getUser();

    if (!user?.id) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const learningPath = (await request.json()) as LearningPath;

    if (LearningTaskSchema.safeParse(learningPath).success) {
      return NextResponse.json(
        { error: "Learning path is not valid" },
        { status: 400 }
      );
    }

    const ladder = await getLadderByUserId(user.id);

    if (!ladder) {
      return NextResponse.json(
        { error: "Ladder does not exist" },
        { status: 400 }
      );
    }

    return NextResponse.json({ result: "ok" });
  } catch (e) {
    console.error("create-ladder-api", e);
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}
