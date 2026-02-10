import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Intelligent Site Discovery & Strategic Acquisition", id: "section-1" },
    { label: "Automated Feasibility & Investment Intelligence", id: "section-2" },
    { label: "Connected Execution & Delivery Intelligence", id: "section-3" },
    { label: "Completion, Performance & Continuous Learning", id: "section-4" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // ---------- TOP FLOATING BAR (after scroll) ----------
 if (scrolled) {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-6xl">
      <div className="bg-black/75 backdrop-blur-xl border border-gray-800 rounded-2xl px-8 py-4 shadow-2xl">
        
        <div className="flex items-start justify-between gap-8">

          {/* Logo */}
          <div className="font-semibold text-lg shrink-0 mt-1">m.</div>

          {/* Links — allow wrapping */}
          <nav className="flex flex-wrap gap-x-10 gap-y-3 text-sm text-gray-300 leading-relaxed">
            {links.map((link) => (
              <button key={link.id} onClick={() => scrollToSection(link.id)} className="hover:text-white transition max-w-[180px] text-left bg-none border-none cursor-pointer p-0">
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right buttons */}
          <div className="flex items-center gap-5 shrink-0 text-sm">
            <button className="text-gray-300 hover:text-white">
              Login
            </button>

            <button className="bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-gray-200 transition">
              Get access
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

  return (
  <div className="absolute top-8 left-8 z-30">
    <nav className="flex flex-col gap-3 text-gray-400 text-xs font-normal">
      {links.map((link) => (
        <button
          key={link.id}
          onClick={() => scrollToSection(link.id)}
          className="hover:text-white transition tracking-wide bg-none border-none cursor-pointer text-left p-0"
        >
          {link.label}
        </button>
      ))}
    </nav>
  </div>
);

}
