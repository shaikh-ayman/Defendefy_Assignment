import { MotionSection } from "../lib/motion";
import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

const CTA = () => {
  return (
    <MotionSection id="cta" className="relative py-28 sm:py-36 overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-navy-50/50 to-navy-900/5"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(13,148,136,0.15),transparent)]"
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-80 rounded-full bg-teal-300/20 blur-3xl animate-float"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 tracking-tight leading-tight">
          Your brand. Your control.
        </motion.h2>
        <motion.p variants={fadeUp} className="mt-6 text-xl text-navy-600 leading-relaxed">
          Join creators who protect their accounts and their peace of mind—without the fear or the jargon.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-xl bg-teal-500 px-10 py-4 text-lg font-semibold text-white shadow-lg shadow-teal-500/30 transition-all duration-300 hover:bg-teal-600 hover:shadow-teal-500/40 hover:scale-105 hover:animate-glow active:scale-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Get started free
          </a>
          <a
            href="#plans"
            className="inline-flex items-center justify-center rounded-xl border-2 border-navy-200 bg-white px-10 py-4 text-lg font-semibold text-navy-700 transition-all duration-200 hover:bg-navy-50 hover:border-navy-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Compare plans
          </a>
        </motion.div>
        <motion.p variants={fadeUp} className="mt-8 text-sm font-medium text-navy-500">
          No credit card required. Set up in minutes.
        </motion.p>
      </div>
    </MotionSection>
  );
};

export default CTA;
