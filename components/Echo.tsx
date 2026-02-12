"use client";
import { IconDroplet, IconTestPipe } from "@tabler/icons-react";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Button from "./Button";
import MagneticButton from "./MagneticAnimation";
import TextReveal from "./TextRevealAnimation";

const Echo = () => {
  const textureRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: translateY } = useScroll({
    target: textureRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(translateY, [0, 1], [100, -500]);
  return (
    <section className="lg:pt-40 lg:pb-50 md:bg-neutral-100 md:pb-20 pt-40">
      <div className="h-full w-full px-5 md:px-10">
        <span className="uppercase inline-block leading-0 mb-5  rounded-full px-6 py-4 border border-neutral-300 text-[.9rem] text-dark-200 md:hidden">
          ETHOS
        </span>
        <div className="text-left md:text-center ">
          <TextReveal>
            <h2 className="uppercase md:text-[4.5rem] md:leading-18 hidden md:block lg:leading-26 font-bold text-dark-200  lg:text-[7rem]">
              <div
                className={
                  "md:before:content-['ETHOS'] md:before:top-8.5 md:before:text-[0.6rem] md:before:px-6  md:before:left-10 md:before:h-6 md:before:rounded-full lg:before:h-6 lg:before:leading-0 lg:before:rounded-full md:before:flex md:before:justify-center md:before:absolute md:before:items-center  md:before:border-dark-200 lg:before:px-8 md:before:border lg:before:left-40 relative lg:before:bottom-5 md:before:opacity-60   lg:before:text-[0.7rem]"
                }
              >
                radical
              </div>
              <div>transparency.</div>
            </h2>
          </TextReveal>
          <TextReveal>
            <h2 className="uppercase text-[4.5rem] leading-16 text-left md:text-center md:text-[4.5rem] md:leading-18  font-bold text-dark-200 lg:leading-26  lg:text-[7rem]">
              <div className="text-left md:text-center md:mx-auto w-fit">
                <div className="font-editorial-italic font-medium">hide</div>
                <div className="lg:translate-x-30 md:translate-x-20">
                  nothing.
                </div>
              </div>
            </h2>
          </TextReveal>
        </div>

        <MagneticButton>
          <div className="hidden relative md:inline-flex items-center justify-center md:-top-35 md:left-20 lg:-top-48 lg:left-48">
            <Button
              className="size-11"
              description="our philosophy"
              firstIconClassName="*:size-5 stroke-1"
              secondIconClassName="*:size-5 stroke-1"
            />
          </div>
        </MagneticButton>

        <motion.div
          style={{ y: y }}
          ref={textureRef}
          transition={{
            duration: 1,
            ease: "easeIn",
          }}
          className="relative md:absolute lg:w-90 lg:translate-x-20 mx-auto md:mx-0 w-70 mt-8 md:mt-0 md:w-75 md:-translate-y-30"
        >
          <Image
            alt="texture"
            src="/images/texture.png"
            width={600}
            height={600}
          />
        </motion.div>
        <div className="w-full h-full flex flex-col mt-5 gap-2 md:mt-8">
          <div className="flex justify-center items-center">
            <div className="min-w-2/5 hidden md:block" />
            <Description
              icon={<IconTestPipe />}
              heading1="100% Transparent"
              heading2="Formulas"
              secondDescription="We formulate to the highest standards of efficacyand safety – using
            only proven, verifiedingredients in bio-compatible bases; and
            freefrom over 1800 questionable ingredients"
              firstDescription="Highest Standard"
            />
          </div>
          <div className="flex items-center justify-center md:mt-0 mt-8 md:ml-5.5">
            <div className="min-w-[40%] hidden md:block" />
            <Description
              icon={<IconDroplet />}
              heading1="Only Verified"
              heading2="Ingredients"
              firstDescription="Real Results."
              secondDescription="Skin care packed with anti oxidants, skinreplenishing and skin restoring agents instable pH levels that don’t promise miracles,but deliver real results."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Echo;
const Description = ({
  icon,
  heading1,
  heading2,
  firstDescription,
  secondDescription,
}: {
  icon: React.ReactNode;
  heading2: string;
  heading1: string;
  firstDescription: string;
  secondDescription: string;
}) => {
  return (
    <div className=" w-full h-full gap-5 justify-center flex flex-row  items-center">
      <div className="*:stroke-1 md:*:size-12 *:stroke-neutral-400 *:size-15">
        {icon}
      </div>
      <div className="flex flex-col gap-10 md:flex-row items-center justify-center">
        <h3 className="self-start  text-dark-200 text-left text-[2.2rem] leading-9 h-full font-medium md:leading-3 font-editorial-regular md:text-[0.7rem]">
          {heading1} <br /> {heading2}
        </h3>
        <p className="md:text-[0.6rem]  text-[1.3rem]  text-pretty text-left  md:max-w-52">
          {firstDescription} <br />
          <span className="opacity-50">{secondDescription}</span>
        </p>
      </div>
    </div>
  );
};
