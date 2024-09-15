"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { FileText } from "lucide-react";

export default function Intro() {
  return (
    <section id="home" className="flex min-h-dvh items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-6 p-6 sm:flex-row">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Image
            src="/assets/me.png"
            width="480"
            height="480"
            alt="portrait"
            quality="100"
            priority
            className="rounded-full object-cover shadow-xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <h1 className="text-center text-4xl font-bold">👋 Hi, I'm Lucky</h1>
            <h1 className="text-center text-xl">
              a Full-Stack Developer Interested in Technology, Finance, and Innovation
            </h1>
          </div>
          <div className="flex flex-col items-center gap-4 sm:gap-6 sm:flex-row">
            <a
              href="https://drive.google.com/file/d/1lkD47ieBg4C4KmkPOTDuj5CqSVYwdkHQ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-fit items-center justify-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-center text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105"
            >
              Resume / CV <FileText size={24}/>
            </a>
            <a
              href="https://www.linkedin.com/in/tunchanok-punmeros/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-fit items-center justify-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105"
            >
              LinkedIn <BsLinkedin size={24} />
            </a>
            <a
              href="https://github.com/Lucky-TP"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-fit items-center justify-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105"
            >
              GitHub <FaGithubSquare size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
