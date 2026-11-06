import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductBanners from "@/components/ProductBanners";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <ProductBanners />
        <FeaturedProducts />
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
