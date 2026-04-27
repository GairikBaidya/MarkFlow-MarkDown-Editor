import { Link } from "react-router-dom";

const COLUMNS = [
  { title: "Product", links: [{ label: "Editor", href: "/editor" }, { label: "Features", href: "#features" }, { label: "Pricing", href: "#" }, { label: "Changelog", href: "#" }] },
  { title: "Resources", links: [{ label: "Documentation", href: "#" }, { label: "API Reference", href: "#" }, { label: "Blog", href: "#" }, { label: "Guides", href: "#" }] },
  { title: "Company", links: [{ label: "About", href: "#" }, { label: "Careers", href: "#" }, { label: "Contact", href: "#" }, { label: "Press", href: "#" }] },
  { title: "Social", links: [{ label: "Twitter", href: "#" }, { label: "GitHub", href: "#" }, { label: "Discord", href: "#" }, { label: "YouTube", href: "#" }] },
];

export default function FooterSection() {
  return (
    <footer className="relative bg-void border-t border-white/5 pt-16 pb-8" id="footer">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-bold text-white mb-4 uppercase tracking-wider">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("/") ? (
                      <Link to={link.href} className="text-sm text-gray-500 hover:text-gray-300 transition-colors no-underline">{link.label}</Link>
                    ) : (
                      <a href={link.href} className="text-sm text-gray-500 hover:text-gray-300 transition-colors no-underline">{link.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">© {new Date().getFullYear()} MarkFlow. All rights reserved.</p>
          <p className="text-xs text-gray-600">Built with ❤️ by the MarkFlow team</p>
        </div>
      </div>
    </footer>
  );
}
