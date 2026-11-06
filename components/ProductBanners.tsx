import Image from "next/image";
import Reveal from "@/components/Reveal";

const banners = [
  {
    name: "Premium Makhana",
    tagline: "Light • Crunchy • Wholesome",
    description:
      "Roasted fox nuts that make a clean, guilt-free snack. Lightly crisp, naturally nourishing, and perfect for everyday munching for the whole family.",
    image: "/images/mairi-makhana.jpeg",
    accent: "#7a3e1d",
  },
  {
    name: "Premium Cashews",
    tagline: "Creamy • Rich • Handpicked",
    description:
      "Buttery whole cashews selected for size and freshness. Ideal for snacking, festive platters, or adding richness to your favourite recipes.",
    image: "/images/cashews.jpeg",
    accent: "#800000",
  },
  {
    name: "Premium Almonds",
    tagline: "Crunchy • Nutritious • Fresh",
    description:
      "Premium almonds packed with natural goodness. Enjoy them raw, roasted, or as a daily health companion for energy and taste.",
    image: "/images/almonds.jpeg",
    accent: "#8a5a18",
  },
];

export default function ProductBanners() {
  return (
    <section className="space-y-0 py-4">
      {banners.map((banner, index) => {
        const imageRight = index % 2 === 1;

        return (
          <Reveal key={banner.name}>
            <article
              className={`relative overflow-hidden ${
                index % 2 === 0 ? "bg-[#f7efe3]" : "bg-[#fffaf2]"
              }`}
            >
              <div
                className={`mx-auto grid max-w-[1400px] items-center gap-8 px-5 py-14 lg:grid-cols-2 lg:gap-14 lg:px-9 lg:py-20 ${
                  imageRight ? "" : ""
                }`}
              >
                <div
                  className={`relative mx-auto w-full max-w-[560px] lg:max-w-[620px] ${
                    imageRight ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="pointer-events-none absolute inset-[10%] rounded-full bg-[radial-gradient(circle,#f4d48a66,transparent_70%)] blur-3xl" />
                  <div className="relative aspect-square overflow-hidden rounded-[1.5rem] shadow-[0_24px_50px_rgba(74,22,15,0.12)]">
                    <Image
                      src={banner.image}
                      alt={banner.name}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 95vw, 620px"
                    />
                  </div>
                </div>

                <div
                  className={`max-w-[540px] ${
                    imageRight
                      ? "lg:order-1 lg:justify-self-start"
                      : "lg:order-2 lg:justify-self-end"
                  }`}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-px w-10 bg-[#d9a441]" />
                    <p
                      className="text-xs font-semibold tracking-[0.24em] uppercase"
                      style={{ color: banner.accent }}
                    >
                      {banner.tagline}
                    </p>
                  </div>

                  <h2
                    className="font-serif text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl"
                    style={{ color: banner.accent }}
                  >
                    {banner.name}
                  </h2>

                  <p className="mt-5 text-base leading-8 text-[#5c3a2c] sm:text-lg">
                    {banner.description}
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        );
      })}
    </section>
  );
}
