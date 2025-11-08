import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import NAVISHRLogo from "../../assets/img/navishr-white.png";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#" },
  { label: "News", href: "#" },
  { label: "Services", href: "#" },
  { label: "Japanese Companies India", href: "#" },
  { label: "Jobs Abroad", href: "#" },
  { label: "NAVISTARS", href: "#" },
  { label: "Contact Us", href: "#" },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [showLinks, setShowLinks] = React.useState(false);

  React.useEffect(() => {
    const timeout = window.setTimeout(() => setShowLinks(true), 50);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <footer className="bg-slate-900 text-slate-100">
      <div className="mx-auto flex w-full max-w-auto flex-col gap-12 px-6 py-14 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-xs space-y-4">
          <img
            src={NAVISHRLogo}
            alt="NAVIS Human Resources logo"
            className="mx-auto h-10 w-auto sm:mx-0"
          />
          <h2 className="text-xl font-semibold uppercase tracking-wide">
            NAVIS Human Resources Private Limited
          </h2>
          <address className="not-italic text-sm leading-relaxed text-slate-300">
            JP Chambers, No. 22/1, 5th Block, 46th Cross Road, Jayanagar,
            Bangalore - 560041
          </address>
          <p className="text-sm text-slate-300">
            Tel:{" "}
            <a className="hover:text-white" href="tel:+918041218900">
              +91-80-4121-8900
            </a>
          </p>
        </div>

        <nav className="grid flex-1 gap-3 sm:grid-cols-2">
          <h3 className="text-base font-semibold uppercase tracking-wide text-slate-200 sm:col-span-2">
            Quick Links
          </h3>
          {quickLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className={`inline-block transform text-sm text-slate-300 transition-all duration-300 hover:text-white hover:translate-x-1 ${
                showLinks
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              }`}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col items-center justify-center space-y-6 sm:items-start">
          <div className="w-full max-w-sm text-center sm:text-left">
            <h3 className="text-base font-semibold uppercase tracking-wide text-slate-200">
              Subscribe
            </h3>
            <p className="mt-1 text-sm text-slate-300">
              Stay updated with NAVIS HR opportunities.
            </p>
            <form
              className="mt-4 flex w-full flex-col gap-2 sm:flex-row"
              onSubmit={(event) => event.preventDefault()}
            >
              <input
                type="email"
                name="email"
                aria-label="Email address"
                placeholder="Enter your email"
                className="w-full flex-1 rounded-md border border-slate-700 bg-slate-800/80 px-3 py-2 text-sm text-white placeholder-slate-400 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500"
              />
              <button
                type="submit"
                className="rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Subscribe
              </button>
            </form>
          </div>
          <h3 className="text-base font-semibold uppercase tracking-wide text-slate-200">
            Follow Us
          </h3>
          <div className="flex gap-3">
            <a
              aria-label="Follow NAVIS on Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition-transform duration-150 hover:-translate-y-1 hover:bg-blue-500"
              href="#"
            >
              <FaFacebookF className="text-lg" />
            </a>
            <a
              aria-label="Follow NAVIS on Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition-transform duration-150 hover:-translate-y-1 hover:bg-pink-500"
              href="#"
            >
              <FaInstagram className="text-lg" />
            </a>
            <a
              aria-label="Follow NAVIS on LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition-transform duration-150 hover:-translate-y-1 hover:bg-blue-600"
              href="#"
            >
              <FaLinkedinIn className="text-lg" />
            </a>
            <a
              aria-label="Follow NAVIS on Twitter"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition-transform duration-150 hover:-translate-y-1 hover:bg-sky-500"
              href="#"
            >
              <FaTwitter className="text-lg" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 text-center text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-center">
          <p>
            © {currentYear} NAVIS Human Resources Private Limited. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
