"use client";
import { motion, scale } from "motion/react";
import { FaExpandAlt } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
export default function Card({ item, isFlipped, onCardClick }) {
  const colorVariants = {
    cyan: {
      gradient: "from-cyan-300 to-cyan-800",
      text: "text-cyan-800",
      line: "text-cyan-600",
      back: "bg-cyan-900",
      backText: "text-cyan-200",
    },
    emerald: {
      gradient: "from-emerald-300 to-emerald-800",
      text: "text-emerald-800",
      line: "text-emerald-600",
      back: "bg-emerald-900",
      backText: "text-emerald-200",
    },
    indigo: {
      gradient: "from-indigo-300 to-indigo-800",
      text: "text-indigo-800",
      line: "text-indigo-500",
      back: "bg-indigo-900",
      backText: "text-indigo-200",
    },
    // Add other colors you plan to use here
  };
  const selectedColor = colorVariants[item.color];

  return (
    <div
      className="select-none perspective-1000 w-36 h-52 md:w-44 md:h-60 lg:w-48 lg:h-64 xl:w-56 xl:h-72 2xl:w-64 2xl:h-80  "
      onClick={() => onCardClick(item.id)}
    >
      <motion.div
        className="relative w-full h-full cursor-pointer"
        style={{ transformStyle: "preserve-3d" }}
        initial={{ rotateY: 0 }}
        animate={{
          rotateY: isFlipped ? 180 : 0,
          scale: isFlipped ? 1.1 : 1,
        }}
        whileHover={{
          scale: 1.1,
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
          delay: isFlipped ? 0 : 0.22,
        }}
      >
        <div
          className={`absolute w-full h-full rounded-2xl shadow-lg flex flex-col items-center justify-center p-4 text-white bg-gradient-to-br hover:shadow-[0px_10px_20px_rgba(0,0,0,0.3)]  transition-all duration-700 ${selectedColor.gradient}  `}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className=" flex flex-col justify-start gap-3  ">
            {item.pinned && <span className="absolute right-3 top-3">📌</span>}
            <span className="absolute top-3 left-3  ">{item.icon}</span>
            <h2
              className={`font-extrabold text-xs sm:text-sm  lg:text-base xl:text-xl ${selectedColor.text}`}
            >
              {item.title.slice(0, 50)}
            </h2>{" "}
            <hr className={`${selectedColor.line}`} />
            <p
              className={`${selectedColor.text} text-xs lg:text-sm  font-bold`}
            >
              {item.aiSummarize.slice(0, 40)}
            </p>
          </div>
        </div>

        <div
          className={`absolute w-full h-full rounded-2xl shadow-lg flex flex-col items-center justify-center p-4 ${selectedColor.back} text-white shadow-[0px_10px_20px_rgba(0,0,0,0.3)]   transition-all duration-700`}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div
            className={` font-light  text-xs  lg:text-sm xl:text-base   ${selectedColor.backText}`}
          >
            {item.note.length > 90 ? `${item.note.slice(0, 90)}...` : item.note}
            <Link href={`note/${item.id}`}>
              <span className={`absolute right-4 top-4 text-xl lg:text-3xl `}>
                <FaExpandAlt />
              </span>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
