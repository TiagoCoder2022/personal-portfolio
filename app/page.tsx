import Hero from "@/components/main/Hero";
import Skillsss from "@/components/main/Skillsss";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skillsss />
      </div>
    </main>
  );
}
