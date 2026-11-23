import ProductHead from "./ProductHead";
import NewArrivalsProducts from "./NewArrivalsProducts";

export default function NewArrivals() {
  return (
    <section className="products" id="shop">
      <ProductHead />
      <NewArrivalsProducts />
    </section>
  );
}
