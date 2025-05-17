"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Link href="/" className="text-xl font-bold text-white">
          PE
        </Link>
      </motion.div>

      <div className="flex items-center space-x-8">
        {["About", "Contact"].map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={`/${item.toLowerCase()}`}
              className="text-white hover:text-gray-300 transition-colors"
            >
              {item}
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.nav>
  );
}
