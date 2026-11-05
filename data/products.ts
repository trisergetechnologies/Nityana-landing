export interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Almonds",
    image: "/images/almonds.jpeg",
    category: "Dry Fruits",
  },
  {
    id: 2,
    name: "Premium Cashews",
    image: "/images/cashews.jpeg",
    category: "Dry Fruits",
  },
  {
    id: 3,
    name: "Premium Walnuts",
    image: "/images/walnuts.jpeg",
    category: "Dry Fruits",
  },
  {
    id: 4,
    name: "Premium Dates",
    image: "/images/dates.jpeg",
    category: "Dry Fruits",
  },
  {
    id: 5,
    name: "Premium Raisins",
    image: "/images/raisins.jpeg",
    category: "Dry Fruits",
  },
  {
    id: 6,
    name: "Assorted Dry Fruits",
    image: "/images/dry-fruits.jpeg",
    category: "Dry Fruits",
  },
  {
    id: 7,
    name: "Premium Makhana",
    image: "/images/makhana.jpeg",
    category: "Makhana",
  },
  {
    id: 8,
    name: "Maitri Makhana",
    image: "/images/mairi-makhana.jpeg",
    category: "Makhana",
  },
  {
    id: 9,
    name: "Matri Makhana",
    image: "/images/matri-makhana.jpeg",
    category: "Makhana",
  },
  {
    id: 10,
    name: "Matri Makhana Special",
    image: "/images/matri-makhana3.jpeg",
    category: "Makhana",
  },
  {
    id: 11,
    name: "Matri Makhana Premium",
    image: "/images/matri-makahna4.jpeg",
    category: "Makhana",
  },
  {
    id: 12,
    name: "Coriander Masala",
    image: "/images/corinder-masala.jpeg",
    category: "Masala",
  },
  {
    id: 13,
    name: "Cumin Masala",
    image: "/images/cumin-masala.jpeg",
    category: "Masala",
  },
  {
    id: 14,
    name: "Cumin",
    image: "/images/cumin.jpeg",
    category: "Masala",
  },
  {
    id: 15,
    name: "Garam Masala",
    image: "/images/gram-masala.jpeg",
    category: "Masala",
  },
  {
    id: 16,
    name: "Grand Masala",
    image: "/images/grand-masala.jpeg",
    category: "Masala",
  },
  {
    id: 17,
    name: "Grand Masala Pack",
    image: "/images/grandmasala.jpeg",
    category: "Masala",
  },
  {
    id: 18,
    name: "Turmeric Powder",
    image: "/images/tumaric-powder.jpeg",
    category: "Masala",
  },
  {
    id: 19,
    name: "Red Chili",
    image: "/images/redchili.jpeg",
    category: "Masala",
  },
  {
    id: 20,
    name: "Whole Red Chili",
    image: "/images/whole-red-chili.jpeg",
    category: "Masala",
  },
];

/** Update this with the real business WhatsApp number (digits only, country code included). */
export const WHATSAPP_NUMBER = "919876543210";

export function whatsappProductLink(productName: string) {
  const text = encodeURIComponent(
    `Hi, I'm interested in ${productName}. Please share more details.`,
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export function whatsappGeneralLink() {
  const text = encodeURIComponent(
    "Hi, I'd like to know more about Nityana premium dry fruits.",
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
