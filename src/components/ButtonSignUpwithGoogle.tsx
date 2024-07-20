"use client";

import { Button } from "@mui/material";
import React from "react";
import Image from "next/image";
import { signInWithGoogle } from "@/lib/auth-actions";
import googleicon from "../../public/icons/google-icon.svg";


export default function ButtonSignUpwithGoogle() {
  return (
    <Button
      fullWidth
      variant="outlined"
      sx={{ marginBottom: "2rem" }}
      onClick={() => {
        signInWithGoogle();
      }}
    >
      <Image
        width={18}
        height={18}
        src={googleicon.src}
        alt="G-MAIL"
        style={{ marginRight: "0.5rem" }}
      />
      Google
    </Button>
  );
}
