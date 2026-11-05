export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Almonds",
    description:
      "Crunchy, nutrient-rich almonds selected for freshness and natural sweetness.",
    image: "/images/almonds.jpeg",
    category: "Dry Fruits",
  },
  {
    id: 2,
    name: "Premium Cashews",
    description:
      "Creamy whole cashews with a rich taste, perfect for snacking or cooking.",
    image: "/images/cashews.jpeg",
    category: "Dry Fruits",
  },
  {
    id: 3,
    name: "Premium Walnuts",
    description:
      "Handpicked walnuts packed with healthy fats and a deep, earthy flavour.",
    image: "/images/walnuts.jpeg",
    category: "Dry Fruits",
  },
  {
    id: 4,
    name: "Premium Dates",
    description:
      "Soft, naturally sweet dates — a wholesome energy boost anytime.",
    image: "/images/dates.jpeg",
    category: "Dry Fruits",
  },
  {
    id: 5,
    name: "Premium Raisins",
    description:
      "Plump, juicy raisins dried to lock in natural sweetness and goodness.",
    image: "/images/raisins.jpeg",
    category: "Dry Fruits",
  },
  {
    id: 6,
    name: "Assorted Dry Fruits",
    description:
      "A carefully mixed selection of premium dry fruits for everyday health.",
    image: "/images/dry-fruits.jpeg",
    category: "Dry Fruits",
  },
  {
    id: 7,
    name: "Premium Makhana",
    description:
      "Light, roasted fox nuts — a guilt-free crunchy snack for all ages.",
    image: "/images/makhana.jpeg",
    category: "Makhana",
  },
  {
    id: 8,
    name: "Maitri Makhana",
    description:
      "Premium Maitri makhana with a clean taste and satisfying crunch.",
    image: "/images/mairi-makhana.jpeg",
    category: "Makhana",
  },
  {
    id: 9,
    name: "Matri Makhana",
    description:
      "Quality Matri makhana, lightly roasted and ideal for healthy munching.",
    image: "/images/matri-makhana.jpeg",
    category: "Makhana",
  },
  {
    id: 10,
    name: "Matri Makhana Special",
    description:
      "Special-grade Matri makhana for a richer texture and flavour.",
    image: "/images/matri-makhana3.jpeg",
    category: "Makhana",
  },
  {
    id: 11,
    name: "Matri Makhana Premium",
    description:
      "Our finest Matri makhana pack — pure, fresh, and wonderfully light.",
    image: "/images/matri-makahna4.jpeg",
    category: "Makhana",
  },
  {
    id: 12,
    name: "Coriander Masala",
    description:
      "Aromatic coriander masala that adds fresh flavour to everyday meals.",
    image: "/images/corinder-masala.jpeg",
    category: "Masala",
  },
  {
    id: 13,
    name: "Cumin Masala",
    description:
      "Warm, earthy cumin masala to deepen the taste of dals and curries.",
    image: "/images/cumin-masala.jpeg",
    category: "Masala",
  },
  {
    id: 14,
    name: "Cumin",
    description:
      "Whole cumin seeds with a bold aroma for tempering and spice blends.",
    image: "/images/cumin.jpeg",
    category: "Masala",
  },
  {
    id: 15,
    name: "Garam Masala",
    description:
      "A balanced garam masala blend that brings warmth to Indian cooking.",
    image: "/images/gram-masala.jpeg",
    category: "Masala",
  },
  {
    id: 16,
    name: "Grand Masala",
    description:
      "A rich grand masala mix crafted for fuller, more aromatic dishes.",
    image: "/images/grand-masala.jpeg",
    category: "Masala",
  },
  {
    id: 17,
    name: "Grand Masala Pack",
    description:
      "Convenient grand masala packing for home kitchens and daily cooking.",
    image: "/images/grandmasala.jpeg",
    category: "Masala",
  },
  {
    id: 18,
    name: "Turmeric Powder",
    description:
      "Pure turmeric powder with a vibrant colour and authentic earthy note.",
    image: "/images/tumaric-powder.jpeg",
    category: "Masala",
  },
  {
    id: 19,
    name: "Red Chili",
    description:
      "Bright red chili powder that adds heat and colour to your recipes.",
    image: "/images/redchili.jpeg",
    category: "Masala",
  },
  {
    id: 20,
    name: "Whole Red Chili",
    description:
      "Dried whole red chilies for tempering, pickles, and spice blends.",
    image: "/images/whole-red-chili.jpeg",
    category: "Masala",
  },
];

/** Update this with the real business WhatsApp number (digits only, country code included). */
export const WHATSAPP_NUMBER = "919876543210";

export function whatsappGeneralLink() {
  const text = encodeURIComponent(
    "Hi, I'd like to know more about Nityana premium dry fruits.",
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
