import RunwayLookbook from "@/src/components/new-arrivals/RunwayLookbook";
import { looks } from "@/src/libs/content";
import NewArrivals from "@/src/components/app/NewArrivals";
import QueryProvider from "@/src/providers/QueryProvider";
import "../../styles/components/ui/use-runway-scroll.css";

export default function NewArrivalsPage() {
  return (
    <main className="new-arrivals-page">
      <RunwayLookbook firstNumber={1} loop={false} looks={looks} />

      <div className="new-arrivals-page__section">
        <QueryProvider>
          <NewArrivals />
        </QueryProvider>
      </div>
    </main>
  );
}
