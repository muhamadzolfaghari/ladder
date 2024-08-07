import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credential from "next-auth/providers/credentials";
import PostgresAdapter from "@auth/pg-adapter";
import { Pool } from "@neondatabase/serverless";

export const { handlers, signIn, signOut, auth } = NextAuth(() => {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });

  return {
    providers: [
      Google({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        authorization: {
          params: {
            prompt: "consent",
            access_type: "offline",
            response_type: "code",
          },
        },
      }),
      Credential({
        credentials: {
          email: {},
        },
        authorize: async (credentials) => {
          return null;
        },
      }),
    ],
    adapter: PostgresAdapter(pool),
  };
});
