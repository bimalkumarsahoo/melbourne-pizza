import React from "react";
import Link from "next/link";

interface HomeButtonsProps {
  onAboutClick: () => void;
}

export const HomeButtons: React.FC<HomeButtonsProps> = ({ onAboutClick }) => (
  <section className="flex flex-col items-center justify-center gap-6 py-12 bg-gradient-to-b from-white to-gray-50">
    <div className="flex flex-wrap gap-4 justify-center">
      <Link href="/menu" className="px-6 py-3 rounded-full bg-black text-white font-semibold shadow hover:bg-gray-800 transition">Explore our menu</Link>
      <button onClick={onAboutClick} className="px-6 py-3 rounded-full bg-white border border-black text-black font-semibold shadow hover:bg-gray-100 transition">About us</button>
      <a href="https://www.zomato.com/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-red-600 text-white font-semibold shadow hover:bg-red-700 transition">Order via Zomato</a>
      <a href="https://www.swiggy.com/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-orange-500 text-white font-semibold shadow hover:bg-orange-600 transition">Order via Swiggy</a>
    </div>
  </section>
);
