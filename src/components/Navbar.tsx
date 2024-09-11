"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-20 w-full bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold">
          <Link href="#home">Lucky</Link>
        </div>
        <div className="hidden gap-6 md:flex">
          <Link href="#home" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="#projects" className="hover:text-blue-600">
            Projects
          </Link>
          <Link href="#education" className="hover:text-blue-600">
            Education
          </Link>
          <Link href="#skills" className="hover:text-blue-600">
            Skills
          </Link>
        </div>
        <button onClick={toggleMenu} className="block text-2xl focus:outline-none md:hidden">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, height: 0 }}
          className="fixed top-16 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center justify-center h-auto"
        >
          <Link href="#home" onClick={toggleMenu} className="py-2">
            Home
          </Link>
          <Link href="#projects" onClick={toggleMenu} className="py-2">
            Projects
          </Link>
          <Link href="#education" onClick={toggleMenu} className="py-2">
            Education
          </Link>
          <Link href="#skills" onClick={toggleMenu} className="py-2">
            Skills
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
