import {
  Cantarell,
  Griffy,
  Modak,
  Noto_Sans_Tagalog,
  Sniglet,
} from "next/font/google";

export const noto_sans_tagalog = Noto_Sans_Tagalog({
  subsets: ["latin", "tagalog"],
  weight: "400",
  display: "swap",
});

export const snigletRegular = Sniglet({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  display: "swap",
});

export const cantarellBold = Cantarell({
  subsets: ["latin", "latin-ext"],
  weight: "700",
  display: "swap",
});

export const modak = Modak({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const griffy = Griffy({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
