import ButtonLogin from "@/components/ButtonLogin";
import FAQItems from "@/components/FAQItems";

export default function Home() {
  const userName = "Wuhao";
  const isLoggedIn = true;
  return (
    <main>
      {/* HEADER */}
      <section className="bg-base-200">
        <div className="max-w-3xl mx-auto flex justify-between py-2 px-8 align items-center">
          <div className="font-bold">ProductName</div>
          <div className="space-x-6 max-md:hidden">
            <a className="link link-primary" href="#price">
              Price
            </a>
            <a className="link link-primary" href="#faq">
              Q&A
            </a>
          </div>
          <div>
            <ButtonLogin isLoggedIn={isLoggedIn} userName={userName} />
          </div>
        </div>
      </section>
      {/* HERO */}
      <section className="text-center py-32 px-8 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6 lg:text-5xl">
          A product that make developer get better feedback
        </h1>
        <div className="opacity-90 mb-10">The hero page practice</div>
        <ButtonLogin isLoggedIn={isLoggedIn} userName={userName} />
      </section>
      {/* PRICE */}
      <section className="bg-base-200 " id="price">
        <div className="py-32 px-8 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary mb-4">
            Price
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-center mb-12">
            A pricing that adapts to your needs
          </h2>
          <div className="p-8 bg-base-100 max-w-96 mx-auto rounded-3xl space-y-6">
            <div className="flex gap-2 items-baseline">
              <div className="text-4xl font-black">$19</div>
              <div className="uppercase text-sm font-medium opacity-60">
                /mouth
              </div>
            </div>
            <ul className="space-y-2">
              {[
                "features01",
                "features02",
                "features03",
                "features04",
                "features05",
                "features06",
              ].map((listItem) => (
                <li className="flex items-center gap-2" key={listItem}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="size-4 text-green-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {listItem}
                </li>
              ))}
            </ul>
            <ButtonLogin
              isLoggedIn={isLoggedIn}
              userName={userName}
              extraStyle="w-full"
            />
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="bg-base-200 " id="faq">
        <div className="py-32 px-8 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary mb-4">
            Q&A
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-center mb-12">
            Frequently asked questions
          </h2>
          <ul className="max-w-lg mx-auto">
            {[
              {
                question: "First Question",
                answer: "Answer01",
              },
              {
                question: "Second Question",
                answer: "Answer02",
              },
              {
                question: "Third Question",
                answer: "Answer03",
              },
            ].map((qs) => (
              <FAQItems key={qs.question} qs={qs} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
