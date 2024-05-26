import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const WorkExperience = () => {
  return (
    <section className="container py-24 sm:py-32" id="experience">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        My
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          work experience
        </span>
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        {/* Technologies and tools that I use to create such awesome websites. */}
      </h3>

      <div className="flex flex-col gr gap-8">
        {workExperience.map((items) => (
          <Card key={items.id}>
            <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
              <Image
                src={items.thumbnail}
                alt={items.title}
                width={100}
                height={100}
                className="mt-1 bg-primary/20 p-1 rounded-2xl"
              />

              <div>
                <CardTitle>{items.title}</CardTitle>
                <CardDescription className="text-md mt-2">
                  {items.desc}
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;

const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/icon/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/icon/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/icon/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/icon/exp4.svg",
  },
];
