import data from "../data/data.json";

const PrivacyPolicy = () => {
  const { title, lastUpdated, intro, sections } = data.privacyPolicy;

  return (
    <section className="grow bg-black text-white py-20 sm:py-28 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="relative mb-16 bg-gradient-to-br 
          from-[#0f172a] via-[#111827] to-black 
          border border-white/10 rounded-3xl p-10 sm:p-14 shadow-2xl">

          {/* subtle glow */}
          <div className="absolute inset-0 rounded-3xl 
            bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_40%)]" />

          <div className="relative">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              {title}
            </h1>

            <p className="text-sm text-gray-400 mt-3">
              Last updated: {lastUpdated}
            </p>

            <p className="mt-8 text-gray-300 leading-relaxed text-base">
              {intro}
            </p>
          </div>
        </div>

        {/* ================= POLICY SECTIONS ================= */}
        <div className="space-y-10">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-xl border border-white/10 
              rounded-3xl p-8 sm:p-10 transition-all duration-300 
              hover:bg-white/10"
            >
              {/* SECTION HEADING */}
              <h2 className="text-xl sm:text-2xl font-semibold mb-6 flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-blue-500 shrink-0" />
                {section.heading}
              </h2>

              {/* SECTION CONTENT */}
              <ul className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                {section.content.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PrivacyPolicy;
