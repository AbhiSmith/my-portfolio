import { TechStack } from "./TechStack";

export const About = () => {
  return (
    <section className="container ">
      <div className="bg-muted/100 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src="/assets/pilot.png"
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Me
              </h2>
              <div className="text-muted-foreground flex gap-2">
                <span>Abhishek singh</span>
                <span>Contact: abhishekv4004@gmail.com</span>
                <span>Role: Full-Stack Developer</span>
                <span>Location: Hyderabad</span>
              </div>
              <p className="text-lg text-muted-foreground mt-4">
                I have the privilege of assisting business owners and busy web
                developers in crafting captivating websites that truly reflect
                their vision and hold the attention of visitors for extended
                periods. By leveraging a harmonious blend of cutting-edge
                technologies and tools, I ensure the development of compelling
                online experiences. Below is a curated list of the tools and
                technologies I specialize in
              </p>
            </div>

            <TechStack />
          </div>
        </div>
      </div>
    </section>
  );
};
