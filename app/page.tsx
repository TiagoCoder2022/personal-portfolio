import About from "@/components/main/About";
import Contact from "@/components/main/Contact";
import Footer from "@/components/main/Footer";
import HomeS from "@/components/main/Home";
import Projects from "@/components/main/Projects";
import Skills from "@/components/sub/Skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <HomeS />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
