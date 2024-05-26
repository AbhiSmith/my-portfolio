"use client";
import { Button } from "./ui/button";
import { Copy, Github, Globe, Linkedin, Twitter } from "lucide-react";

import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";

export const Connect = () => {
  const handleCopy = () => {
    const text = "abhishekv4004@gmail.com";
    navigator.clipboard.writeText(text);
    // setCopied(true);
  };

  return (
    <section id="connect">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold  ">
          Ready to take{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            your{" "}
          </span>
          digital presence to the next level?
        </h3>
        <p className=" md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <div className="flex flex-row w-[250px] justify-center items-center  mx-auto my-4 gap-4 border-2 py-1 rounded-lg ">
          <Label className=" ">Copy my email address</Label>
          <Button size="icon" onClick={handleCopy}>
            <Copy className=" w-4 h-4" />
          </Button>
        </div>

        <div className="flex flex-row w-[350px] justify-center items-center  mx-auto gap-4 ">
          <a
            rel="noreferrer noopener"
            href="https://github.com/AbhiSmith"
            target="_blank"
            className="border-2 rounded-full p-2"
          >
            <Github className=" w-8 h-8" />
          </a>
          <a
            rel="noreferrer noopener"
            href="https://www.linkedin.com/in/abhishek-singh-4b45672bb"
            target="_blank"
            className="border-2 rounded-full p-2"
          >
            <Linkedin className=" w-8 h-8" />
          </a>
          <a
            rel="noreferrer noopener"
            href="https://x.com/AbhishekS1ngh_"
            target="_blank"
            className="border-2 rounded-full p-2"
          >
            <Twitter className=" w-8 h-8" />
          </a>
          <a
            rel="noreferrer noopener"
            href="https://www.abhishekinfo.online"
            target="_blank"
            className="border-2 rounded-full p-2"
          >
            <Globe className=" w-8 h-8" />
          </a>
        </div>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
