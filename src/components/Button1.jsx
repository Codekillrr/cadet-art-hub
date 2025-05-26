import React from "react";
import Link from "next/link";

const Button1 = ({ children }) => {
  return (
    <Link href="/get-started">
      <button className="bg-neutral-800  border-neutral-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-700 rounded-full p-px text-[0.6rem] font-semibold leading-6  text-white inline-block">
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-active:opacity-100" />
        </span>
        <div className="relative flex space-x-2 items-center z-10 rounded-full bg-neutral-900 py-1.5 px-5 ring-1 ring-white/10 ">
          {children}
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-red-600/0 via-red-600/90 to-red-600/0 transition-opacity duration-500 group-hover:opacity-40 group-active:opacity-40" />
      </button>
    </Link>
  );
};

export default Button1;
