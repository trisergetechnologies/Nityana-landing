
import {
  Leaf,
  ShieldCheck,
  Truck,
  Headphones,
} from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "No Preservatives",
  },
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    description: "Handpicked Products",
  },
  {
    icon: Truck,
    title: "Fast & Reliable",
    description: "Delivery",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Always Here",
  },
];

export default function Benefits() {
  return (
    <section id="about" className="overflow-hidden bg-[#fff0dc]">
      <div className="mx-auto grid max-w-[1400px] items-center gap-8 px-5 py-9 lg:grid-cols-[1fr_280px] lg:px-9">

        <div>
          <h2 className="mb-7 font-serif text-3xl font-bold text-[#800000]">
            Why Choose Nitanya?
          </h2>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="text-center md:border-r md:border-[#d9a34e] last:border-0"
              >
                <benefit.icon
                  size={39}
                  strokeWidth={1.8}
                  className="mx-auto text-[#800000]"
                />

                <h3 className="mt-3 font-bold text-[#800000]">
                  {benefit.title}
                </h3>

                <p className="mt-1 text-sm text-[#592c20]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden justify-center lg:flex">
          <div className="flex h-48 w-48 items-center justify-center rounded-full bg-[#f8dfbb] text-8xl">
            🥜
          </div>
        </div>

      </div>
    </section>
  );
}
