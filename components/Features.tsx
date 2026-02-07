"use client";
import { ArrowLeftLong, ArrowRightLong } from "@/icons";
import { cn } from "@/lib/utils";
import ParallaxImage from "./Parallaximage";
import {
  IconHealthRecognition,
  IconLeaf,
  IconSearch,
  IconTestPipe2,
} from "@tabler/icons-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "motion/react";

const Features = () => {
  const cardRef = useRef(null);
  const { scrollYProgress: cardTranslate } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const cardY = useTransform(cardTranslate, [0, 1], [150, -400]);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)"); // md breakpoint (tablet+)

    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsLargeScreen(e.matches);
    };

    // initial check
    handleChange(mediaQuery);

    // listener
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);
  const animationProps = isLargeScreen
    ? {
        transition: { duration: 1.5, ease: "easeOut" },
        style: {
          y: cardY,
        },
      }
    : {
        style: {},
      };
  const imageLeafref = useRef<HTMLDivElement>(null);
  const imageIngredientRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: translateY } = useScroll({
    target: imageLeafref,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: yImage } = useScroll({
    target: imageIngredientRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(translateY, [0, 1], [100, -300]);
  const translateImage = useTransform(yImage, [0, 1], [100, -300]);

  return (
    <div className="md:mt-14 lg:mt-20 h-full md:p-3 mt-10 w-full relative">
      <div className="md:mx-7.5 md:px-1 px-6">
        <div className="relative">
          <h2 className="md:text-[2.2rem] lg:text-[3rem] lg:leading-13 leading-12.5 text-[2.8rem] md:leading-10 text-neutral-700 uppercase font-bold">
            <div className="*:md:inline-block *:block">
              <div>clean,</div>
              <div>conscious,</div>
            </div>
            <div>performance</div>
            <div className="relative w-fit lg:text-[3.7rem] lg:mt-4 lg:ml-30 text-[3.1rem] mt-2 md:mt-0 font-editorial-light  font-medium  lowercase  after:content-['']  after:absolute after:left-0 after:-bottom-px after:w-full after:h-0.5 after:bg-neutral-500 md:absolute md:top-24 md:left-60 md:text-[2.9rem]">
              skincare.
            </div>
          </h2>
          <p className="md:text-[0.6rem] md:font-light md:text-neutral-400 lg:text-[0.7rem] max-w-[20rem] left-24 md:left-0 absolute md:static top-68 md:top-0  md:mt-4 w-full md:max-w-2xs text-balance md:leading-3.5">
            Unreservedly honest products that truly work, be kind to skin and
            the planet – no exceptions!
          </p>
          <ArrowLeftLong className="fill-neutral-900 absolute left-8 top-60 stroke-[0.1px] text-neutral-900 stroke-neutral-900 md:hidden" />
          <ArrowRightLong className="md:size-50 lg:size-90  lg:left-118 z-2 stroke-[0.1px] top-[0.1rem] hidden  md:inline-block absolute md:left-80  fill-neutral-900 text-neutral-900 stroke-neutral-900" />
        </div>
        <div className="mt-65 md:mt-10 lg:mt-20 ">
          <div className="relative mb-8 md:mb-0 md:size-118 lg:size-185 z-1 mx-auto w-full h-full mask-[url('/images/Ellipse1.png')] [-webkit-mask-image:url('/images/Ellipse1.png')] mask-no-repeat [-webkit-mask-repeat:no-repeat]  mask-center [-webkit-mask-position:center] mask-contain [-webkit-mask-size:contain]">
            <ParallaxImage src="/ingredients-clip.jpg" alt="girl" />
          </div>
          <div className="md:left-10 lg:left-5  flex  md:gap-4 justify-center md:justify-start gap-0 m-0 md:absolute w-full md:top-45 lg:top-60  z-2">
            <motion.div
              ref={cardRef}
              {...animationProps}
              className="md:mt-40 grow md:grow-0 border-b border-neutral-200 md:border-0"
            >
              <Card
                icon={
                  <IconSearch className="stroke-1 stroke-neutral-900 text-neutral-900" />
                }
                name="Clean, Beyond Reproach"
                details=" No black boxes, nothing to hide, we disclose
              our full formulas, so you will never have to guess what's in it and how much."
              />
            </motion.div>
            <motion.div
              ref={cardRef}
              {...animationProps}
              className="border-b grow md:grow-0 border-l border-neutral-200 md:border-0"
            >
              <Card
                icon={<IconLeaf className="stroke-1" />}
                name="Radical Transparency"
                details=" Truly clean with only verified ingredients; and free from over 
              1800 questionable ingredients. Because what you put on your skin matters."
              />
            </motion.div>
          </div>
          <div className="flex md:absolute md:top-100 right-2 lg:top-180 md:pr-10 z-1 md:gap-4 gap-0  md:justify-end w-full  ">
            <motion.div
              ref={cardRef}
              {...animationProps}
              className="md:mt-40 grow md:border-0 md:grow-0"
            >
              <Card
                icon={
                  <IconHealthRecognition className="stroke-1 stroke-neutral-900 text-neutral-900" />
                }
                name="Conscious & Responsible"
                details=" Peta Certified Vegan and Cruelty Free. Our products are always
                 housed in responsible packaging and made sustainably."
              />
            </motion.div>
            <motion.div
              ref={cardRef}
              {...animationProps}
              className="border-l grow md:grow-0 border-neutral-200 md:border-0"
            >
              <Card
                icon={<IconTestPipe2 className="stroke-1" />}
                name="Potent & Multi Tasking"
                details=" Our formulas are chock-a-block with actives, anti oxidants, 
                skin restoring agents backed by dermal science that aim to deliver real results."
              />
            </motion.div>
          </div>
        </div>
        <motion.div
          ref={imageLeafref}
          style={{ y: y }}
          className="hidden md:top-40 lg:top-125 md:right-32 lg:right-60 lg:size-40  z-3 md:flex md:absolute item-center justify-center md:size-30"
        >
          <Image
            src="/images/leaf.png"
            alt="leaf"
            width={900}
            height={900}
            className="object-cover aspect-video w-full h-full"
          />
        </motion.div>
        <motion.div
          ref={imageIngredientRef}
          style={{ y: translateImage }}
          className="hidden md:flex absolute md:left-50 md:bottom-5 z-3 lg:bottom-1 lg:left-60 items-center justify-center md:size-30 lg:size-40"
        >
          <Image
            src="/images/empress.png"
            alt="leaf"
            width={900}
            height={900}
            className="object-cover aspect-video w-full h-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Features;

const Card = ({
  className,
  icon,
  name,
  details,
}: {
  className?: string;
  icon: React.ReactNode;
  details: string;
  name: string;
}) => {
  return (
    <div
      className={cn(
        "bg-neutral-100 md:min-h-35 lg:pb-5 lg:pt-7.5 md:pt-6 pb-3 md:max-w-35  lg:max-w-49 flex items-center justify-center md:px-3 px-3 lg:px-6 rounded-none md:rounded-2xl min-h-40 lg:min-h-70",
        className
      )}
    >
      <div className="flex flex-col items-center gap-4 justify-center md:gap-3 lg:gap-5">
        <div className="rounded-full size-20 bg-white flex items-center justify-center md:size-12 lg:size-14">
          {icon}
        </div>
        <h2 className="text-center text-[0.8rem] leading-4 text-neutral-700 md:text-[0.8rem] max-w-30 text-balance lg:text-[0.9rem] font-bold">
          {name}
        </h2>
        <p className="max-w-[12.2rem] md:text-[0.5rem] lg:text-[0.65rem] text-center w-full text-[0.6rem] hidden sm:inline-block">
          {details}
        </p>
      </div>
    </div>
  );
};
