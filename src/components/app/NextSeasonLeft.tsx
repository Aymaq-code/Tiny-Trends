import Image from "next/image";
import IMAGE from "@/public/nextSeasonImg.webp";
import "../../styles/components/app/nextSeasonLeft.css";

export default function NextSeasonLeft() {
  return (
    <div className="next-season-left">
      <Image
        src={IMAGE}
        fill
        sizes="(max-width: 760px) 100vw, 50vw"
        alt="A cheerful collection of colorful kids' clothes and shoes"
      />

      <span className="sale-image-label">A little color goes a long way</span>
    </div>
  );
}
