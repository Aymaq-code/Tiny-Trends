import SectionHead from "../ui/SectionHead";
import "../../styles/components/contact/bodyRight.css";
import "../../styles/components/ui/buttons.css";

export default function RightSide() {
  return (
    <div className="contact-body__right">
      <div className="contact-body__head">
        <SectionHead
          eyebrow="lorem lorem lorem"
          title1="lorem lorem"
          title2="lorem"
          text="lorem lorem lorem lorem lorem lrem relm afds"
        />
      </div>

      <form>
        <div className="contact-form__group">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="your name?" />
        </div>

        <div className="contact-form__group">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="your email?" />
        </div>

        <div className="contact-form__group">
          <label htmlFor="subject">Subject</label>
          <input id="subject" type="text" placeholder="query type?" />
        </div>

        <div className="contact-form__group">
          <label htmlFor="query">Message</label>
          <textarea
            id="query"
            name="query"
            placeholder="what is your query?"></textarea>
        </div>

        <button type="submit" className="contact-form__submit">
          Send
        </button>
      </form>
    </div>
  );
}
