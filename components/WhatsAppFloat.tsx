import { whatsappGeneralLink } from "@/data/products";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappGeneralLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/35 transition hover:scale-105 hover:bg-[#1ebe57] md:bottom-8 md:right-8"
    >
      <WhatsAppIcon size={30} />
    </a>
  );
}
