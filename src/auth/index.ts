import NextAuth, { User, NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const BASE_PATH = "/api/auth";

const authOptions: NextAuthConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  basePath: BASE_PATH,
  secret: process.env.NEXTAUTH_SECRET,
  
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
