"use client";

import type { CategoryCardProps } from "@/src/types/types";
import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({
  image,
  alt,
  label,
  title,
  description,
  className,
  href,
}: CategoryCardProps) {
  return (
    <div className={`${className} card-ani`}>
      <Image
        fill
        src={image}
        alt={alt}
        sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
        className="cat-card_img"
      />

      <div className="cat-card_overlay" />

      <div className="cat-card_details">
        <span className="cat-card_label">{label}</span>
        <h3>{title}</h3>
        <p>{description}</p>

        <Link href={href} className="cat-card_link">
          <span>View all</span>
          <span className="cat-card_arrow">↗</span>
        </Link>
      </div>
    </div>
  );
}
