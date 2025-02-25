import Image from "next/image";
import Link from "next/link";

export default function dashboard() {
  return (
    <main>
      <div>private dashboard</div>
      <Link href="localhost:3000">Home page</Link>
    </main>
  );
}
