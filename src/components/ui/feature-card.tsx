"use client";

import type React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

export const Feature = ({ title, description, icon, index }: FeatureProps) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l border-neutral-800",
        index < 4 && "lg:border-b border-neutral-800"
      )}
    >
      {index < 4 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "-48% 0% -48% 0%" }}
          className="md:hidden transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-amber-950 to-transparent pointer-events-none"
        />
      )}
      {index < 4 && (
        <div className="max-md:hidden opacity-0 group-hover/feature:opacity-100 group-active/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-amber-950 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "-48% 0% -48% 0%" }}
          className="md:hidden transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-amber-950 to-transparent pointer-events-none"
        />
      )}
      {index >= 4 && (
        <div className="max-md:hidden opacity-0 group-hover/feature:opacity-100 group-active/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-amber-950 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-400">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <motion.div
          initial={{ height: "1.5rem", backgroundColor: "#3f3f46" }}
          whileInView={{ height: "2rem", backgroundColor: "#eab308" }}
          viewport={{ margin: "-35% 0% -35% 0%" }}
          className="md:hidden absolute left-0 inset-y-0 w-1 rounded-tr-full rounded-br-full transition-all duration-200 origin-center"
        />
        <div className="max-md:hidden absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-yellow-500 transition-all duration-200 origin-center" />

        <span className="group-hover/feature:translate-x-2 group-active/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
