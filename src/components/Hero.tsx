import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
// import "./Hero.css";

export const Hero = () => {
  return (
    <section className="container grid  place-items-center py-20 md:py-32 gap-10">
      {/* lg:grid-cols-2 */}
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="block text-base whitespace-pre-wrap font-mono">
              Hey, I&apos;m
            </span>
            <span className="block bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text  whitespace-pre-wrap">
              Abhishek Singh
            </span>{" "}
            a
          </h1>{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              full-stack
            </span>{" "}
            developers
          </h2>
        </main>

        {/* <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Full-stack developer passionate about crafting elegant solutions with
          HTML, CSS, JavaScript, React.js, Next.js, Node.js, and MongoDB.
          Continuous learner and avid explorer.
        </p> */}

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">About me</Button>

          <a
            rel="noreferrer noopener"
            href="https://github.com/AbhiSmith"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Github Repository
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      {/* <div className="z-10">
        <HeroCards />
      </div> */}

      {/* Shadow effect */}
      {/* <div className="shadow w-[350px] "></div> */}
    </section>
  );
};
