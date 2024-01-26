import About from "@/components/main/About";
import Contact from "@/components/main/Contact";
import Footer from "@/components/main/Footer";
import HeroSection from "@/components/main/HeroSection";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <HeroSection />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
