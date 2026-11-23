import { Heart, Leaf, Sparkles, Truck } from "lucide-react";
import {
  CarouselImage,
  CategoryCardProps,
  Comments,
  NavLinksType,
  Partners,
  RunwayLook,
} from "../types/types";

// Navigation links
export const navLinks: NavLinksType[] = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/new-arrivals", label: "New Arrivals" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact Us" },
];

export const partners: Partners[] = [
  { label: "Nike" },
  { label: "ZARA" },
  { label: "adidas" },
  { label: "Gymboree" },
  { label: "Moody Kids" },
];

// App shop categories
export const categories: CategoryCardProps[] = [
  {
    image: "/cat-1.png",
    alt: "Boys fashion collection",
    label: "EXPLORE COLLECTION",
    title: "Little Boys",
    description: "Everyday styles for little adventurers.",
    className: "cat-card cat-card-large",
    href: "/",
  },
  {
    image: "/cat-2.png",
    alt: "Girls fashion collection",
    label: "NEW COLLECTION",
    title: "Little Girls",
    description: "Cute looks, big personalities.",
    className: "cat-card cat-card-middle",
    href: "/",
  },
  {
    image: "/cat-3.png",
    alt: "Baby girl clothing",
    label: "ADORABLE STYLES",
    title: "Baby Girls",
    description: "Little outfits, endless smiles.",
    className: "cat-card cat-card-small",
    href: "/",
  },
  {
    image: "/cat-4.png",
    alt: "Baby boy clothing",
    label: "LITTLE FAVORITES",
    title: "Baby Boys",
    description: "Comfort meets cuteness.",
    className: "cat-card cat-card-small",
    href: "/",
  },
];

export const announcements = [
  "NEW SEASON, NEW LITTLE STYLES",
  "FRESH LOOKS FOR LITTLE ADVENTURERS",
  "ADORABLE NEWBORN COLLECTION",
  "NEW ARRIVALS FOR LITTLE TRENDSETTERS",
];

// App client says
export const comments: Comments[] = [
  {
    id: 1,
    name: "Alex Jason",
    comment:
      "Amazing service! Everything was perfect, and I really enjoyed the experience.",
    photo: "https://i.postimg.cc/T1N9dr3j/client-img-6.jpg",
    rate: 5,
  },
  {
    id: 2,
    name: "Sarah Williams",
    comment:
      "Very professional team. They delivered exactly what I was looking for.",
    photo: "https://i.postimg.cc/FFPzrPNj/client-img-3.jpg",
    rate: 5,
  },
  {
    id: 3,
    name: "Michael Brown",
    comment:
      "Great quality and excellent customer support. Highly recommended!",
    photo: "https://i.postimg.cc/B6mSv69P/client-img-1.jpg",
    rate: 4,
  },
  {
    id: 4,
    name: "Emily Johnson",
    comment:
      "I'm really impressed with the attention to detail and overall quality.",
    photo: "https://i.postimg.cc/KvkGZx9x/client-img-7.jpg",
    rate: 5,
  },
  {
    id: 5,
    name: "Daniel Smith",
    comment:
      "A wonderful experience from beginning to end. I will definitely come back.",
    photo: "https://i.postimg.cc/FRCv4B3T/client-img-2.jpg",
    rate: 5,
  },
  {
    id: 6,
    name: "Sophia Martinez",
    comment:
      "Excellent work! The team was friendly, helpful, and very professional.",
    photo: "https://i.postimg.cc/pXFHwkTF/client-img-4.jpg",
    rate: 4,
  },
  {
    id: 7,
    name: "James Wilson",
    comment:
      "Everything exceeded my expectations. Great service and outstanding results.",
    photo: "https://i.postimg.cc/25zNBDxy/client-img-5.jpg",
    rate: 5,
  },
  {
    id: 8,
    name: "Olivia Davis",
    comment:
      "Really happy with the results. The entire process was smooth and easy.",
    photo: "https://i.postimg.cc/43Bk6SLG/client-img-8.jpg",
    rate: 5,
  },
];

