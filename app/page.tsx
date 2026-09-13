import Hero from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { Resume } from "@/sections/Resume";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { QuoteBand } from "@/components/ui/QuoteBand";
import { quotes } from "@/data/lore";

export default function Home() {
  return (
    <main id="top" className="relative">
      <Hero />
      <About />
      <QuoteBand text={quotes[0].text} speaker={quotes[0].speaker} />
      <Skills />
      <Projects />
      <Resume />
      <QuoteBand text={quotes[1].text} speaker={quotes[1].speaker} />
      <Contact />
      <Footer />
    </main>
  );
}
