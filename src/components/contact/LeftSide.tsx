import { Mail, Phone, Store } from "lucide-react";
import WhatsAppIcon from "@/src/components/ui/WhatsAppIcon";

import "../../styles/components/contact/bodyLeft.css";

export default function LeftSide() {
  return (
    <section className="contact-body__left">
      <div className="contact-body__cards">
        <div className="contact-body__card">
          <Phone />
          <h3>Phone</h3>
          <h3>+93708760475</h3>
        </div>

        {/* WhatsApp card */}
        <div className="contact-body__card">
          <WhatsAppIcon size={28} color="#8c918e" />
          <h3>WhatsApp</h3>
          <h3>+93708760475</h3>
        </div>

        <div className="contact-body__card">
          <Mail />
          <h3>Email</h3>
          <h3>rashidaymaq1994@gmail.com</h3>
        </div>

        <div className="contact-body__card">
          <Store />
          <h3>Kabul</h3>
          <h3>Ansari Square, Kabul, Afghanistan.</h3>
        </div>
      </div>

      <div className="contact-us__map">
        <iframe
          src="https://maps.google.com/maps?q=Kabul%2C%20Afghanistan&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="380"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Map of Kabul, Afghanistan"
        />
      </div>
    </section>
  );
}
