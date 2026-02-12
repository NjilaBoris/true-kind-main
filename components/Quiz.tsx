"use client";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import MagneticButton from "./MagneticAnimation";
import ParallaxImage from "./Parallaximage";
import { RightLongIcon } from "@/icons";
import { IconArrowNarrowUp } from "@tabler/icons-react";
import TextReveal from "./TextRevealAnimation";
import { motion } from "motion/react";

const Quiz = () => {
  return (
    <section className="flex h-full mt-10 md:mt-0 flex-col-reverse md:flex-row  w-full  items-center">
      <div className="flex items-center justify-center w-full md:h-full">
        <div className="flex flex-col pb-5 md:py-0 justify-center px-1 md:px-4 my-auto relative">
          <RightLongIcon className="absolute size-124 -rotate-1 -translate-x-45 -translate-y-50 -z-1" />
          <motion.div
            initial={{
              clipPath: "inset(100% 0 0 0)",
            }}
            whileInView={{
              clipPath: "inset(0 0 0 0)",
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="size-60 md:size-40 relative mt-8 md:pt-0"
          >
            <Image
              alt="serup"
              className="w-full h-full object-cover aspect-square absolute inset-0"
              src="/serup.jpg"
              height={300}
              width={300}
            />
          </motion.div>
          <div className="mt-15 md:space-y-3.5 space-y-4">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="uppercase text-[1.2rem] px-5 py-4  border-neutral-400 leading-0 md:px-4 md:py-2 inline-block md:text-[0.5rem] rounded-full border"
            >
              quality
            </motion.h2>

            <TextReveal>
              <p className="md:max-w-70 md:leading-8 text-[1.8rem] leading-8 max-w-80">
                Only proven ingredients, quality over quantity always!
              </p>
            </TextReveal>
            <TextReveal>
              <p className="md:text-[0.6rem] md:max-w-70 text-[1rem] md:leading-3 max-w-90 leading-5 opacity-70">
                Its about what we don’t put in. Squeaky clean formulas with over
                1500 Negative Ingredients.
              </p>
            </TextReveal>
          </div>
        </div>
      </div>
      <div className="w-full h-dvh  relative overflow-hidden">
        <div className="absolute inset-0 -z-2 h-full w-full">
          <ParallaxImage alt="offer" src="/offer.jpg" />
        </div>
        <div className="mt-10 h-full w-full lg:pl-10 md:px-5 lg:pr-20 px-2">
          <TextReveal>
            <h1 className="lg:text-[2rem] text-[2.4rem] leading-9 text-dark-300 md:text-[2.2rem] md:leading-8 lg:leading-8 uppercase md:text-dark-200 font-bold">
              <div>exciting</div>
              <div className="inline-block mr-3">offers</div>
              <div className="inline-block lowercase font-editorial-italic font-light">
                awaits
              </div>
            </h1>
          </TextReveal>
          <div className="flex  flex-col pt-5 md:pt-0 md:flex-row items-center justify-between">
            <TextReveal>
              <p className="lg:max-w-[18rem] opacity-90 text-[1rem]  md:max-w-60 md:opacity-80 md:text-[0.6rem] lg:text-[0.7rem] lg:leading-3 lg:opacity-50">
                Shop now to get a chance to win 2 extra products. Grab the offer
                before it ends.
              </p>
            </TextReveal>
            <MagneticButton>
              <div className="relative self-end">
                <Button
                  className="size-18 md:size-12"
                  description="see all"
                  icon={
                    <IconArrowNarrowUp className="text-white stroke-1 size-10 md:size-7" />
                  }
                  firstIconClassName="translate-x-0 translate-y-full group-hover:translate-y-0"
                  secondIconClassName="translate-y-0 group-hover:translate-x-0  group-hover:-translate-y-full"
                />
              </div>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
