import "../../styles/components/ui/footerLeft.css";

export default function FooterLeft() {
  return (
    <div className="footerLeft">
      <p>
        Join our newsletter to stay up to date on the latest news and update.
      </p>

      <div className="footerLeft_subscribe">
        <input type="text" placeholder="Enter your email here" />
        <button className="loginLogoutBtn ">Subscribe</button>
      </div>
      <p>
        By subscribing you agree to our Privacy Policy and consent to receive
        update from us.
      </p>

      <div className="footerLeft_socail">
        <i className="ri-facebook-circle-line"></i>
        <i className="ri-instagram-line"></i>
        <i className="ri-linkedin-box-line"></i>
        <i className="ri-youtube-line"></i>
      </div>
    </div>
  );
}
