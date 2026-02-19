import { Link } from "react-router-dom";
import data from "../data/data.json";
import { Users, Calendar, FileText, Rocket } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import { useCountUp } from "../hooks/useCountUp";

const statsIcons = {
  people: Users,
  years: Calendar,
  programs: FileText,
  communities: Rocket,
};

const About = () => {
  const { pageHeader, about, stats, testimonials } = data.about;

  const [headerRef, headerVisible] = useReveal();
  const [aboutRef, aboutVisible] = useReveal();
  const [statsRef, statsVisible] = useReveal();
  const [testRef, testVisible] = useReveal();

  return (
    <main className="grow bg-black text-white overflow-hidden">

      {/* ================= PAGE HEADER ================= */}
      <section className="relative bg-gradient-to-br from-[#0f172a] via-[#111827] to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_40%)]" />

        <div
          ref={headerRef}
          className={`relative max-w-7xl mx-auto px-6 py-24 transition-all duration-700 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            {pageHeader.title}
          </h1>

          <p className="text-sm text-gray-400 mt-3">
            {pageHeader.breadcrumb.join(" / ")}
          </p>
        </div>
      </section>

      {/* ================= ABOUT CONTENT ================= */}
      <section className="py-32 bg-[#0f172a]">
        <div
          ref={aboutRef}
          className={`max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center transition-all duration-700 ${
            aboutVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* IMAGE */}
          <div>
            <img
              src={about.image}
              alt="About"
              className="rounded-3xl shadow-2xl border border-white/10"
            />
          </div>

          {/* CONTENT */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">
              {about.title}
            </h2>

            <p className="text-gray-400 mb-8 leading-relaxed">
              {about.description}
            </p>

            <div className="space-y-6 text-gray-400 text-sm leading-relaxed">
              {about.points.map((item, idx) => (
                <div
                  key={idx}
                  style={{ transitionDelay: `${idx * 120}ms` }}
                  className={`bg-white/5 backdrop-blur-md border border-white/10 
                  rounded-2xl p-6 transition-all duration-700 ${
                    aboutVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  } hover:bg-white/10`}
                >
                  <h4 className="font-semibold text-white mb-2">
                    {item.title}
                  </h4>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="mt-10 inline-flex items-center justify-center
              bg-gradient-to-r from-blue-500 to-indigo-600
              text-white px-7 py-3 rounded-lg
              hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-28 bg-black">
        <div
          ref={statsRef}
          className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((item, idx) => {
            const Icon = statsIcons[item.key];

            const numericValue =
              typeof item.value === "number"
                ? item.value
                : parseInt(item.value.replace(/\D/g, ""), 10);

            const count = useCountUp({
              start: 0,
              end: numericValue,
              duration: 1500,
              enabled: statsVisible,
            });

            return (
              <div
                key={idx}
                style={{ transitionDelay: `${idx * 120}ms` }}
                className={`bg-white/5 backdrop-blur-xl border border-white/10
                rounded-3xl p-8 text-center transition-all duration-700
                ${
                  statsVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }
                hover:-translate-y-2 hover:bg-white/10`}
              >
                <Icon size={30} className="mx-auto text-blue-400 mb-4" />

                <h3 className="text-3xl font-bold text-blue-400">
                  {count}
                  {typeof item.value === "string" &&
                    item.value.includes("+") &&
                    "+"}
                </h3>

                <p className="text-sm text-gray-400 mt-2">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-32 bg-[#0f172a]">
        <div
          ref={testRef}
          className={`max-w-6xl mx-auto px-6 text-center transition-all duration-700 ${
            testVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-semibold">
            {testimonials.title}
          </h2>

          <p className="text-gray-400 text-base mt-4 max-w-xl mx-auto">
            {testimonials.subtitle}
          </p>

          <div className="mt-6">
            <span className="text-sm text-gray-500 mr-2">
              Impact rating
            </span>
            <span className="inline-block bg-blue-600 text-white text-xs px-4 py-1 rounded-full">
              ★ {testimonials.impactRating}
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16 text-left">
            {testimonials.items.map((item, idx) => (
              <div
                key={idx}
                style={{ transitionDelay: `${idx * 120}ms` }}
                className={`bg-white/5 border border-white/10 rounded-3xl p-8
                transition-all duration-300 flex flex-col
                ${
                  testVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }
                hover:-translate-y-2 hover:bg-white/10`}
              >
                <p className="text-sm text-gray-300 leading-relaxed grow">
                  {item.text}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="font-semibold text-sm">
                    {item.name}
                  </span>

                  <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                    ★ {item.rating}
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

export default About;
