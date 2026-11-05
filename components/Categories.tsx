const categories = [
  {
    name: "Almonds",
    image: "/images/almonds.jpeg",
  },
  {
    name: "Cashews",
    image: "/images/cashews.jpeg",
  },
  {
    name: "Makhana",
    image: "/images/makhana.jpeg",
  },
  {
    name: "Walnuts",
    image: "/images/walnuts.jpeg",
  },
  {
    name: "Raisins",
    image: "/images/raisins.jpeg",
  },
  {
    name: "Dates",
    image: "/images/dates.jpeg",
  },
];

export default function Categories() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-12 lg:px-9">
      <div className="mb-7 flex items-center justify-center gap-5">
        <span className="h-px w-16 bg-[#d7a34c]" />
        <h2 className="font-serif text-2xl font-bold text-[#800000] md:text-3xl">
          Our Range
        </h2>
        <span className="h-px w-16 bg-[#d7a34c]" />
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {categories.map((category) => (
          <a
            href="#products"
            key={category.name}
            className="group overflow-hidden rounded-xl bg-[#faebd9] p-3 text-center transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex h-24 items-center justify-center sm:h-28">
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-contain mix-blend-multiply transition duration-300 group-hover:scale-110"
              />
            </div>
            <h3 className="mt-2 font-semibold text-[#57251b]">
              {category.name}
            </h3>
          </a>
        ))}
      </div>
    </section>
  );
}
