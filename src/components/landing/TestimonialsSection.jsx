import TestimonialCard from "./TestimonialCard";

const TESTIMONIALS = [
  { name: "Sarah Chen", role: "Senior Technical Writer @ Stripe", quote: "MarkFlow replaced every other editor I've tried. The live preview is so instant it feels like magic." },
  { name: "Marcus Adeyemi", role: "Open Source Developer", quote: "The PDF export alone makes MarkFlow worth it. My README previews look pixel-perfect." },
  { name: "Priya Nair", role: "PhD Researcher, MIT", quote: "I write all my papers in MarkFlow first. The autosave feature means I've never lost a single word." },
  { name: "Tom Eriksson", role: "Head of Content @ Linear", quote: "We switched our entire content team to MarkFlow. Our publish cycle got 40% faster." },
  { name: "Aria Vasquez", role: "Indie Game Developer & Blogger", quote: "The theme toggle is gorgeous, the scroll sync actually works, and exporting to PDF is one click." },
];

function CarouselRow({ direction = "forward" }) {
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <div className="carousel-track-outer mb-6">
      <div className={`carousel-track carousel-track--${direction}`}>
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} {...t} />
        ))}
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden" id="testimonials">
      <div className="text-center mb-16 px-6">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
          Loved by <span className="gradient-text">writers everywhere</span>
        </h2>
        <p className="text-gray-400 text-lg">Join thousands who made the switch.</p>
      </div>
      <CarouselRow direction="forward" />
      <CarouselRow direction="reverse" />
    </section>
  );
}
