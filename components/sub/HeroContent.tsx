"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <span className="relative flex h-3 w-3 mr-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-sky-500 opacity-75 animate-ping [animation-duration:2s]"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500"></span>
          </span>
          <h1 className="Welcome-text text-[13px] flex items-center gap-2">
            Coming Soon
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            DevDisplay
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Studio{" "}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          DevDisplay Studio empowers startups, enterprises, and agencies with premium and powerful software solutions by OG DevDisplay Developers.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="relative py-3 px-8 text-center text-white font-semibold rounded-lg max-w-[220px] bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 shadow-lg shadow-cyan-500/50 hover:scale-110 hover:shadow-xl transition-transform duration-300 ease-in-out overflow-hidden"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 opacity-30 blur-lg"></span>
          <span className="relative z-10 flex items-center justify-center gap-2">
            Join the Waitlist
          </span>
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/ICON1.png"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
