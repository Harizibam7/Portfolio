import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FadeUp from "@/animation/fade-up";

export default function LandingHero() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      animate={{
        transform: `translateY(${progress * 20}vh)`,
      }}
      transition={{ type: "spring", stiffness: 100 }}
      ref={ref}
      className="pointer-events-none flex h-[calc(100vh-112px)] items-center px-6 sm:px-14 md:px-20"
    >
      <div className="-mt-[112px] w-full">
        <div className="mx-auto max-w-7xl">
          <AnimatePresence>
            <FadeUp key="title-main" duration={0.6}>
              <h1 className="bg-accent bg-clip-text py-2 text-5xl font-bold text-transparent sm:text-6xl md:text-7xl xl:text-8xl">
                Harizibam V
              </h1>
              <span className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 md:text-3xl">
                Full Stack, DevOps
              </span>
            </FadeUp>
            <FadeUp key="description" duration={0.6} delay={0.2}>
              <div className="mt-8 flex max-w-3xl gap-5 text-base font-semibold text-zinc-900 dark:text-zinc-200 sm:text-base md:text-2xl">
                <span className="text-accent">
                  <a
                    href="https://leetcode.com/u/harizibamv/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent-hover z-10 text-accent underline"
                    style={{ pointerEvents: "auto" }}
                  >
                    Leetcode
                  </a>
                  <h3 className="mt-2 text-lg font-semibold text-gray-800 dark:text-gray-200">
                    510+ Solved
                  </h3>
                </span>
                <span className="text-accent">
                  <a
                    href="https://www.codechef.com/users/harizibamv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent-hover z-10 text-accent underline"
                    style={{ pointerEvents: "auto" }}
                  >
                    Codechef
                  </a>
                  <h3 className="mt-2 text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Max(1283)
                  </h3>
                </span>
                <span className="text-accent">
                  <a
                    href="https://codeforces.com/profile/harizibam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent-hover z-10 text-accent underline"
                    style={{ pointerEvents: "auto" }}
                  >
                    Codeforce
                  </a>
                  <h3 className="mt-2 text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Max(891) newbie
                  </h3>
                </span>
              </div>
            </FadeUp>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
