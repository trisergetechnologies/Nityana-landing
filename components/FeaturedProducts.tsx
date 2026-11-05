import { products, whatsappProductLink } from "@/data/products";

export default function FeaturedProducts() {
  return (
    <section id="products" className="mx-auto max-w-[1400px] px-5 py-14 lg:px-9">
      <div className="mb-3 flex items-center justify-center gap-5">
        <span className="h-px w-16 bg-[#d7a34c]" />
        <h2 className="font-serif text-2xl font-bold text-[#800000] md:text-3xl">
          Our Products
        </h2>
        <span className="h-px w-16 bg-[#d7a34c]" />
      </div>

      <p className="mb-10 text-center text-sm text-[#6b4335] md:text-base">
        Premium dry fruits & spices — enquire on WhatsApp for availability
      </p>

      <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
        {products.map((product) => (
          <a
            key={product.id}
            href={whatsappProductLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="group overflow-hidden rounded-2xl border border-[#eee0d0] bg-white transition hover:-translate-y-1 hover:border-[#d7a34c]/60 hover:shadow-lg"
          >
            <div className="relative flex aspect-square items-center justify-center bg-[#fcf5eb] p-5">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="px-4 py-4 text-center">
              <h3 className="font-serif text-sm font-semibold leading-snug text-[#3e2018] sm:text-base">
                {product.name}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
