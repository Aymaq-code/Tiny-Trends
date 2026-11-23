import Hero from "@/src/components/about/Hero";
import Stats from "@/src/components/about/Stats";
import Story from "@/src/components/about/Story";
import Values from "@/src/components/about/Values";
import "@/src/styles/about/about.css";

export default function About() {
  return (
    <main className="about-page">
      <Hero />
      <Stats />
      <Story />
      <Values />
    </main>
  );
}
