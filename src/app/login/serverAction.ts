"use server";
import {signIn} from "@/auth";

const serverAction = async (formData: FormData) => {
    "use server";
    await signIn("credentials", formData);
}

export default serverAction;