"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen bg-white dark:bg-[#000f1e] overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="z-10 text-center pt-12 sm:pt-16"
      >
        {/* Profile Image */}
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto mb-6">
          <Image
            src="/skills/images.png"
            alt="Saif Eddine Laabidi"
            layout="fill"
            objectFit="cover"
            className="rounded-full shadow-lg"
          />
        </div>

        {/* Name */}
        <div className="text-4xl sm:text-5xl md:text-6xl font-mono font-extrabold mb-2 tracking-tight leading-tight">
          <span className="block text-black dark:text-slate-300 text-xl sm:text-2xl font-light">
            Hi, I’m
          </span>
          <span className="dark:bg-gradient-to-r dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500 bg-clip-text text-black dark:text-transparent">
            Saif Eddine Laabidi
          </span>
        </div>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
          DevOps Engineer
        </p>

        {/* CTA Button */}
        <div className="mt-8 flex justify-center">
          <Link
            href={`${process.env.NODE_ENV === 'production' ? '/SaifEddine-Laabidi-Portfolios' : ''}/resume.pdf`} // Assuming resume file is in public folder
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-base sm:text-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-200"
          >
            View My Resume
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
