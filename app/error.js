"use client";
export default function Error({ error, reset }) {
  return (
    <main className="flex justify-center items-center flex-col gap-6 h-screen bg-emerald-50 text-emerald-600">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">{error.message}</p>

      <button
        className="inline-block bg-emerald-600 text-amber-50 rounded-xl px-6 py-3 text-lg"
        onClick={reset}
      >
        Try again
      </button>
    </main>
  );
}
