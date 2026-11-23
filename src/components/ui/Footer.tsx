import FooterBottom from "./FooterBottom";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";
import "../../styles/components/ui/footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footerBody">
        <FooterLeft />
        <FooterRight />
      </div>
      <FooterBottom />
    </footer>
  );
}
