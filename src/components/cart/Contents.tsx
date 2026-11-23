import CartRighSide from "./CartRighSide";
import CartLeftSide from "./CartLeftSide";

export default function Contents() {
  return (
    <div className="cartContents">
      {/* Cart Products */}
      <CartRighSide />

      {/* Checkout Sidebar */}
      <CartLeftSide />
    </div>
  );
}
