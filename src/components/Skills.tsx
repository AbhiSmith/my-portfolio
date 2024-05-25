import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
// import { SiJavascript } from "react-icons/si";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;

  benefitList: string[];
}

const skillslist: PricingProps[] = [
  {
    title: "Programming Languages",

    benefitList: ["JavaScript", "TypeScript", "Python", "Java"],
  },
  {
    title: "Technologies",

    benefitList: [
      "React",
      "Next.js",
      "Redux",
      "Node.js",
      "Express.js",
      "Django",
    ],
  },
  {
    title: "Database:",

    benefitList: ["PostgreSql", "Mongodb"],
  },
  {
    title: "Tools:",

    benefitList: [
      "Chrome DevTools",
      "GitHub",
      "GitHub Action",
      "AWS",
      "Docker",
      "Redis",
    ],
  },
];

export const Skills = () => {
  return (
    <section id="Skills" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Skills & Interests
        </span>
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Technologies and tools that I use to create such awesome websites.
      </h3>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skillslist.map((pricing: PricingProps) => (
          <Card key={pricing.title}>
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
              </CardTitle>
            </CardHeader>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span key={benefit} className="flex">
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
