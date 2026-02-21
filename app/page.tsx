import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-zinc-950">
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <CTA />
    </main>
  );
}
