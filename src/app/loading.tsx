"use client";

export default function Loading() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Loading Content */}
      <div className="relative flex flex-col items-center text-center">
        {/* Animated Loader */}
        <div className="relative mb-8 flex h-20 w-20 items-center justify-center">
          <div className="absolute inset-0 rounded-full border-4 border-rose-200" />
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-rose-400 border-r-rose-400" />
        </div>

        {/* Loading Text */}
        <h2 className="text-xl font-semibold tracking-tight text-rose-400!">
          Loading<span className="animate-pulse">...</span>
        </h2>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes loading {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
      `}</style>
    </main>
  );
}
