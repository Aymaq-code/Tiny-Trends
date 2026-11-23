import SectionHead from "../ui/SectionHead";
import CategoryBody from "./CategoryBody";
import CategoryFooter from "./CategoryFooter";
import "../../styles/components/app/categories.css";

export default function CategoryShop() {
  return (
    <section className="category-shop">
      <SectionHead
        eyebrow="FIND THEIR FAVORITE"
        title1="Shop by"
        title2="Categories"
        text="Little styles, big personalities. Find something they'll love."
      />
      <CategoryBody />
      <CategoryFooter />
    </section>
  );
}
