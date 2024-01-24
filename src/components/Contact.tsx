"use client"

import React from "react";
import SectionHeading from "./SectionHeading";
import { FaPaperPlane } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { motion } from 'framer-motion';

const Contact = () => {

    const {ref} = useSectionInView("Contact", 0.5)
  return (
    <motion.section ref={ref} id="contact" className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center"
    initial={{
        opacity:0
    }}
    whileInView={{
        opacity:1
    }}
    transition={{
        duration:1
    }}>
      <SectionHeading>Contact</SectionHeading>

      <p className="text-gray-700 -mt-6">
        Please contact us directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          example@gmail.com
        </a>
        or trhough this form
      </p>

      <form className="mt-10 flex flex-col">
        <input type="email" className="h-14 px-4 rounded-lg borderBlack" placeholder="Your email" />
        <textarea className="h-52 my-3 rounded-lg borderBlack p-4" placeholder="Your massage"/>
        <button
          type="submit"
          className="flex group gap-2 items-center justify-center h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950
          active:scale-100]"
        >
          Submit <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"/>
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
