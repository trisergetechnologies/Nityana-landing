import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { whatsappGeneralLink } from "@/data/products";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[390px] items-center overflow-hidden bg-cover bg-center md:min-h-[420px]"
      style={{
        backgroundImage: "url('/images/hero-dry-fruits.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#281006]/90 via-[#281006]/60 to-transparent" />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 py-16 lg:px-11">
        <div className="max-w-[620px]">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-9 bg-[#e8b65c]" />
            <p className="text-sm font-semibold tracking-widest text-[#f4c36c]">
              PURE • HEALTHY • NUTRITIOUS
            </p>
            <span className="h-px w-9 bg-[#e8b65c]" />
          </div>

          <h1 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Premium Dry Fruits
            <br />
            for a Healthier Life
          </h1>

          <p className="mt-5 max-w-lg text-base leading-7 text-white/90">
            Fresh, premium dry fruits & spices. Browse our range and
            enquire directly on WhatsApp.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="#products"
              className="inline-flex items-center gap-3 rounded-full bg-[#800000] px-8 py-3.5 font-semibold text-white shadow-lg transition hover:bg-[#a00000]"
            >
              View Products <ArrowRight size={19} />
            </Link>

            <a
              href={whatsappGeneralLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 font-semibold text-white shadow-lg transition hover:bg-[#1ebe57]"
            >
              <WhatsAppIcon size={20} />
              Order on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
