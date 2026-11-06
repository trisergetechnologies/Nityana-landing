import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#510b08] text-white">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-9">
        <div>
          <h2 className="font-serif text-3xl font-bold text-[#efbb60]">
            Nitanya
          </h2>
          <p className="text-sm text-[#efbb60]">Premium Dry Fruits</p>

          <p className="mt-5 text-sm leading-7 text-white/80">
            Premium quality dry fruits for a healthier you and a happier life.
          </p>
        </div>

        <div>
          <h3 className="mb-5 font-bold text-[#efbb60]">Quick Links</h3>
          <ul className="space-y-3 text-sm text-white/85">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#products">Products</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-bold text-[#efbb60]">Our Products</h3>
          <ul className="space-y-3 text-sm text-white/85">
            {["Almonds", "Cashews", "Makhana", "Walnuts", "Raisins", "Dates"].map(
              (item) => (
                <li key={item}>
                  <Link href="#products">{item}</Link>
                </li>
              ),
            )}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-bold text-[#efbb60]">Contact Us</h3>
          <ul className="space-y-4 text-sm text-white/85">
            <li className="flex items-center gap-3">
              <Phone size={17} className="shrink-0 text-[#efbb60]" />
              +91 98765 43210
            </li>
            <li className="flex items-center gap-3 break-all">
              <Mail size={17} className="shrink-0 text-[#efbb60]" />
              support@nitanya.com
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={17} className="shrink-0 text-[#efbb60]" />
              New Delhi, India
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-4 px-6 py-6 text-xs text-white/75 md:flex-row lg:px-9">
          <p>© 2026 Nitanya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
