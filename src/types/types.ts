import { Dispatch, ReactNode, RefObject, SetStateAction } from "react";

// Main page layout type
export type MainLayout = {
  children: ReactNode;
};

// navLinks types
export type NavLinksType = {
  href: string;
  label: string;
};

// Animation Types
export type UseAnimationProps = {
  scopeRef: RefObject<HTMLElement | null>;
  isOpen?: boolean;
};

export type HeadProps = {
  eyebrow: string | ReactNode;
  title1: string;
  title2: string;
  text: string | ReactNode;
};

export type UseCommentAnimationProps = {
  sectionRef: RefObject<HTMLElement | null>;
  viewportRef: RefObject<HTMLDivElement | null>;
  trackRef: RefObject<HTMLUListElement | null>;
};

// Products API types
export type Product = {
  id: number;
  title?: string;
  name: string;
  image: string;
  cost: number;
  discount?: number;
  shortDescription?: string;
  available?: boolean;
  new?: boolean;
  category?: string;
};

export type ProductsProps = {
  products: Product[];
};

export type CartItem = Product & {
  quantity: number;
  price: number;
};

export interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  bannerDismissed: boolean;
  setBannerDismissed: (value: boolean) => void;
}

export type Partners = {
  label: string;
};

// Client comments type
export type Comments = {
  id: number;
  name: string;
  comment: string;
  photo?: string;
  rate?: 1 | 2 | 3 | 4 | 5;
};

// Carousel Image type
export type CarouselImage = {
  id: number;
  src: string;
  title: string;
  description: string;
};

export type SetCurrentState = Dispatch<SetStateAction<number>>;

export type CarouselProps = {
  images: CarouselImage[];
};

export type CarouselOverlayProps = {
  images: CarouselImage[];
  current: number;
};

export type CarouselArrowProps = {
  imagesLength: number;
  setCurrent: SetCurrentState;
};

export type CarouselControlsProps = {
  images: CarouselImage[];
  current: number;
  setCurrent: SetCurrentState;
};

// App shop categories type
export type CategoryCardProps = {
  image: string;
  alt: string;
  label: string;
  title: string;
  description: string;
  className: string;
  href: string;
};

// New arrivals carousel

export type RunwayProduct = {
  name: string;
  price: string;
  src?: string;
  crop?: { top: number; bottom: number; x?: number };
};

export type RunwayLook = {
  src: string;
  alt?: string;
  products?: RunwayProduct[];
};

export type RunwayLookbookProps = {
  looks: RunwayLook[];
  height?: string;
  title?: string;
  blurb?: string;
  firstNumber?: number;
  ctaLabel?: string;
  onShopLook?: (index: number) => void;
  rail?: boolean;
  scrollPerLook?: number;
  loop?: boolean;
  fontSrc?: string | null;
  onIndexChange?: (index: number) => void;
  ariaLabel?: string;
  className?: string;
};

export type Pose = {
  x: number;
  y: number;
  scale: number;
  blur: number;
  alpha: number;
};

export interface CartProps {
  items: Product[];
}
