import NextSeasonLeft from "./NextSeasonLeft";
import NextSeasonRight from "./NextSeasonRight";
import "../../styles/components/app/nextSeason.css";

export default function NextSeason() {
  return (
    <section className="next-season" id="seasonal">
      <NextSeasonLeft />
      <NextSeasonRight />
    </section>
  );
}
