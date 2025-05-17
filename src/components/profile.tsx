"use client";

import { motion } from "motion/react";
import { Linkedin, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function AnimatedBanner() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 via-gray-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-50 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.6, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-100 dark:bg-purple-900/20 rounded-full opacity-50 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1,
          }}
        />
      </div>

      <div className="container relative px-4 md:px-6 mx-auto z-10">
        <div className="flex flex-col items-center justify-center space-y-8 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.span
              className="absolute -inset-1 rounded-lg blur opacity-25 bg-gradient-to-r from-blue-500 to-purple-500"
              animate={{
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
            <h1 className="relative text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-200 dark:to-white">
              Peter Egbujie
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-[700px] mx-auto"
          >
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-200">
              I'm passionate about transforming ideas into impactful digital
              experiences. With expertise in
              <span className="font-medium text-blue-700 dark:text-blue-300">
                {" "}
                digital marketing{" "}
              </span>
              and
              <span className="font-medium text-purple-700 dark:text-purple-300">
                {" "}
                web development
              </span>
              , I create solutions that connect brands with their audiences in
              meaningful ways. My approach combines creative strategy with
              technical execution to deliver results that drive engagement and
              growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full my-2"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-4"
          >
            <div className="flex items-center justify-center space-x-8 mt-6">
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link
                  href="https://bsky.app/profile/peteregbujie.bsky.social"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center"
                  aria-label="Bluesky Profile"
                >
                  <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-sm group-hover:shadow-md transition-all duration-200">
                    <ExternalLink className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                  </div>
                  <span className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Bluesky
                  </span>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link
                  href="https://linkedin.com/in/peter-egbujie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center"
                  aria-label="LinkedIn Profile"
                >
                  <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-sm group-hover:shadow-md transition-all duration-200">
                    <Linkedin className="h-6 w-6 text-blue-700 dark:text-blue-500" />
                  </div>
                  <span className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-700 dark:group-hover:text-blue-500 transition-colors">
                    LinkedIn
                  </span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
