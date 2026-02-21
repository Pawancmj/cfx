import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-zinc-950">
      <Hero />
      <Testimonials />
      <CTA />
    </main>
  );
}
