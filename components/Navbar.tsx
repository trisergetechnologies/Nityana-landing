"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Products", href: "#products" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#eadfce] bg-[#fffaf2]/95 backdrop-blur">
      <div className="mx-auto flex h-[96px] max-w-[1400px] items-center justify-between px-5 lg:px-9">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-nit.png"
            alt="Nitanya Premium Dry Fruits"
            width={260}
            height={96}
            priority
            className="h-[72px] w-auto object-contain sm:h-[84px]"
          />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition hover:text-[#800000] ${
                link.name === "Home"
                  ? "border-b-2 border-[#800000] pb-2 text-[#800000]"
                  : "text-[#44251c]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className="text-[#800000]" />
          ) : (
            <Menu className="text-[#800000]" />
          )}
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-5 border-t border-[#eadfce] bg-[#fffaf2] px-6 py-6 md:hidden">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-medium text-[#44251c] hover:text-[#800000]"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
