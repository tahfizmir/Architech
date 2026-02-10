import React from "react";

export default function Footer() {
  return (
    <footer className="relative z-20 border-t border-gray-800 px-8 py-10 text-sm text-gray-500 flex justify-between">
      <div>© 2026 Archietech</div>
      <div className="flex gap-6">
        <a href="#" className="hover:text-gray-300">
          Privacy
        </a>
        <a href="#" className="hover:text-gray-300">
          Terms
        </a>
        <a href="#" className="hover:text-gray-300">
          Contact
        </a>
      </div>
    </footer>
  );
}
