import { User } from "next-auth";
import { auth } from "@/auth";

export default async function getUser(): Promise<User | undefined> {
  const session = await auth();

  if (!session || !session.user) {
    return undefined;
  }

  return session.user;
}
