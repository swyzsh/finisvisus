"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Tagline() {
  return (
    <motion.div
      animate={{
        y: -32,
        opacity: 1,
        transition: {
          duration: 1.25,
          delay: 0.25,
          ease: [0, 0.71, 0.2, 1.01],
        },
      }}
      className="absolute top-[32px] opacity-0"
    >
      <Image
        src="/tagline-transparent-dark-min.png"
        alt="Tagline"
        width={741}
        height={60}
        className="px-8"
      />
    </motion.div>
  );
}
