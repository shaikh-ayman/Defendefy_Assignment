const steps = [
  {
    title: "Monitor",
    desc: "We watch for risk signals on your email and linked accounts so you don’t have to second-guess every DM or brand email.",
  },
  {
    title: "Protect",
    desc: "Threats are stopped before they reach you—quietly and reliably, so you can keep creating without the noise.",
  },
  {
    title: "Recover",
    desc: "If something goes wrong, we help you regain control and lock things down so you’re back in the driver’s seat fast.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 sm:py-28 bg-gradient-to-b from-navy-50/60 to-teal-50/40">
      <div className="max-w-5xl mx-auto px-6">
        <span className="inline-block rounded-full bg-navy-100 px-4 py-1.5 text-sm font-semibold text-navy-700">
          Simple process
        </span>
        <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy-900 tracking-tight">
          How it works
        </h2>
        <p className="mt-5 font-serif text-xl text-navy-600 max-w-xl">
          Three steps. No jargon. Built for creators who want clarity, not complexity.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="relative bg-white rounded-2xl border-2 border-navy-200/80 shadow-lg overflow-hidden font-serif"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-400 to-teal-600" aria-hidden />
              <div className="p-8 pt-9">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-teal-500 text-white text-xl font-bold shadow-md">
                  {index + 1}
                </span>
                <h3 className="mt-6 text-2xl font-semibold text-navy-900 tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-4 text-navy-600 leading-relaxed text-lg">
                  {step.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
