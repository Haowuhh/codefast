import Image from "next/image";
import ButtonLogin from "@/components/ButtonLogin";

export default function Home() {
  const userName = "Wuhao";
  const isLoggedIn = true;
  return (
    <main>
      <h1>A product that make developer get better feedback</h1>
      <div>The hero page practice</div>
      <ButtonLogin isLoggedIn={isLoggedIn} userName={userName} />
    </main>
  );
}
