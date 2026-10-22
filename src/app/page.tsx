import { About } from "@/components/About";
import { Book } from "@/components/Book";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Resume } from "@/components/Resume";

export default function Home() {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:rounded-lg focus:bg-gold-400 focus:px-4 focus:py-2 focus:text-[#14161c]"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Resume />
        <Book />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
