import { Connect } from "@/components/Connect";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <main className="">
      <MaxWidthWrapper>
        <Hero />
        <Projects />
        <Skills />
        <WorkExperience />
        <Education />
        <Connect />
      </MaxWidthWrapper>
    </main>
  );
}