// New arrivals
export const looks: RunwayLook[] = [
  {
    src: "https://i.postimg.cc/bv4x8nTf/T0000300001-p.jpg",
    alt: "Red draped crepe gown with a high slit",
    products: [
      {
        name: "Draped Crepe Column Gown",
        price: "$3,450",
        crop: { top: 0, bottom: 0.62 },
      },
      {
        name: "Draped Crepe Train",
        price: "$1,120",
        crop: { top: 0.48, bottom: 1.0 },
      },
    ],
  },
  {
    src: "https://i.postimg.cc/X7x9qm82/T0000300002-p.jpg",
    alt: "Olive sculpted peplum dress",
    products: [
      {
        name: "Sculpted Peplum Midi Dress",
        price: "$2,180",
        crop: { top: 0, bottom: 0.7 },
      },
      {
        name: "Ankle-Wrap Leather Sandal",
        price: "$740",
        crop: { top: 0.48, bottom: 1.0 },
      },
    ],
  },
  {
    src: "https://i.postimg.cc/W1hq33tz/T0000300003-p.jpg",
    alt: "Black strapless jersey maxi dress",
    products: [
      {
        name: "Strapless Jersey Maxi",
        price: "$1,290",
        crop: { top: 0, bottom: 0.62 },
      },
      {
        name: "Fine-Strap Sandal",
        price: "$620",
        crop: { top: 0.48, bottom: 1.0 },
      },
    ],
  },
  {
    src: "https://i.postimg.cc/L6snCXkd/T0000300008-p.jpg",
    alt: "Blush knit over wide denim",
    products: [
      {
        name: "Draped Cotton Overshirt",
        price: "$480",
        crop: { top: 0, bottom: 0.5 },
      },
      {
        name: "Wide Rigid Denim",
        price: "$390",
        crop: { top: 0.48, bottom: 1.0 },
      },
    ],
  },
  {
    src: "https://i.postimg.cc/C1YKjLMf/T0000300020-p.jpg",
    alt: "Red puff-sleeve belted mini dress",
    products: [
      {
        name: "Puff-Sleeve Belted Mini",
        price: "$1,650",
        crop: { top: 0, bottom: 0.6 },
      },
      {
        name: "Platform Leather Pump",
        price: "$710",
        crop: { top: 0.48, bottom: 1.0 },
      },
    ],
  },
  {
    src: "https://i.postimg.cc/7htY833m/T0000300010-p.jpg",
    alt: "Marbled print mesh gown",
    products: [
      {
        name: "Marbled Mesh Gown",
        price: "$1,980",
        crop: { top: 0, bottom: 0.6 },
      },
      {
        name: "Marbled Mesh Skirt",
        price: "$860",
        crop: { top: 0.48, bottom: 1.0 },
      },
    ],
  },
];

//
export const images: CarouselImage[] = [
  {
    id: 1,
    src: "https://i.postimg.cc/PJPCZFpL/05644556712000-a1-Photoroom.png",
    title: "Modern Collection",
    description: "Explore our latest collection and discover more.",
  },
  {
    id: 2,
    src: "https://i.postimg.cc/5tyWxcZs/08073505537-a3-Photoroom.png",
    title: "New Arrivals",
    description: "Be the first to shop our freshest seasonal drops.",
  },
  {
    id: 3,
    src: "https://i.postimg.cc/bNpMycn2/T9376041529-p-Photoroom.png",
    title: "Premium Products",
    description: "Crafted with the highest quality materials for lasting wear.",
  },
  {
    id: 4,
    src: "https://i.postimg.cc/6qjdxvR7/T9311818339-p-Photoroom.png",
    title: "Special Offers",
    description: "Enjoy exclusive discounts on our best-loved pieces.",
  },
  {
    id: 5,
    src: "https://i.postimg.cc/8zVCPCHb/02878550715-p-Photoroom.png",
    title: "Best Sellers",
    description: "Discover the styles our community loves the most.",
  },
  {
    id: 6,
    src: "https://i.postimg.cc/C1wPFbBp/08614602600-p-Photoroom.png",
    title: "Latest Trends",
    description: "Stay ahead of the curve with our newest fashion edits.",
  },
  {
    id: 7,
    src: "https://i.postimg.cc/8zVCPCHb/02878550715-p-Photoroom.png",
    title: "Exclusive Design",
    description: "Unique pieces you won't find anywhere else.",
  },
  {
    id: 8,
    src: "https://i.postimg.cc/6qjdxvR7/T9311818339-p-Photoroom.png",
    title: "New Season",
    description: "Refresh your wardrobe with our latest seasonal drops.",
  },
];

// About Sats
export const stats = [
  { value: "50K+", label: "Happy families", symbol: "♥" },
  { value: "120+", label: "Trusted brands", symbol: "✿" },
  { value: "8", label: "Years of love", symbol: "♡" },
  { value: "4.9", label: "Average rating", symbol: "★" },
];

// About Values
export const values = [
  {
    icon: Heart,
    title: "Made with love",
    text: "Every piece is chosen with care, comfort and joy in mind.",
  },
  {
    icon: Leaf,
    title: "Gentle on earth",
    text: "Organic fabrics and low-impact packaging, always.",
  },
  {
    icon: Sparkles,
    title: "Playfully stylish",
    text: "Trend-forward looks that are made to be lived in.",
  },
  {
    icon: Truck,
    title: "Fast & free",
    text: "Quick delivery and easy returns on every order.",
  },
];
