import { auth } from "@/auth";
import { SignIn } from "@/components/sign-in";

export default async function Page() {
  const session = await auth();
  return (
    <p>
      Welcome {session?.user?.name}!<SignIn />
    </p>
  );
}
