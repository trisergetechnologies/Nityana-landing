"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { whatsappGeneralLink } from "@/data/products";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const heroSlides = [
  {
    name: "Assorted Dry Fruits",
    image: "/images/dry-fruits.jpeg",
    label: "Premium Mix",
  },
  {
    name: "Premium Almonds",
    image: "/images/almonds.jpeg",
    label: "Premium Almonds",
  },
  {
    name: "Premium Cashews",
    image: "/images/cashews.jpeg",
    label: "Premium Cashews",
  },
  {
    name: "Premium Makhana",
    image: "/images/makhana.jpeg",
    label: "Premium Makhana",
  },
  {
    name: "Premium Dates",
    image: "/images/dates.jpeg",
    label: "Premium Dates",
  },
  {
    name: "Premium Walnuts",
    image: "/images/walnuts.jpeg",
    label: "Premium Walnuts",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % heroSlides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[active];

  return (
    <section className="relative overflow-hidden bg-[#f7efe3]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_40%,#fff8ee_0%,#f3e5d2_55%,#ebd7bc_100%)]" />
      <div className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full bg-[#d9a441]/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#800000]/08 blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100vh-78px)] max-w-[1400px] items-center gap-10 px-6 py-12 lg:grid-cols-[1fr_1.05fr] lg:gap-8 lg:px-11 lg:py-16">
        {/* Left — brand + description */}
        <div className="relative z-10 order-2 max-w-[560px] lg:order-1">
          <div className="hero-animate hero-delay-1 mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#d9a441]" />
            <p className="text-xs font-semibold tracking-[0.28em] text-[#8a5a18] uppercase">
              Premium Selection
            </p>
          </div>

          <h1 className="hero-animate hero-delay-2 font-serif text-5xl font-semibold leading-[1.02] tracking-tight text-[#4a160f] sm:text-6xl md:text-7xl">
            Nityana
          </h1>

          <p className="hero-animate hero-delay-3 mt-4 font-serif text-2xl font-medium leading-snug text-[#800000] sm:text-3xl">
            Dry Fruits & Handpicked Spices
          </p>

          <p className="hero-animate hero-delay-4 mt-6 max-w-md text-base leading-8 text-[#5c3a2c] sm:text-lg">
            Fresh almonds, cashews, makhana, dates, and aromatic masalas —
            packed for purity, taste, and everyday wellness.
          </p>

          <div className="hero-animate hero-delay-5 mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="#products"
              className="inline-flex items-center gap-3 rounded-full bg-[#800000] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(128,0,0,0.28)] transition hover:scale-[1.03] hover:bg-[#9a1212]"
            >
              View Products <ArrowRight size={18} />
            </Link>

            <a
              href={whatsappGeneralLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(37,211,102,0.28)] transition hover:scale-[1.03] hover:bg-[#1ebe57]"
            >
              <WhatsAppIcon size={20} />
              Order on WhatsApp
            </a>
          </div>
        </div>

        {/* Right — stylish premium product showcase */}
        <div className="relative order-1 mx-auto w-full max-w-[560px] lg:order-2 lg:max-w-none">
          <div className="hero-showcase relative mx-auto aspect-square max-w-[520px]">
            {/* Ambient glow */}
            <div className="pointer-events-none absolute inset-[8%] rounded-full bg-[radial-gradient(circle,#f4d48a_0%,transparent_68%)] opacity-70 blur-2xl" />
            <div className="pointer-events-none absolute inset-[18%] rounded-full bg-[#800000]/10 blur-3xl" />

            {/* Outer gold ring */}
            <div className="hero-ring pointer-events-none absolute inset-[4%] rounded-full border border-[#d9a441]/35" />
            <div className="hero-ring-spin pointer-events-none absolute inset-[2%] rounded-full border border-dashed border-[#d9a441]/40" />

            {/* Decorative arcs */}
            <div className="pointer-events-none absolute inset-[10%] rounded-full border-[3px] border-[#800000]/10" />
            <div className="pointer-events-none absolute -inset-1 rounded-full bg-[conic-gradient(from_180deg,transparent_0deg,#d9a44155_40deg,transparent_90deg,transparent_180deg,#80000033_230deg,transparent_280deg)] opacity-60 blur-[1px]" />

            {/* Main framed stage */}
            <div className="absolute inset-[12%] overflow-hidden rounded-[2rem] border border-[#d9a441]/50 bg-gradient-to-br from-[#fffaf2]/90 via-[#f4e6d2]/75 to-[#e8d2b4]/85 shadow-[0_25px_60px_rgba(74,22,15,0.18),inset_0_1px_0_rgba(255,255,255,0.65)] backdrop-blur-[2px] sm:rounded-[2.5rem]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.55),transparent_45%)]" />
              <div className="pointer-events-none absolute inset-3 rounded-[1.6rem] border border-white/40 sm:rounded-[2rem]" />

              {/* Corner ornaments */}
              <span className="pointer-events-none absolute left-4 top-4 h-8 w-8 border-l-2 border-t-2 border-[#d9a441]" />
              <span className="pointer-events-none absolute right-4 top-4 h-8 w-8 border-r-2 border-t-2 border-[#d9a441]" />
              <span className="pointer-events-none absolute bottom-4 left-4 h-8 w-8 border-b-2 border-l-2 border-[#d9a441]" />
              <span className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 border-b-2 border-r-2 border-[#d9a441]" />

              {heroSlides.map((item, index) => (
                <div
                  key={item.image}
                  className={`absolute inset-0 p-8 transition-all duration-700 ease-out sm:p-10 ${
                    index === active
                      ? "translate-y-0 scale-100 opacity-100"
                      : "translate-y-4 scale-95 opacity-0"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    priority={index === 0}
                    className="object-contain drop-shadow-[0_20px_35px_rgba(60,33,24,0.28)]"
                    sizes="(max-width: 1024px) 85vw, 480px"
                  />
                </div>
              ))}
            </div>

            {/* Soft floor shadow */}
            <div className="pointer-events-none absolute bottom-2 left-1/2 h-10 w-[58%] -translate-x-1/2 rounded-[100%] bg-[#3c2118]/20 blur-2xl" />
          </div>

          <div className="mt-6 flex flex-col items-center gap-4">
            <p
              key={slide.label}
              className="hero-slide-label font-serif text-xl font-semibold tracking-wide text-[#800000]"
            >
              {slide.label}
            </p>

            <div className="flex items-center gap-2.5">
              {heroSlides.map((item, index) => (
                <button
                  key={item.image}
                  type="button"
                  aria-label={`Show ${item.name}`}
                  onClick={() => setActive(index)}
                  className={`overflow-hidden rounded-full border transition-all duration-300 ${
                    index === active
                      ? "h-11 w-11 border-[#d9a441] shadow-[0_0_0_3px_rgba(217,164,65,0.25)]"
                      : "h-9 w-9 border-[#d9a441]/35 opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt=""
                    width={44}
                    height={44}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
