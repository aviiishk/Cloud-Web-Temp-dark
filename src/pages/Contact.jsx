import data from "../data/data.json";
import { MapPin, Phone, Mail } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import { Link } from "react-router-dom";

const Contact = () => {
  const { pageHeader, intro, contactCards, cta } = data.contact;

  const contactIconMap = {
    "Office Address": MapPin,
    Phone: Phone,
    Email: Mail,
  };

  const [headerRef, headerVisible] = useReveal();
  const [introRef, introVisible] = useReveal();
  const [cardsRef, cardsVisible] = useReveal();
  const [formRef, formVisible] = useReveal();
  const [ctaRef, ctaVisible] = useReveal();

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
          <h1 className="text-4xl md:text-5xl font-bold">
            {pageHeader.title}
          </h1>
          <p className="text-sm text-gray-400 mt-3">
            {pageHeader.breadcrumb.join(" / ")}
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-28 bg-[#0f172a]">
        <div
          ref={introRef}
          className={`max-w-4xl mx-auto px-6 text-center transition-all duration-700 ${
            introVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-semibold">{intro.title}</h2>
          <p className="text-gray-400 mt-4">
            {intro.subtitle}
          </p>
        </div>
      </section>

      {/* ================= CONTACT INFO CARDS ================= */}
      <section className="py-10 bg-black">
        <div
          ref={cardsRef}
          className="max-w-7xl mx-auto px-6 grid gap-8 md:grid-cols-3"
        >
          {contactCards.map((card, idx) => {
            const Icon = contactIconMap[card.title] || MapPin;
            let content = card.value;

            if (card.title === "Phone") {
              content = (
                <a
                  href={`tel:${card.value.replace(/\s+/g, "")}`}
                  className="hover:text-blue-400 transition"
                >
                  {card.value}
                </a>
              );
            }

            if (card.title === "Email") {
              content = (
                <a
                  href={`mailto:${card.value}`}
                  className="hover:text-blue-400 transition"
                >
                  {card.value}
                </a>
              );
            }

            return (
              <div
                key={idx}
                style={{ transitionDelay: `${idx * 120}ms` }}
                className={`bg-white/5 backdrop-blur-xl border border-white/10
                  rounded-3xl p-10 text-center transition-all duration-500
                  ${
                    cardsVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }
                  hover:-translate-y-3 hover:bg-white/10`}
              >
                <div className="w-14 h-14 mx-auto mb-6 rounded-full 
                  bg-gradient-to-br from-blue-500/20 to-indigo-500/20
                  flex items-center justify-center">
                  <Icon size={24} className="text-blue-400" />
                </div>

                <h3 className="font-semibold text-lg mb-3">
                  {card.title}
                </h3>

                <p className="text-sm text-gray-300">
                  {content}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section className="py-32 bg-[#0f172a]">
        <div
          ref={formRef}
          className={`max-w-3xl mx-auto px-6 transition-all duration-700 ${
            formVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 
            rounded-3xl p-12 shadow-2xl">

            <h3 className="font-semibold text-2xl mb-3">
              Leave a Message
            </h3>

            <p className="text-gray-400 mb-10 text-sm">
              We’ll get back to you as soon as possible.
            </p>

            <form className="grid gap-8">
              <div className="grid md:grid-cols-3 gap-6">
                {["Your Name", "Your Email", "Subject"].map((label, i) => (
                  <div key={i}>
                    <label className="text-sm text-gray-400 mb-2 block">
                      {label}
                    </label>
                    <input
                      className="w-full bg-white/5 border border-white/10
                      rounded-xl px-4 py-3 text-white
                      focus:outline-none focus:ring-2
                      focus:ring-blue-500 transition"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="text-sm text-gray-400 mb-2 block">
                  Your Message
                </label>
                <textarea
                  rows="5"
                  className="w-full bg-white/5 border border-white/10
                    rounded-xl px-4 py-3 text-white resize-none
                    focus:outline-none focus:ring-2
                    focus:ring-blue-500 transition"
                />
              </div>

              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-indigo-600
                  text-white px-10 py-3 rounded-xl w-fit
                  hover:scale-105 transition-all duration-300 shadow-lg"
              >
                SEND MESSAGE
              </Link>
            </form>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-black">
        <div
          ref={ctaRef}
          className={`max-w-7xl mx-auto px-6 flex flex-col md:flex-row
            items-center justify-between gap-8 transition-all duration-700 ${
              ctaVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
        >
          <div>
            <h3 className="font-semibold text-xl">
              {cta.title}
            </h3>
            <p className="text-gray-400 mt-2">
              {cta.description}
            </p>
          </div>

          <button
            className="bg-gradient-to-r from-blue-500 to-indigo-600
              text-white px-8 py-3 rounded-xl
              hover:scale-105 transition-all duration-300 shadow-lg"
          >
            {cta.button}
          </button>
        </div>
      </section>
    </main>
  );
};

export default Contact;
