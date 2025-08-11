'use client';

import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "../app/ThemeToggle";
import Logo from "./Logo";

const Navbar = () => {
  const navItems = [
    { name: "About", to: "#about", href: "/" },
    { name: "Skills", to: "#skills", href: "/" },
    { name: "Experience", to: "#experience", href: "/" },
    { name: "Certifications", to: "#certifications", href: "/" },
    { name: "Projects", to: "#projects", href: "/" },
    { name: "Contact", to: "#contact", href: "/" }
  ];

  const buttons = [
    { link: "mailto:saifabidi822@gmail.com", icon: <Mail size={20} /> },
    { link: "", icon: <Github size={20} /> },
    { link: "https://www.linkedin.com/in/saif-eddine-laabidi-41882a189", icon: <Linkedin size={20} /> },
    {
      link: "https://www.credly.com/users/abidi-saif",
      icon: (
        <Image src="/skills/credly.png" alt="Credly" width={20} height={20} />
      ),
    },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white dark:bg-[#000f1e] text-black dark:text-white border-b border-gray-800"
          : "bg-transparent text-black dark:text-white"
      }`}
    >
      <div className="relative z-10 flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="logo">
          <Logo />
        </div>

        <nav className="hidden md:flex gap-8 font-semibold uppercase text-[17px]">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item.to)}
              className="hover:text-yellow-500 transition cursor-pointer"
            >
              {item.name.toUpperCase()}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex gap-6 items-center">
          <div className="flex gap-4">
            {buttons.map((btn, index) => (
              <Link
                key={index}
                href={btn.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors duration-200"
              >
                {btn.icon}
              </Link>
            ))}
          </div>
          <ThemeToggle />
        </div>

        <div className="md:hidden flex gap-6">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black dark:text-white"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-6 pt-4 bg-white dark:bg-[#000f1e] shadow-lg border-t border-gray-200 dark:border-gray-800 transition-all duration-300">
          <nav className="flex flex-col gap-4 text-base font-semibold">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.to)}
                className="text-left hover:text-yellow-500 transition"
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div className="flex gap-4 mt-6">
            {buttons.map((btn, index) => (
              <Link
                key={index}
                href={btn.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition"
              >
                {btn.icon}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;