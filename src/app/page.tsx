import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-svh w-svw flex-col items-stretch justify-start font-sans">
      <section className="flex h-[75svh] items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-8 px-8 py-16">
          <Image
            src="/full-logo-transparent.svg"
            alt="Finis Visus Logo"
            width={1041}
            height={237}
            priority
          />
          <Image
            src="/tagline-transparent.svg"
            alt="Tagline"
            width={741}
            height={60}
            priority
            className="px-8"
          />
        </div>
      </section>
    </main>
  );
}
