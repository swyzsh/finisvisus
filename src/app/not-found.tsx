import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-svh w-svw flex-col items-stretch justify-start font-serif">
      <section className="flex h-[calc(100svh-128px)] flex-col items-center justify-center">
        <h2 className="flex flex-row items-center justify-center gap-0 px-2 py-4 font-oldeEnglish text-4xl">
          Not Found<span className="mt-2">˙◠˙</span>
        </h2>
        <p className="px-2 pb-8 text-base">
          Could not find requested resource.
        </p>
        <Link href="/" className="btn-primary backdrop-blur-md">
          Return Home
        </Link>
      </section>
    </main>
  );
}
