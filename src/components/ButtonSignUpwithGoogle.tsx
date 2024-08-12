"use client";

import { Button } from "@mui/material";
import React from "react";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import googleicon from "../../public/icons/google-icon.svg";
import GoogleIconSvg from "./GoogleIconSvg";

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
        <Button
          onClick={handleSignIn}
          sx={{
            width: "100%",
            mb: 5,
            mt: 5,
            color: "#424940",
            border: "1px solid #424940",
            padding: "0.6rem",
          }}
        >
          {" "}
          <GoogleIconSvg />
        Google
        </Button>
      ) : (
        <Button
          variant="outlined"
          sx={{
            width: "100%",
            mb: 5,
            mt: 5,
            color: "#424940",
            border: "1px solid #424940",
            padding: "0.6rem",
          }}
          onClick={() => signOut()}
        >
          <GoogleIconSvg />
          Sign Out
        </Button>
      )}
    </>
  );
}
