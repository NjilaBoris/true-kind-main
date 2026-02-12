import Image from "next/image";
import React from "react";
import Button from "./Button";
import MagneticButton from "./MagneticAnimation";
import TextReveal from "./TextRevealAnimation";
import { IconArrowNarrowUp } from "@tabler/icons-react";

const Journal = () => {
  return (
    <section className="lg:px-8 md:px-3  h-full w-full bg-black pt-8 md:pt-8 md:pb-18">
      <div className="text-white py-18 px-6 md:hidden md:leading-10 leading-14 w-full h-full text-center lg:leading-10">
        <h3 className="lg:text-[2.8rem] text-[4.2rem] md:text-[2.9rem] font-editorial-italic">
          clean
        </h3>

        <h3 className="lg:text-[2.5rem] md:text-[2.3rem] font-bold text-[3.5rem] uppercase">
          journal
        </h3>

        <p className="lg:text-[0.7rem] text-[1.2rem] leading-6 md:text-[0.7rem] md:leading-4 md:max-w-65 lg:max-w-60 lg:leading-4 mx-auto">
          Healty tips on skincare, regimen and overall a better lifestyle.
        </p>
      </div>
      <div className="flex items-center px-5 md:px-0 gap-3 md:gap-5 h-full w-full flex-col md:flex-row">
        <div className="relative lg:h-120 w-full bg-white overflow-hidden flex flex-col">
          <div className="w-full h-90 md:h-72 overflow-hidden">
            <Image
              width={800}
              height={800}
              src="/powder1.avif"
              alt="powder"
              className="w-full h-full object-fill"
            />
          </div>
          <div className="bg-white px-5 py-5">
            <div className="flex flex-col gap-3">
              <h3 className="lg:text-[1.3rem] leading-8 font-medium text-[2rem] text-dark-300 lg:max-w-lg md:text-[0.8rem] md:leading-4 md:max-w-[20rem] lg:leading-6 w-full">
                Beauty Secrets from Around the World: Rituals and Ingredients
                You Need to Try
              </h3>
              <p className="lg:text-[0.6rem] text-[0.9rem] leading-4 text-dark-200 md:text-[0.58rem]   md:max-w-md">
                Drawing from our rich ayurvedic legacy of over 30 years and
                embracing dermal science, we aim to create transparent skincare
                that is incredibly effective, safe and without harming the
                environment or the planet.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-[0.7rem] opacity-85">6 Feb 2025</span>
                <span className="underline text-[0.7rem] opacity-85">
                  Read more
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full lg:pl-5  lg:pt-8 justify-between  flex items-center flex-col ">
          <div className="text-white hidden md:leading-10 md:block w-full h-full text-center lg:leading-10">
            <TextReveal>
              <h3 className="lg:text-[2.8rem] md:text-[2.9rem] font-editorial-italic">
                clean
              </h3>
            </TextReveal>
            <TextReveal delay={0.2}>
              <h3 className="lg:text-[2.5rem] md:text-[2.3rem] uppercase">
                journal
              </h3>
            </TextReveal>
            <TextReveal>
              <p className="lg:text-[0.7rem] md:text-[0.7rem] md:leading-4 md:max-w-65 lg:max-w-60 lg:leading-4 mx-auto">
                Healty tips on skincare, regimen and overall a better lifestyle.
              </p>
            </TextReveal>
          </div>
          <div className="flex lg:mt-5 md:mt-6 flex-col md:flex-row gap-3 w-full h-full">
            <Card
              date="20 Dec 2025"
              description="Your Skincare and Makeup Routine Impacts Your Well-Being"
              image="/powder2.avif"
            />
            <Card
              date="25 Jan 2025"
              description="How to Make Your Routine More Eco-Friendly"
              image="/facepowder.avif"
            />
          </div>
          <MagneticButton>
            <div className="relative self-center mt-5">
              <Button
                className="size-16 md:size-11 lg:size-14 group-hover:bg-white"
                description="see all"
                icon={
                  <IconArrowNarrowUp className="text-white group-hover:text-black size-10 stroke-1 md:size-8 lg:size-11" />
                }
                descriptionClassName="text-white"
                firstIconClassName="translate-x-0 translate-y-full group-hover:translate-y-0"
                secondIconClassName="translate-y-0 group-hover:translate-x-0  group-hover:-translate-y-full"
              />
            </div>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
};

export default Journal;

const Card = ({
  image,
  date,
  description,
}: {
  image: string;
  date: string;
  description: string;
}) => {
  return (
    <div className="w-full md:h-57 lg:h-70 overflow-hidden bg-white">
      <div className="w-full md:h-30 lg:h-40 relative overflow-hidden group cursor-pointer transition duration-200">
        <Image
          alt="powder"
          src={image}
          width={600}
          height={600}
          className="group-hover:scale-102 scale-110 object-center h-full w-full"
        />
      </div>
      <div className="bg-white px-5 lg:px-5 md:px-2 py-6">
        <div className="flex flex-col gap-5 justify-between">
          <h3 className="lg:text-[0.8rem] lg:max-w-60 md:text-[0.6rem] md:max-w-50">
            {description}
          </h3>
          <div className="flex items-center justify-between">
            <span className="lg:text-[0.7rem] md:text-[0.6rem]">{date}</span>
            <span className="underline lg:text-[0.65rem] md:text-[0.6rem]">
              Read more
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
