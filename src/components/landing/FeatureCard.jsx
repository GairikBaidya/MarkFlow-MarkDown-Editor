import { useIntersection } from "../../hooks/useIntersection";

export default function FeatureCard({ icon: Icon, title, description, delay = 0 }) {
  const { ref, isVisible } = useIntersection({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className="glass-card p-6 sm:p-8 fade-in-up"
      style={{
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
      }}
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-cyan/20 to-brand-purple/20 flex items-center justify-center mb-4">
        <Icon size={24} className="text-brand-cyan" />
      </div>
      <h3 className="font-display text-lg font-bold text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
