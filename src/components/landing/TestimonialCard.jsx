export default function TestimonialCard({ name, role, quote }) {
  return (
    <div className="glass-card p-6 w-[340px] flex-shrink-0 hover:border-brand-cyan/30">
      <p className="text-gray-300 text-sm leading-relaxed mb-4 italic">"{quote}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-cyan to-brand-purple flex items-center justify-center text-white font-bold text-sm">
          {name.split(" ").map(n => n[0]).join("")}
        </div>
        <div>
          <div className="text-white text-sm font-semibold">{name}</div>
          <div className="text-gray-500 text-xs">{role}</div>
        </div>
      </div>
    </div>
  );
}
