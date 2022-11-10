import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl md:justify-evenly"
    >
      <h3 className="absolute uppercase top-24 tracking-[20px] text-gray-500 text-1xl md:text-2xl">
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="https://i.ibb.co/GvWYprj/portfolio-pic.jpg"
        className="mt-28 flex-shrink-0 object-cover w-28 h-28 rounded-full md:mb-0 md:mt-0 md:rounded-lg md:w-[300px] md:h-[400px] xl:w-[300px] xl:h-[400px] "
      />

      <div className="px-0 mt-5 space-y-6 md:px-10">
        <h4 className="text-3xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm md:text-base">
          I&apos;m Zair, ❤️ Innovative Web Developer with 1year of Experience in
          Mern Stack, Laravel, Next.Js, Redux, Javascript, Typescript. I work
          Smoothly Under deadline pressure and constantly upgrade my skills. I
          am an easy person to integrate with the team, and responsible enough
          to work with no Supervision. I am a Client-Oriented Full Stack Web
          Developer, that&apos;s why i am always finding best possible solution
          for any issue.
        </p>
      </div>
    </motion.div>
  );
}
