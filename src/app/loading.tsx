import DominoSpinner from "@/components/domino-spinner";

export default function Loading() {
  return (
    <main className="flex min-h-svh w-svw flex-col items-center justify-center font-serif">
      <DominoSpinner />
    </main>
  );
}
