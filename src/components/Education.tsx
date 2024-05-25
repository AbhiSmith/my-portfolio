import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
// import cubeLeg from "../assets/cube-leg.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Master of Science in Computer Engineering (2021 – 2023)",
    description:
      "Graduated from the University of Florida in December 2015 through UF’s Combined BS/MS program.",
    icon: <ChartIcon />,
  },
  {
    title: "Bachelor of Science in Computer Engineering (20117 – 2020)",
    description:
      "Graduated Cum Laude from the University of Florida in December 2014.",
    icon: <WalletIcon />,
  },
];

export const Education = () => {
  return (
    <section className="container py-24 sm:py-32" id="education">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Education
            </span>
          </h2>

          {/* <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            dolor.
          </p> */}

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        /> */}
      </div>
    </section>
  );
};
