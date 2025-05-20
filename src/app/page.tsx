import Image from "next/image";
import clsx from "clsx";

import previewHootAi from "@/app/_assets/preview-hoot-ai.png";

export default function Home() {
  return (
    <main className="flex min-h-svh w-svw flex-col items-stretch justify-start font-serif">
      <section className="flex h-[calc(100svh-48px)] flex-col items-center justify-center py-2 max-md:h-[calc(100svh-54px)]">
        <div className="flex flex-col items-center justify-center gap-8 px-16 py-8 max-md:px-8">
          <Image
            src="/full-logo-transparent-dark-min.png"
            alt="Finis Visus Logo"
            width={4162}
            height={946}
            priority
            className="hidden dark:block"
          />
          <Image
            src="/full-logo-transparent-min.png"
            alt="Finis Visus Logo"
            width={4162}
            height={946}
            priority
            className="block dark:hidden"
          />
          <h1 className="relative w-max cursor-default select-none whitespace-nowrap font-oldeEnglish text-5xl font-medium before:absolute before:inset-0 before:animate-typewriter before:bg-honiedwhite after:absolute after:inset-0 after:w-[0.075em] after:animate-caret after:bg-nero max-md:text-2xl dark:before:bg-nero dark:after:bg-honiedwhite">
            Insight begins where vision fades.
          </h1>
        </div>
      </section>
      <section id="portfolio" className="px-4 py-12">
        <div className="container ml-auto mr-auto">
          <h4 className="cursor-default select-none whitespace-nowrap pb-3 text-start text-2xl font-semibold max-md:text-xl">
            Portfolio
          </h4>
          <div
            className={clsx(
              "ml-auto mr-auto flex w-full flex-col items-start justify-start gap-3",
              "rounded-md border p-3 font-serif backdrop-blur-md",
              "border-nero/80 bg-nero/80 dark:border-honiedwhite/80 dark:bg-honiedwhite/80",
            )}
          >
            <div
              aria-label="hoot-ai"
              className="grid w-full grid-cols-2 grid-rows-1"
            >
              <div className="flex cursor-default select-none flex-col items-center justify-center text-honiedwhite dark:text-nero">
                <h5 className="text-xl font-medium max-md:text-lg">Hoot AI</h5>
                <span className="text-base max-md:text-sm">
                  Your second brain, just for tweets.
                </span>
                <span className="text-base max-md:text-sm">Tags: #Web2</span>
              </div>
              <a
                href="https://hoot.finisvisus.com"
                target="_blank"
                className="ml-auto mr-auto max-w-32 cursor-pointer"
              >
                <Image
                  src={previewHootAi}
                  alt="Preview Hoot AI"
                  width={2018}
                  height={1536}
                  className="rounded-md border border-honiedwhite/80 dark:border-nero/80"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
