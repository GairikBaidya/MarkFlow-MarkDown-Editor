import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import GradientBlobs from "./GradientBlobs";

export default function HeroSection() {
  const mockupRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const card = mockupRef.current;
    if (!wrapper || !card) return;

    const handleMove = (e) => {
      const rect = wrapper.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) / rect.width;
      const deltaY = (e.clientY - centerY) / rect.height;
      const rotateY = -12 + deltaX * 12;
      const rotateX = 8 - deltaY * 8;
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleLeave = () => {
      card.style.transition = "transform 0.6s ease";
      card.style.transform = "rotateX(8deg) rotateY(-12deg)";
      setTimeout(() => {
        card.style.transition = "transform 0.1s ease-out";
      }, 600);
    };

    wrapper.addEventListener("mousemove", handleMove);
    wrapper.addEventListener("mouseleave", handleLeave);

    return () => {
      wrapper.removeEventListener("mousemove", handleMove);
      wrapper.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      id="hero"
    >
      <GradientBlobs />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-16">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            <span className="gradient-text">Write.</span>{" "}
            <span className="gradient-text">Preview.</span>{" "}
            <span className="gradient-text">Publish.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0">
            The Markdown editor that doesn't slow you down. Split-pane live
            preview, PDF export, and themes that don't hurt your eyes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/editor"
              className="btn-neon inline-flex items-center gap-2 justify-center no-underline"
              id="hero-cta-primary"
            >
              <span>Start Writing Free</span>
              <ArrowRight size={18} className="relative z-10" />
            </Link>
            <a
              href="#demo"
              className="btn-ghost inline-flex items-center gap-2 justify-center no-underline"
              id="hero-cta-secondary"
            >
              <Play size={16} />
              Watch Demo
            </a>
          </div>
        </div>

        {/* 3D Mockup */}
        <div className="flex-1 w-full max-w-2xl" ref={wrapperRef}>
          <div className="mockup-wrapper">
            <div className="mockup-card" ref={mockupRef}>
              <div className="rounded-xl overflow-hidden border border-white/10">
                {/* Fake editor chrome */}
                <div className="bg-surface-raised px-4 py-3 flex items-center gap-2 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="ml-4 text-xs text-gray-500 font-mono">
                    markflow-editor
                  </span>
                </div>
                {/* Fake split pane */}
                <div className="flex bg-surface-base h-64 sm:h-80">
                  <div className="flex-1 p-4 border-r border-white/5 overflow-hidden">
                    <div className="font-mono text-xs text-gray-400 space-y-1.5">
                      <p>
                        <span className="text-brand-purple"># </span>
                        <span className="text-white">Hello MarkFlow</span>
                      </p>
                      <p>&nbsp;</p>
                      <p className="text-gray-500">
                        Write your markdown here with
                      </p>
                      <p className="text-gray-500">
                        <span className="text-brand-cyan">**</span>
                        <span className="text-white">live preview</span>
                        <span className="text-brand-cyan">**</span>
                        {" "}and instant
                      </p>
                      <p className="text-gray-500">
                        syntax highlighting.
                      </p>
                      <p>&nbsp;</p>
                      <p>
                        <span className="text-brand-purple">```</span>
                        <span className="text-brand-cyan">javascript</span>
                      </p>
                      <p>
                        <span className="text-red-400">const</span>{" "}
                        <span className="text-yellow-300">editor</span>{" "}
                        <span className="text-brand-cyan">=</span>{" "}
                        <span className="text-green-400">"amazing"</span>
                        <span className="text-gray-500">;</span>
                      </p>
                      <p>
                        <span className="text-brand-purple">```</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex-1 p-4 overflow-hidden">
                    <h3 className="text-white text-lg font-bold mb-2">
                      Hello MarkFlow
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                      Write your markdown here with{" "}
                      <strong className="text-white">live preview</strong> and
                      instant syntax highlighting.
                    </p>
                    <div className="bg-surface-overlay rounded-lg p-3 border border-white/5">
                      <code className="text-xs">
                        <span className="text-red-400">const</span>{" "}
                        <span className="text-yellow-300">editor</span>{" "}
                        <span className="text-brand-cyan">=</span>{" "}
                        <span className="text-green-400">"amazing"</span>
                        <span className="text-gray-500">;</span>
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
