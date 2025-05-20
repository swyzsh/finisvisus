"use client";

import Link from "next/link";
import { motion } from "motion/react";
import ThemeToggle from "@/components/theme-toggle";
import { HouseIcon, BookOpenTextIcon } from "lucide-react";

export default function Navbar() {
  return (
    <motion.div
      key="navbar"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 1.75,
          delay: 0.25,
          ease: [0, 0.71, 0.2, 1.01],
        },
      }}
      className="grid grid-cols-3 grid-rows-1 pt-4"
    >
      <div></div>
      <div className="z-50 flex flex-row items-center justify-center gap-1 font-serif max-md:gap-0.5">
        <Link href="/" aria-label="Go home" className="btn-nav gap-1.5">
          <HouseIcon
            className="h-4 w-4 max-md:h-3.5 max-md:w-3.5"
            strokeWidth={2.5}
          />
          Home
        </Link>
        <Link
          href="#portfolio"
          aria-label="Go to about"
          className="btn-nav gap-1.5"
        >
          <BookOpenTextIcon
            className="h-4 w-4 max-md:h-3.5 max-md:w-3.5"
            strokeWidth={2.5}
          />
          Portfolio
        </Link>
      </div>
      <div className="flex items-center justify-end px-4">
        <ThemeToggle />
      </div>
    </motion.div>
  );
}
