import Link from "next/link";
import SectionHead from "../ui/SectionHead";
import "@/src/styles/components/app/products.css";

export default function ProductHead() {
  return (
    <div className="head">
      <div className=" tl al">
        <SectionHead
          eyebrow="Fresh from the playroom"
          title1="Little"
          title2="Favorites"
          text="The pieces they`ll reach for on repeat."
        />
      </div>

      <div className="head_left">
        <Link href="/shop">
          Explore the collection <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </div>
  );
}
