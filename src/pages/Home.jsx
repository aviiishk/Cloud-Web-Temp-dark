import { Link } from "react-router-dom";
import data from "../data/data.json";
import { Users, Calendar, FileText, Rocket } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import { useCountUp } from "../hooks/useCountUp";

const Home = () => {
  const {
    hero,
    impactProcess,
    partners,
    initiatives,
    stats,
    whyChoose,
    testimonials,
  } = data.home;

  const statIcons = [Users, Calendar, FileText, Rocket];

  const [heroRef, heroVisible] = useReveal();
  const [impactRef, impactVisible] = useReveal();
  const [initiativesRef, initiativesVisible] = useReveal();
  const [whyRef, whyVisible] = useReveal();
  const [testRef, testVisible] = useReveal();

  return (
    <main className="grow bg-black text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative bg-gradient-to-br from-[#0f172a] via-[#111827] to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.15),transparent_40%)]" />

        <div className="relative max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-20 items-center">
          <div
            ref={heroRef}
            className={`transition-all duration-700 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {hero.title}
            </h1>

            <p className="text-gray-400 mt-6 max-w-lg text-base">
              {hero.subtitle}
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex bg-gradient-to-r from-blue-500 to-indigo-600 
              text-white px-7 py-3 rounded-lg text-sm font-semibold 
              hover:scale-105 transition-all duration-300 shadow-lg"
            >
              {hero.primaryButton}
            </Link>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <img
              src={hero.image}
              alt="Hero"
              className="rounded-2xl shadow-2xl border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* ================= IMPACT ================= */}
      <section className="py-28 bg-[#0f172a]">
        <div
          ref={impactRef}
          className={`max-w-7xl mx-auto px-6 text-center transition-all duration-700 ${
            impactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold">{impactProcess.title}</h2>
          <p className="text-gray-400 text-base mt-4 max-w-xl mx-auto">
            {impactProcess.subtitle}
          </p>

          <div className="grid md:grid-cols-3 gap-10 mt-16 text-left">
            {impactProcess.steps.map((item, idx) => (
              <div
                key={idx}
                style={{ transitionDelay: `${idx * 120}ms` }}
                className="bg-white/5 backdrop-blur-md border border-white/10 
                rounded-2xl p-8 transition-all duration-300 
                hover:-translate-y-2 hover:bg-white/10"
              >
                <span className="text-6xl font-bold text-blue-500/30">
                  {item.step}
                </span>
                <h3 className="font-semibold mt-6 mb-3 text-lg">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PARTNERS ================= */}
      <section className="bg-black py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-16 items-center justify-center flex-wrap opacity-70">
            {partners.logos.map((logo, idx) => (
              <img
                key={idx}
                src={logo.src}
                alt={logo.name}
                className="h-12 object-contain grayscale hover:grayscale-0 
                hover:opacity-100 opacity-40 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= INITIATIVES ================= */}
      <section className="py-32 bg-gradient-to-b from-black to-[#111827]">
        <div
          ref={initiativesRef}
          className={`max-w-6xl mx-auto px-6 text-center transition-all duration-700 ${
            initiativesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-semibold">{initiatives.title}</h2>

          <div className="grid gap-8 mt-14 md:grid-cols-2 lg:grid-cols-3">
            {initiatives.items.map((item, idx) => (
              <div
                key={idx}
                style={{ transitionDelay: `${idx * 120}ms` }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 
                rounded-3xl p-8 transition-all duration-300 
                hover:-translate-y-2 hover:shadow-2xl"
              >
                <h3 className="font-semibold text-lg mb-3">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="py-32 bg-black">
        <div
          ref={whyRef}
          className={`max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center transition-all duration-700 ${
            whyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden grid grid-cols-2">
            {stats.map((item, idx) => {
              const Icon = statIcons[idx];
              const numericValue = parseInt(item.value.replace(/\D/g, ""), 10);

              const count = useCountUp({
                start: 0,
                end: numericValue,
                duration: 1600,
                enabled: whyVisible,
              });

              return (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center 
                  px-8 py-12 text-center transition-all duration-300 
                  hover:bg-white/10"
                >
                  <Icon size={28} className="text-blue-400 mb-4" />
                  <h3 className="text-3xl font-bold text-blue-400">
                    {count}
                    {item.value.includes("+") && "+"}
                  </h3>
                  <p className="text-sm text-gray-400 mt-2">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-4">
              {whyChoose.title}
            </h2>
            <p className="text-gray-400 mb-8">
              {whyChoose.subtitle}
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 
              text-white px-8 py-3 rounded-lg text-sm font-semibold 
              hover:scale-105 transition-all duration-300"
            >
              {whyChoose.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-32 bg-[#0f172a]">
        <div
          ref={testRef}
          className={`max-w-6xl mx-auto px-6 text-center transition-all duration-700 ${
            testVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-semibold">
            {testimonials.title}
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            {testimonials.subtitle}
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16 text-left">
            {testimonials.items.map((item, idx) => (
              <div
                key={idx}
                style={{ transitionDelay: `${idx * 120}ms` }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8
                flex flex-col transition-all duration-300
                hover:-translate-y-2 hover:bg-white/10"
              >
                <p className="text-sm text-gray-300 leading-relaxed grow">
                  {item.text}
                </p>

                <div className="mt-6 flex justify-between items-center">
                  <span className="font-semibold text-sm">
                    {item.name}
                  </span>

                  <span className="text-xs font-medium bg-blue-600 text-white px-3 py-1 rounded-full">
                    ⭐ {item.rating}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;
