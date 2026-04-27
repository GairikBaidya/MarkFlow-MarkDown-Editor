import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Demo", href: "#demo" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-16 px-6 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "bg-black/60 backdrop-blur-md border-b border-white/10 shadow-lg"
            : "bg-transparent"
        }`}
        id="landing-navbar"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 no-underline">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="6" fill="url(#nav-grad)" />
            <path
              d="M6 8h12M6 12h8M6 16h10"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="nav-grad" x1="0" y1="0" x2="24" y2="24">
                <stop stopColor="#00d4ff" />
                <stop offset="1" stopColor="#7c3aed" />
              </linearGradient>
            </defs>
          </svg>
          <span className="font-display text-xl font-bold gradient-text">
            MarkFlow
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200 no-underline"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            to="/editor"
            className="btn-neon hidden sm:inline-flex text-sm no-underline"
            id="nav-cta"
          >
            <span>Get Started Free</span>
          </Link>
          <button
            className="md:hidden text-gray-400 hover:text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/90 backdrop-blur-lg pt-20 px-8 md:hidden"
          id="mobile-menu"
        >
          <div className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-2xl font-display font-bold text-white hover:text-brand-cyan transition-colors no-underline"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/editor"
              className="btn-neon mt-4 text-center no-underline"
              onClick={() => setMobileOpen(false)}
            >
              <span>Get Started Free</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
