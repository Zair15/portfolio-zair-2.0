import React from "react";
import { motion } from "framer-motion";
import { ExperienceCard } from "./ExperienceCard";

type Props = {};

export default function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl md:justify-evenly"
    >
      <h3 className="absolute uppercase mt-20 md:mt-0 md:top-24 tracking-[15px] text-gray-500 text-1xl md:text-2xl">
        Experience
      </h3>
      <div className="flex w-full p-8 mt-10 space-x-5 overflow-x-scroll md:mt-0 snap-x snap-mandatory">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
}
