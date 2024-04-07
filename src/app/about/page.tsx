'use client';

import { HoverEffect } from "../../components/ui/card-hover-effect";

export function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-8 pt-28">
      <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl flex flex-col items-center justify-center">About Us!</h1>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Dhruv Bansal",
    description:
      "Sophomore at ASU majoring in Computer Science",
    link: "https://stripe.com",
  },
  {
    title: "Kanav Gupta",
    description:
      "Sophomore at ASU majoring in Computer Science",
    link: "https://netflix.com",
  },
  {
    title: "Shreyas Bachiraju",
    description:
      "Sophomore at ASU majoring in Informatics",
    link: "https://google.com",
  },
  {
    title: "Twanda Vera",
    description:
      "Graduate student at ASU majoring in Global Business",
    link: "https://meta.com",
  },
  
  {
    title: "Vansh Gupta",
    description:
      "Sophomore at ASU majoring in Computer Science",
    link: "https://microsoft.com",
  },
];
export default AboutPage;