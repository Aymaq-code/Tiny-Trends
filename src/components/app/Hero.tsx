import LeftSide from "./LeftSide";
import LiveFlowers from "./LiveFlowers";
import RightSide from "./RightSide";
import "../../styles/components/app/hero.css";

export default function Hero() {
  return (
    <section className="hero" aria-label="Welcome">
      <LiveFlowers />
      <LeftSide />
      <RightSide />
    </section>
  );
}
