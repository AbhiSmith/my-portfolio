import { Connect } from "@/components/Connect";
import { Education } from "@/components/Education";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <main className="">
      <MaxWidthWrapper>
        <Hero />
        <Features />
        <Skills />
        <Education />
        <Connect />
      </MaxWidthWrapper>
    </main>
  );
}
