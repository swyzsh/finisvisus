import Image from "next/image";
import Tagline from "@/components/tagline";

export default function Home() {
  return (
    <main className="flex min-h-svh w-svw flex-col items-stretch justify-start font-sans">
      <section className="flex h-[75svh] items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-8 px-8 py-16">
          <Image
            src="/full-logo-transparent-dark-min.png"
            alt="Finis Visus Logo"
            width={1041}
            height={237}
            priority
          />
          <div className="relative flex h-auto w-full items-center justify-center">
            <Tagline />
          </div>
        </div>
      </section>
    </main>
  );
}
