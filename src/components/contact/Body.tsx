import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import "../../styles/components/contact/body.css";

export default function Body() {
  return (
    <div className="contact-us__body">
      <LeftSide />
      <RightSide />
    </div>
  );
}
