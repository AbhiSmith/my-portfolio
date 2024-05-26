import Image from "next/image";

export const TechStack = () => {
  interface statsProps {
    name: string;
    logo: string;
  }

  const stats: statsProps[] = [
    {
      name: "Next.js",
      logo: "/tech-logo/next-js.svg",
    },
    {
      name: "React",
      logo: "/tech-logo/react.svg",
    },
    {
      name: "Node.js",
      logo: "/tech-logo/node-js.svg",
    },
    {
      name: "Express",
      logo: "/tech-logo/express.svg",
    },
    {
      name: "MongoDB",
      logo: "/tech-logo/mongodb.svg",
    },
    {
      name: "Django",
      logo: "/tech-logo/django.svg",
    },
    {
      name: "Tailwind CSS",
      logo: "/tech-logo/tailwind.svg",
    },
    {
      name: "Git & gitHub",
      logo: "/tech-logo/github.svg",
    },
    // {
    //   name: "Chrome DevTools",
    //   logo: "/tech-logo/aws.svg",
    // },
    {
      name: "AWS",
      logo: "/tech-logo/aws.svg",
    },
    {
      name: "Docker",
      logo: "/tech-logo/docker.svg",
    },
    {
      name: "Kubernetes",
      logo: "/tech-logo/kubernetes.svg",
    },
    {
      name: "Redis",
      logo: "/tech-logo/redis.svg",
    },
  ];

  return (
    <section id="statistics">
      <div className="grid grid-cols-4 lg:grid-cols-6 gap-2">
        {stats.map(({ name, logo }: statsProps) => (
          <div
            key={logo}
            className="space-y-2 text-center justify-center items-center flex flex-col"
          >
            {/* <p className="text-lg text-muted-foreground">{logo}</p> */}
            <Image src={logo} alt={name} width={40} height={40} />
            <h2 className="text-xs sm:text-xm font-bold ">{name}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};
