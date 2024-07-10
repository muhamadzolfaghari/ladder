import { NextResponse, NextRequest } from "next/server";
import signupSchema from "@/lib/signupSchema";

const POST = async function (req: NextRequest) {
  try {
    const result = signupSchema.safeParse(await req.json());
    if (!result.success) {
      return NextResponse.json(
        {
          message: "Validation error",
          errors: result.error.errors,
        },
        { status: 400 }
      );
    }

    const { name, email, password } = result.data;

    return NextResponse.json({
      message: "User registered successfully",
      data: [{ name }],
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "An error occurred",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
};

export { POST };
