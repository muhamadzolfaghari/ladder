import { useRouter } from "next/router";
import Link from "next/link";

export default function Index() {
  const router = useRouter();
  return (
    <div>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/blog">Blog</Link>
    </div>
  );
}
