import { motion } from "framer-motion";
import { fadeDown } from "../lib/motion";

const Header = () => {
  return (
    <motion.header variants={fadeDown} initial="hidden" animate="show" className="sticky top-0 z-50 w-full border-b border-navy-200/80 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="text-xl font-bold tracking-tight text-navy-900 transition-all duration-300 hover:text-teal-600 hover:scale-105"
        >
          Defendefy
        </a>
        <nav className="flex flex-wrap items-center justify-end gap-6 sm:gap-8">
          <a
            href="#risks"
            className="hidden sm:inline-block text-sm font-semibold text-navy-600 transition-all duration-300 hover:text-navy-900 hover:translate-x-0.5"
          >
            Risks we help with
          </a>
          <a
            href="#how-it-works"
            className="hidden sm:inline-block text-sm font-semibold text-navy-600 transition-all duration-300 hover:text-navy-900 hover:translate-x-0.5"
          >
            How it works
          </a>
          <a
            href="#plans"
            className="hidden sm:inline-block text-sm font-semibold text-navy-600 transition-all duration-300 hover:text-navy-900 hover:translate-x-0.5"
          >
            Plans
          </a>
          <a
            href="#cta"
            className="inline-flex items-center justify-center rounded-xl bg-teal-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-teal-600 hover:scale-105 hover:animate-glow focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Get started
          </a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
