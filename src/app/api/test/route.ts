// app/api/auth/register/route.js
import { NextResponse } from "next/server";
import client from "@/lib/db";

export async function GET(request: Request) {
  // const { email, password, name } = await request.json();

  // const hashedPassword = await bcrypt.hash(password, 10);

  try {
    // await client.query(
    //   "INSERT INTO users (email, password, name) VALUES ($1, $2, $3)",
    //   [email, hashedPassword, name],
    // );

    //

    console.log(client);

    client.query("SELECT * FROM users").then((res) => {
      console.log(res.rows);
    });

    return NextResponse.json({ message: "User created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }
}
