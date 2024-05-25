import { Connect } from "@/components/Connect";
import { Education } from "@/components/Education";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Skills />
      <Education />
      <Connect />
    </>
  );
}
