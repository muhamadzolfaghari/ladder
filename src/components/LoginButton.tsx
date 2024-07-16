"use client";
import { useRouter } from "next/router";

const LoginButton = () => {
  const router = useRouter();

  const handleLogin = () => {
    void router.push("/api/auth/google");
  };

  return <button onClick={handleLogin}>Login with Google</button>;
};

export default LoginButton;
