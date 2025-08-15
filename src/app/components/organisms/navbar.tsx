"use client";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../atoms/button";
import NavItem, { navigasi } from "../molecules/nav-item";
import { useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import images from "@/app/assets/data-image";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="dark:bg-neutral-950 bg-white sticky top-0 z-30">
        <nav className="w-full lg:px-8 px-6 py-6  flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image src={images.light_dark} width={18} height={18} loading="lazy" alt="logo"/>
            <h1 className="text-md font-semibold">
              Santain<span className="text-[#f82584]">Aja</span>
            </h1>
          </div>
          <div className="lg:flex items-center space-x-8 hidden">
            <NavItem />
          </div>
          <div className="lg:block hidden">
            <Button />
          </div>
          <div className="lg:hidden ">
            <button
              className="text-white"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <Menu size={24}  className="dark:text-white text-neutral-900"/>
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-full h-full bg-black/80 backdrop-blur-lg border-l border-white/20 z-60 px-6 py-10 flex flex-col items-start gap-6"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-4 text-white z-50"
            >
              <X size={28} />
            </button>
            {navigasi.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg text-white font-medium hover:text-[#B6F500] transition"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
