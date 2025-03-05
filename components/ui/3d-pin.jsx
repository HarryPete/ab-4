"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}) => {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href={href || "/"}
      target="_blank"
      className={cn(
        "relative group flex flex-col items-center justify-center text-white p-4 rounded-lg transition-transform duration-500",
        containerClassName
      )}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: hover ? 0.9 : 1 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "p-4 bg-stone-900 rounded-lg shadow-lg transition-all",
          className
        )}
      >
        {children}
      </motion.div>
      <PinPerspective title={title} href={href} />
    </Link>
  );
};

export const PinPerspective = ({ title, href }) => {
  return (
    <motion.div
      className="pointer-events-none absolute opacity-0 group-hover:opacity-100 transition duration-300"
    >
      <div className="absolute inset-0 flex justify-center items-center">
        <a
          href={href}
          target="_blank"
          className="relative flex items-center space-x-2 rounded-full bg-green-600 py-1 px-4 text-xs ring-1 ring-white/10 transition"
        >
          <span>{title}</span>
        </a>
      </div>
    </motion.div>
  );
};
