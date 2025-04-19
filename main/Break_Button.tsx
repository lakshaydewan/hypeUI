"use client";
import React from "react";
import { motion } from "framer-motion";

const text = "Breaking";

const Transition = () => {
  return (
    <div className="w-full h-full font-sans flex justify-center items-center">
      <motion.div 
        className="text-white text-2xl font-sans group h-fit z-50 cursor-pointer flex justify-center items-center text-md font-extralight tracking-wide"
        whileHover="hover"
      >
        {text.split("").map((char, index) => {
          const translateYValues = [6, -8, 4, -10, 7, 4, -6, 2];
          const rotateValues = [15, -20, 30, -25, 10, -5, 0, 5];

          return (
            <motion.span
              key={index}
              className="inline-block"
              initial={{ y: 0, rotate: 0 }}
              variants={{
                hover: {
                  y: translateYValues[index % translateYValues.length],
                  rotate: rotateValues[index % rotateValues.length],
                  transition: { duration: 0.5, ease: "easeOut"}
                },
              }}
              style={{
                display: "inline-block",
              }}
            >
              <motion.span
                className="bg-gradient-to-b from-neutral-50 to-neutral-300 transition-all duration-500 ease-out bg-clip-text text-transparent"
              >
                {char}
              </motion.span>
            </motion.span>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Transition;
