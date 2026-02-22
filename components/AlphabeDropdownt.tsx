"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function AlphabetDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-lg transition"
      >
        Цагаан толгой
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute left-0 mt-4 w-48 rounded-lg bg-[#3d539f] text-white shadow-gray-400 overflow-hidden z-50">
          <button className="block w-full text-left px-4 py-2">
            <a href="./egshig">Эгшиг үсэг</a>
          </button>
          <button className="block w-full text-left px-4 py-2">
            <a href="./giiguulegch"> Гийгүүлэгч үсэг </a>
          </button>
          <button className="block w-full text-left px-4 py-2">
            <a href="./hos-egshig/page">Хос / Урт эгшиг </a>
          </button>
        </div>
      )}
    </div>
  );
}