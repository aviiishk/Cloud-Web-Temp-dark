import { NavLink } from "react-router-dom";
import { useState } from "react";
import data from "../data/data.json";
import {
  Phone,
  Mail,
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

const socialIcons = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  youtube: Youtube,
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { topBar, logo, navLinks, cta } = data.navBar;

  return (
    <header className="w-full sticky top-0 z-50">

      {/* ================= TOP BAR ================= */}
      <div className="hidden md:block bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between text-sm text-gray-400">
          
          <div className="flex items-center gap-8">
            <a
              href={`tel:${topBar.phone}`}
              className="flex items-center gap-2 hover:text-blue-400 transition"
            >
              <Phone size={14} />
              <span>{topBar.phone}</span>
            </a>

            <a
              href={`mailto:${topBar.email}`}
              className="flex items-center gap-2 hover:text-blue-400 transition"
            >
              <Mail size={14} />
              <span>{topBar.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-5">
            {topBar.socials.map((social) => {
              const Icon = socialIcons[social.name];
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================= MAIN NAV ================= */}
      <nav className="bg-black backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <NavLink to="/" className="flex items-center gap-2">
            <img src={logo.src} alt={logo.alt} className="h-10" />
          </NavLink>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-sm tracking-wide font-medium transition ${
                    isActive ? "text-white" : "text-gray-400"
                  } hover:text-white`
                }
              >
                {({ isActive }) => (
                  <span className="relative">
                    {link.label}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] w-full bg-blue-500 transition-transform duration-300 origin-left ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </span>
                )}
              </NavLink>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <NavLink
              to={cta.path}
              className="bg-gradient-to-r from-blue-500 to-indigo-600
                text-white px-8 py-3 rounded-lg text-sm font-semibold
                hover:scale-105 transition-all duration-300 shadow-lg"
            >
              {cta.label}
            </NavLink>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">

            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className="block text-gray-300 text-lg font-medium hover:text-white transition"
              >
                {link.label}
              </NavLink>
            ))}

            <NavLink
              to={cta.path}
              onClick={() => setOpen(false)}
              className="block text-center bg-gradient-to-r from-blue-500 to-indigo-600
                text-white py-3 rounded-lg font-semibold mt-4"
            >
              {cta.label}
            </NavLink>

          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
