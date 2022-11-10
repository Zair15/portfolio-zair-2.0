import React from "react";
import { motion } from "framer-motion";

type Props = {};

export const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col items-center flex-shrink-0 rounded-lg space-y-7 w-[300px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src="https://i.ibb.co/s96xXpd/Asset-7.jpg"
        alt="experience_logo"
        className="w-14 h-14 md:w-32 md:h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-top"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light md:text-4xl">
          FULL STACK DEVELOPER
        </h4>
        <p className="mt-1 text-2xl font-bold">the code genesis</p>
        <div className="flex my-2 space-x-2">
          <img
            className="w-10 h-10 rounded-full"
            src="https://reactjs.org/logo-og.png"
            alt="react_logo"
          />
          <img
            className="w-10 h-10 rounded-full"
            src="https://reactjs.org/logo-og.png"
            alt="react_logo"
          />
          <img
            className="w-10 h-10 rounded-full"
            src="https://reactjs.org/logo-og.png"
            alt="react_logo"
          />
        </div>
        <p className="py-5 text-gray-300 uppercase">
          Started work... - Ended...
        </p>
        <ul className="ml-5 space-y-4 text-lg list-disc">
          <li>Summary Point</li>
          <li>Summary Point</li>
          <li>Summary Point</li>
          <li>Summary Point</li>
          <li>Summary Point</li>
        </ul>
      </div>
    </article>
  );
};
