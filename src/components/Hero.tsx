const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Base gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-navy-50 via-white to-teal-50/50"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_0%,rgba(13,148,136,0.12),transparent_50%)]"
        aria-hidden
      />
      {/* Background shapes */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-teal-300/25 blur-3xl" />
        <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-navy-200/30 blur-3xl" />
        <div className="absolute bottom-20 right-[10%] w-80 h-80 rounded-full bg-teal-400/15 blur-3xl" />
      </div>

      <div className="relative z-10 px-6 py-28 sm:py-36 text-center max-w-4xl mx-auto">
        {/* Creator badge */}
        <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50/90 px-4 py-2 text-sm font-medium text-teal-700 shadow-sm">
          <span aria-hidden>✨</span>
          Built for creators & influencers
        </span>

        <h1 className="mt-8 text-4xl sm:text-5xl lg:text-7xl font-semibold text-navy-900 tracking-tight leading-[1.1]">
          Protect your brand.
          <br />
          <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
            Not your time.
          </span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-navy-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Defendefy stops fake sponsorship emails, phishing, and account scams—so you can focus on creating.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#cta"
            className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white bg-teal-500 hover:bg-teal-600 rounded-xl shadow-lg shadow-teal-500/25 transition-all duration-200 hover:shadow-teal-500/40 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Get started free
          </a>
          <a
            href="#risks"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-navy-700 hover:text-navy-900 rounded-xl border-2 border-navy-200 hover:border-navy-300 bg-white/80 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            See what we protect against
          </a>
        </div>

        <p className="mt-8 text-sm font-medium text-navy-500">
          Trusted by creators who take their brand seriously.
        </p>
      </div>
    </section>
  );
};

export default Hero;
