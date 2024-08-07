import type { Metadata } from "next";
import "./globals.css";
import Theme from "@/lib/theme/Theme";
import { AuthProvider } from "@/components/AuthContext";
import NextAuthProvider from "@/components/NextAuthProvider";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
      <QueryClientProvider client={queryClient}>
            <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <NextAuthProvider>
          <AuthProvider>
            <Theme>{children}</Theme>
          </AuthProvider>
        </NextAuthProvider>
      </body>
    </html>
    </QueryClientProvider>




);
}
