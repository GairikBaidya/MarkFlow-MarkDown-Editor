import { useRef, useEffect } from "react";
import { PenLine, Eye, Share2 } from "lucide-react";
import { useIntersection } from "../../hooks/useIntersection";

const STEPS = [
  { icon: PenLine, title: "Write Markdown", desc: "Type your content using simple Markdown syntax. GFM supported." },
  { icon: Eye, title: "See Live Preview", desc: "Watch your document render in real-time with syntax highlighting." },
  { icon: Share2, title: "Export & Share", desc: "Download as pixel-perfect PDF or share your beautifully formatted doc." },
];

function SVGConnector() {
  const { ref, isVisible } = useIntersection({ threshold: 0.3 });

  return (
    <svg ref={ref} className={`svg-connector hidden lg:block w-full h-20 ${isVisible ? "visible" : ""}`} viewBox="0 0 900 80" fill="none" preserveAspectRatio="none">
      <path d="M 50 40 C 200 40, 250 10, 450 40 S 700 70, 850 40" stroke="url(#lineGrad)" strokeWidth="2" strokeLinecap="round" />
      <defs>
        <linearGradient id="lineGrad" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#00d4ff" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function HowItWorksSection() {
  return (
    <section className="relative py-24 sm:py-32" id="how-it-works">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            How it <span className="gradient-text">works</span>
          </h2>
          <p className="text-gray-400 text-lg">Three steps. Zero friction.</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-4">
          {STEPS.map((step, i) => (
            <div key={step.title} className="flex flex-col lg:flex-row items-center gap-4 lg:gap-0 flex-1">
              <div className="glass-card p-8 text-center flex-1 hover:scale-105 transition-transform">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-cyan to-brand-purple flex items-center justify-center mx-auto mb-4">
                  <step.icon size={24} className="text-white" />
                </div>
                <div className="text-xs text-brand-cyan font-semibold mb-2">Step {i + 1}</div>
                <h3 className="font-display text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </div>
              {i < STEPS.length - 1 && <SVGConnector />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
