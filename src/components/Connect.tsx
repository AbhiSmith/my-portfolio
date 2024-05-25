"use client";
import { Button } from "./ui/button";
import { Copy, Github, Globe, Linkedin, Twitter } from "lucide-react";

import { Input } from "./ui/input";

export const Connect = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Subscribed!");
  };

  return (
    <section id="connect">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          Let&apos;s{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            connect
          </span>
        </h3>
        <form
          onSubmit={handleSubmit}
          className="flex flex-row w-[350px] justify-center items-center  mx-auto my-4 gap-4"
        >
          <Input value="abhishekv4004@gmail.com" className=" " />
          <Button variant="outline" size="icon">
            <Copy className=" w-4 h-4" />
          </Button>
        </form>

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
            href="https://github.com/AbhiSmith"
            target="_blank"
            className="border-2 rounded-full p-2"
          >
            <Linkedin className=" w-8 h-8" />
          </a>
          <a
            rel="noreferrer noopener"
            href="https://github.com/AbhiSmith"
            target="_blank"
            className="border-2 rounded-full p-2"
          >
            <Twitter className=" w-8 h-8" />
          </a>
          <a
            rel="noreferrer noopener"
            href="https://github.com/AbhiSmith"
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
