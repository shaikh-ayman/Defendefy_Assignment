const plans = [
  {
    name: "Guardian",
    desc: "Automated protection with clear alerts—set it and rest easy. Great for solo creators who want a safety net.",
  },
  {
    name: "Sentinel",
    desc: "Human-led security built for creators. Your dedicated team watches for fake deals, phishing, and account risks—so you can focus on your content.",
    highlight: true,
    badge: "Most popular with creators",
  },
  {
    name: "Crisis Response",
    desc: "When something goes wrong—hack, takeover, or breach—we help you recover and lock things down fast.",
  },
];

import { MotionSection } from "../lib/motion";
import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

const Plans = () => {
  return (
    <MotionSection id="plans" className="py-24 sm:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.span variants={fadeUp} className="inline-block rounded-full bg-teal-100 px-4 py-1.5 text-sm font-semibold text-teal-700">
          Choose your plan
        </motion.span>
        <motion.h2 variants={fadeUp} className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 tracking-tight">
          Plans that fit how you work
        </motion.h2>
        <motion.p variants={fadeUp} className="mt-5 text-xl text-navy-600 max-w-xl">
          From automated monitoring to human-led protection—pick the level that matches your brand.
        </motion.p>

        <div className="mt-16 flex flex-col lg:flex-row gap-8 lg:gap-6 items-stretch lg:items-center">
          {plans.map((p) => (
            <motion.div
              key={p.name}
              variants={fadeUp}
              className={`
                flex-1 min-w-0 rounded-2xl p-8 sm:p-10
                ${p.highlight
                  ? "relative bg-navy-900 text-white shadow-2xl shadow-navy-900/20 lg:-my-6 lg:py-12 lg:scale-[1.03] ring-2 ring-teal-400 transition-shadow duration-300 hover:animate-glow"
                  : "bg-navy-50/70 border-2 border-navy-200/80 text-navy-900 transition-transform duration-300 hover:-translate-y-1"
                }
              `}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-teal-500 text-white text-sm font-bold shadow-md animate-bounce-in">
                  {p.badge}
                </span>
              )}
              <div className={p.highlight ? "mt-3" : ""}>
                <h3 className={`text-2xl font-bold tracking-tight ${p.highlight ? "text-white" : "text-navy-900"}`}>
                  {p.name}
                </h3>
                <p className={`mt-4 leading-relaxed text-lg ${p.highlight ? "text-navy-200" : "text-navy-600"}`}>
                  {p.desc}
                </p>
                <button
                  type="button"
                  className={`
                    mt-8 w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-base font-semibold transition-all duration-300 hover:scale-105 active:scale-100
                    ${p.highlight
                      ? "bg-teal-500 text-white hover:bg-teal-400 hover:animate-glow shadow-lg shadow-teal-500/30 focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-navy-900"
                      : "bg-white border-2 border-navy-200 text-navy-700 hover:bg-navy-50 hover:border-navy-300 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                    }
                  `}
                >
                  {p.highlight ? "Get started" : "Learn more"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
};

export default Plans;
