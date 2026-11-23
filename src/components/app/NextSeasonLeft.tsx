import Image from "next/image";
import "../../styles/components/app/nextSeasonLeft.css";

export default function NextSeasonLeft() {
  return (
    <div className="next-season-left">
      <Image
        src="/nextSeasonImg.png"
        fill
        sizes="(max-width: 760px) 100vw, 50vw"
        alt="A cheerful collection of colorful kids' clothes and shoes"
      />

      <span className="sale-image-label">A little color goes a long way</span>
    </div>
  );
}
