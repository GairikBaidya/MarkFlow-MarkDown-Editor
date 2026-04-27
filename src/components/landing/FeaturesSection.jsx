import {
  Columns2,
  Highlighter,
  FileDown,
  Palette,
  Save,
  ArrowDownUp,
} from "lucide-react";
import FeatureCard from "./FeatureCard";

const FEATURES = [
  {
    icon: Columns2,
    title: "Split Pane",
    description:
      "Resizable side-by-side editor and preview. See your changes instantly as you type.",
  },
  {
    icon: Highlighter,
    title: "Syntax Highlighting",
    description:
      "30+ languages highlighted automatically. Code blocks look as good as your IDE.",
  },
  {
    icon: FileDown,
    title: "PDF Export",
    description:
      "One-click export to pixel-perfect PDF. Preserves all styles, themes, and formatting.",
  },
  {
    icon: Palette,
    title: "Theme Toggle",
    description:
      "Beautiful dark and light themes. Persists across sessions with smooth transitions.",
  },
  {
    icon: Save,
    title: "Autosave",
    description:
      "Never lose your work. Content auto-saves to local storage every second.",
  },
  {
    icon: ArrowDownUp,
    title: "Scroll Sync",
    description:
      "Editor and preview scroll together. Always see exactly what you're editing.",
  },
];

export default function FeaturesSection() {
  return (
    <section
      className="relative py-24 sm:py-32"
      id="features"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Everything you need to{" "}
            <span className="gradient-text">write beautifully</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A carefully crafted set of features that get out of your way and let
            you focus on what matters — your content.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={i * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
