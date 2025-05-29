import React from "react";
import { cn } from "@/lib/utils";

const GlowTittle = ({ text, className }) => {
  return (
    <span className="h-full flex justify-center items-start pr-2">
      <span
        className={cn(
          "absolute mx-auto font-geistMono text-[1.7rem] flex border w-fit bg-white blur-xl   bg-clip-text box-content font-extrabold text-transparent text-center select-none",
          className
        )}
      >
        {text}
      </span>
      <h1
        className={cn(
          "relative top-0 font-geistMono w-fit h-auto justify-center flex bg-white items-center  bg-clip-text font-extrabold text-transparent text-center select-auto",
          className
        )}
      >
        {text}
      </h1>
    </span>
  );
};

export default GlowTittle;
