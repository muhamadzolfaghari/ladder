"use client";

import { Button } from "@mui/material";
import React from "react";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import googleicon from "../../public/icons/google-icon.svg";

export default function ButtonSignUpwithGoogle() {
  const { data: session } = useSession();
  const router = useRouter();
  console.log(session);
  
   const handleSignIn = async () => {
     await signIn("google", { callbackUrl: "/home" });
   };
  return (
    <>
      {!session ? (
        <button onClick={handleSignIn}>Sign in with Google</button>
      ) : (
        <button onClick={() => signOut()}>Sign out</button>
      )}
    </>
  );
}
