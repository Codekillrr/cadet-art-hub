import React from "react";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="bg-neutral-900 h-full w-full rounded-full px-4">
      <div className="w-full h-full flex flex-row justify-between items-center">
        <div className="h-full flex flex-row space-x-1.5 items-center">
          <Image
            src="/logo.svg"
            alt="Creem Icon"
            width={28}
            height={28}
            className="border-[1px] border-yellow-200 rounded-full"
          />
          <div className="text-white [font-family:var(--tech)] pt-1 font-bold">
            <span className="text-slate-300">Cadet</span>{" "}
            <span className="text-blue-400">Artistry</span>{" "}
            <span className="text-red-400">Hub</span>
          </div>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="yellow"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
