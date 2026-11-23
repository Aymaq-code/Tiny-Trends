"use client";

import Link from "next/link";

export default function Error() {
  return (
    <main className="min-h-screen mt-10">
      {/* Error Content */}
      <div className=" text-center shadow-sm sm:p-10 rounded-2xl flex flex-col items-center gap-2 h-120">
        {/* Error Icon */}
        <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-2xl border border-gray-400/20! bg-red-100/10!">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="38"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-red-400">
            <circle cx="12" cy="12" r="10" />
            <path d="m15 9-6 6" />
            <path d="m9 9 6 6" />
          </svg>
        </div>
        {/* Error Heading */}
        <span className="mb-3 inline-block rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-red-400">
          Something went wrong
        </span>
        <h1 className="text-3xl! font-bold tracking-tight! text-stone-700!">
          Oops! An error occurred.
        </h1>
        <p className="mt-4! text-sm! leading-7 text-slate-500 w-[50%]">
          We encountered an unexpected problem while processing your request.
          Please try again. We&apos;re sorry for the inconvenience.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href={"/"}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-stone-100 px-5 py-3 text-sm font-semibold text-slate-700! transition-all hover:bg-black/10 hover:text-black!">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
