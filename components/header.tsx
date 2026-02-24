"use client";
import { useState, useEffect } from "react";
import { Menu, User, X } from "lucide-react";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const navItems = [
    { label: "Нүүр", href: "/" },
    { label: "37 хаад", href: "./king" },
    { label: "Дурсгалт өв", href: "./dursgalt" },
    { label: "Түүх Домог", href: "./domog" },
    { label: "Мэдлэгээ сорья", href: "./quiz" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#e8dfd2]/95 backdrop-blur-sm border-b border-[#c4b5a0]/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg hover:bg-[#d4c4b0] transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className="hidden md:flex items-center gap-2 mx-auto bg-[#9d9082]/80 rounded-full px-6 py-2 backdrop-blur-sm">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="px-4 py-2 text-sm text-white hover:bg-white/20 rounded-full transition-all duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              className="p-2 rounded-lg hover:bg-[#d4c4b0] transition-colors"
              aria-label="User"
            >
              <User size={20} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-sm bg-[#9d9082]/60 text-white rounded-lg hover:bg-[#9d9082]/80 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}