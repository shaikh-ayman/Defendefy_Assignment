const risks = [
  {
    icon: (
      <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Fake brand & sponsorship emails",
    description:
      "Emails that look like they’re from a brand—offering a collab, deal, or “contract.” They’re built to look real so creators say yes. We spot them before you reply.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    title: "Phishing links",
    description:
      "Links in DMs or emails that take you to a page that looks like Instagram, YouTube, or your bank. The goal is to steal your login. We flag them before you click.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Risky app permissions",
    description:
      "When you connect an app to your email or socials, it can sometimes see more than you intend. We help you keep permissions in check so your accounts stay yours.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "One click, big impact",
    description:
      "Most issues start with a single reply or click—not a weak password. It’s normal to slip up when something looks official. We’re here so that one click doesn’t cost you.",
  },
];

const Problems = () => {
  return (
    <section id="risks" className="py-24 sm:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <span className="inline-block rounded-full bg-teal-100 px-4 py-1.5 text-sm font-semibold text-teal-700">
          What creators face
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 tracking-tight">
          The risks we help you avoid
        </h2>
        <p className="mt-5 text-xl text-navy-600 leading-relaxed max-w-2xl">
          These don’t feel like “attacks”—they feel like normal emails and links. Here’s what we catch so you don’t have to.
        </p>

        <ul className="mt-14 space-y-6" role="list">
          {risks.map((risk) => (
            <li key={risk.title}>
              <article className="group flex gap-5 p-6 sm:p-8 bg-navy-50/60 rounded-2xl border-2 border-navy-200/60 shadow-sm transition-all hover:border-teal-300/80 hover:shadow-md">
                <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center group-hover:bg-teal-200/80 transition-colors">
                  {risk.icon}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-navy-900">
                    {risk.title}
                  </h3>
                  <p className="mt-3 text-navy-600 leading-relaxed text-lg">
                    {risk.description}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Problems;
