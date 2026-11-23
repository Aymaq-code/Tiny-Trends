import Hero from "../components/app/Hero";
import Sponsors from "../components/app/Sponsors";
import NextSeason from "../components/app/NextSeason";
import CategoryShop from "../components/app/CategoryShop";
import ClientSay from "../components/app/ClientSay";

import "../styles/app/home.css";
import QueryProvider from "../providers/QueryProvider";
import NewArrivals from "../components/app/NewArrivals";

export default function Home() {
  return (
    <section className="home">
      <Hero />
      <Sponsors />
      <NextSeason />
      <QueryProvider>
        <NewArrivals />
      </QueryProvider>
      <CategoryShop />
      <ClientSay />
    </section>
  );
}
