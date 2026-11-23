import CartCard from "./CartCard";
import CartHead from "./CartHead";
import CartFooter from "./CartFooter";

export default function CartRightSide() {
  return (
    <div className="cartRightSide">
      <CartHead />

      <CartCard />

      <CartFooter />
    </div>
  );
}
