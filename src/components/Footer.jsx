import { NavLink, Link } from "react-router-dom";
import data from "../data/data.json";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ChevronRight,
} from "lucide-react";

const socialIcons = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  youtube: Youtube,
};

const Footer = () => {
  const { contact, importantLinks, newsletter, socials, copyright } =
    data.footer;

  return (
    <footer className="bg-black text-white  border-t border-white/10">
      
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid gap-16 md:grid-cols-3">

        {/* ================= CONTACT ================= */}
        <div>
          <h3 className="font-semibold text-xl mb-8">Contact</h3>

          <div className="space-y-4 text-gray-400 text-sm">
            <p>
              <span className="font-semibold text-white">Phone:</span>{" "}
              <a
                href={`tel:${contact.phone}`}
                className="hover:text-blue-400 transition"
              >
                {contact.phone}
              </a>
            </p>

            <p>
              <span className="font-semibold text-white">Email:</span>{" "}
              <a
                href={`mailto:${contact.email}`}
                className="hover:text-blue-400 transition"
              >
                {contact.email}
              </a>
            </p>

            <div>
              <span className="font-semibold text-white block mb-1">
                Address:
              </span>
              {Object.values(contact.address).map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          </div>
        </div>

        {/* ================= IMPORTANT LINKS ================= */}
        <div>
          <h3 className="font-semibold text-xl mb-8">Important</h3>

          <ul className="space-y-4 text-gray-400 text-sm">
            {importantLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className="group flex items-center gap-2 hover:text-white transition"
                >
                  <ChevronRight
                    size={16}
                    className="text-blue-500 group-hover:translate-x-1 transition"
                  />
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= NEWSLETTER ================= */}
        <div>
          <h3 className="font-semibold text-xl mb-6">
            {newsletter.title}
          </h3>

          <p className="text-sm text-gray-400 mb-6">
            {newsletter.description}
          </p>

          <div className="flex w-full max-w-sm bg-white/5 border border-white/10 
            rounded-xl overflow-hidden backdrop-blur-md">
            
            <input
              type="email"
              placeholder="E-mail"
              className="w-full bg-transparent px-4 py-3 text-sm text-white
                placeholder-gray-500 focus:outline-none"
            />

            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-indigo-600
                px-5 py-3 text-sm font-semibold
                hover:scale-105 transition-all duration-300"
            >
              SUBSCRIBE
            </Link>
          </div>

          {/* SOCIALS */}
          <div className="flex gap-5 mt-8">
            {socials.map((social) => {
              const Icon = socialIcons[social.name];
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10
                    flex items-center justify-center
                    hover:bg-blue-600 hover:border-blue-600
                    transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-500">
        {copyright}
      </div>
    </footer>
  );
};

export default Footer;
