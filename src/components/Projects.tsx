import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import ProjectTech from "./ProjectTech-icon";
import Link from "next/link";
// import image from "../assets/growth.png";
// import image3 from "../assets/reflecting.png";
// import image4 from "../assets/looking-ahead.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Responsive Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: "/assets/looking-ahead.png",
  },
  {
    title: "Intuitive user interface",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: "/assets/reflecting.png",
  },
  {
    title: "AI-Powered insights",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: "/assets/growth.png",
  },
];

const featureList: string[] = [
  "Dark/Light theme",
  "Reviews",
  "Features",
  "Pricing",
  "Contact form",
  "Our team",
  "Responsive design",
  "Newsletter",
  "Minimalist",
];

export const Projects = () => {
  return (
    <section id="Work" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        A small selection of{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          recent projects
        </span>
      </h2>

      {/* <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div> */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((items) => (
          <Card key={items.id}>
            <CardHeader>
              <img
                src={items.img}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
              <CardTitle className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {items.title}
              </CardTitle>
            </CardHeader>

            <CardContent>{items.des}</CardContent>
            <CardFooter className="flex flex-col gap-2">
              {/* <ProjectTech />
              <Button>
                Check Live Site <ExternalLink className="ms-3" />
              </Button> */}
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {items.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <Link
                    href={items.link}
                    className="flex lg:text-xl md:text-xs text-sm text-purple"
                  >
                    {/* Check Live Site */}
                    <ExternalLink className="ms-3 text-green-600" />
                  </Link>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

const projects = [
  {
    id: 1,
    title: "Transform your images with ease: resize, crop, adjust colors",
    des: "Transform your images with ease: resize, crop, adjust colors, and apply premium presets for stunning visuals.",
    img: "/icon/iedito.png",
    iconLists: [
      "/icon/next.svg",
      "/icon/tail.svg",
      "/icon/ts.svg",
      "/icon/three.svg",
      "/icon/fm.svg",
    ],
    link: "https://www.iedito.com/",
  },
  {
    id: 2,
    title: "Create a Dynamic Event Booking Web App with Next.js 14",
    des: "Develop an Event Management Web App like Eventbrite or Meetup with authentication, event management, search, filtering, categories, checkout, and secure payments. ",
    img: "/icon/evently.png",
    iconLists: [
      "/icon/next.svg",
      "/icon/tail.svg",
      "/icon/ts.svg",
      "/icon/three.svg",
      "/icon/fm.svg",
    ],
    link: "https://event-booking-platform.vercel.app/",
  },
  {
    id: 3,
    title: "Url Shortner",
    des: "Create custom URL shortening services with Next.js powered frontend, Drizzle ORM for seamless database interactions, and Neon DB for efficient data management.",
    img: "/icon/tiney.png",
    iconLists: [
      "/icon/next.svg",
      "/icon/tail.svg",
      "/icon/ts.svg",
      "/icon/stream.svg",
      "/icon/c.svg",
    ],
    link: "https://tiny-url-liard.vercel.app/",
  },
  {
    id: 4,
    title: "AI Image SaaS Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/icon/ai-saas.png",
    iconLists: [
      "/icon/re.svg",
      "/icon/tail.svg",
      "/icon/ts.svg",
      "/icon/three.svg",
      "/icon/c.svg",
    ],
    link: "https://ai-image-editor-six.vercel.app/",
  },
  {
    id: 5,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/icon/p4.svg",
    iconLists: [
      "/icon/next.svg",
      "/icon/tail.svg",
      "/icon/ts.svg",
      "/icon/three.svg",
      "/icon/gsap.svg",
    ],
    link: "https://github.com/AbhiSmith/project-iPhone-webApp",
  },
];
