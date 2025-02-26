import Image from "next/image";
import ButtonLogin from "@/components/ButtonLogin";

export default function Home() {
  const userName = "Wuhao";
  const isLoggedIn = true;
  return (
    <main>
      <section className="bg-base-200">
        <div className="max-w-3xl mx-auto flex justify-between py-2 px-8 align items-center">
          <div className="font-bold">ProductName</div>
          <div className="space-x-6 max-md:hidden">
            <a className="link link-primary">Price</a>
            <a className="link link-primary">Q&A</a>
          </div>
          <div>
            <ButtonLogin isLoggedIn={isLoggedIn} userName={userName} />
          </div>
        </div>
      </section>
      <section className="text-center py-32 px-8 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6 lg:text-5xl">
          A product that make developer get better feedback
        </h1>
        <div className="opacity-90 mb-10">The hero page practice</div>
        <ButtonLogin isLoggedIn={isLoggedIn} userName={userName} />
      </section>
    </main>
  );
}
