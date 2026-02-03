"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "motion/react";

const Button = ({
  className,
  icon,
  firstIconClassName,
  secondIconClassName,
}: {
  className?: string;
  icon: React.ReactNode;
  firstIconClassName?: string;
  secondIconClassName?: string;
}) => {
  return (
    <motion.div
      whileHover={{ scale: "1.1" }}
      className={cn(
        "bg-neutral-800  size-10 flex ease-out will-change-transform hover:cursor-pointer rounded-full items-center justify-center overflow-hidden relative group transition duration-200",
        className
      )}
    >
      <div
        className={cn(
          "size-6 ease-out  absolute flex items-center blur-sm group-hover:blur-none opacity-0 group-hover:opacity-100 justify-center h-full w-full duration-350 -translate-x-full group-hover:translate-x-0",
          firstIconClassName
        )}
      >
        {icon}
      </div>
      <div
        className={cn(
          "size-6 absolute flex items-center justify-center h-full w-full duration-350 translate-x-0 group-hover:translate-x-full",
          secondIconClassName
        )}
      >
        {icon}
      </div>
    </motion.div>
  );
};

export default Button;
