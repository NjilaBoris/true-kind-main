"use client";
import { IconBrandInstagram } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const Connect = () => {
  const image1Ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: translateY } = useScroll({
    target: image1Ref,
    offset: ["start end", "end start"],
  });
  const image2Ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: image2Ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(translateY, [0, 1], [100, -100]);
  const yProgress = useTransform(scrollYProgress, [0, 1], [100, -200]);
  return (
    <section className="md:pt-30 pt-2 h-[120dvh] px-10 w-full">
      <div className="grid grid-cols-1 md:grid-cols-4  w-full h-full md:justify-center items-center">
        <div className="lg:w-[70%] md:w-[80%] hidden md:flex h-full  flex-col justify-between">
          <motion.div
            ref={image1Ref}
            style={{ y: y }}
            className="relative w-full  h-30"
          >
            <Image
              src="/girl3.avif"
              alt="girl"
              width={500}
              height={500}
              className="object-cover w-full  h-full aspect-square"
            />
          </motion.div>
          <p className="text-dark-200 md:max-w-40 text-[0.7rem] lg:max-w-60">
            Get the latest news about skincare tips and new products.
          </p>
        </div>
        <div className="relative col-span-2">
          <div className="lg:text-[2rem] text-[3.1rem]  leading-11 md:text-[1.2rem] md:leading-5 font-bold lg:leading-8  text-dark-200 text-center uppercase">
            <h2 className="z-5 absolute md:left-32 left-11 -top-10 lg:left-50 md:-top-4 lg:-top-[2.5rem]">
              connect <br /> with us
            </h2>
          </div>
          <div className="w-full h-120 md:h-130">
            <Image
              alt="girl"
              src="/girl6.avif"
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
            <div className="relative text-[4rem] leading-11 md:leading-5 md:text-[1.8rem] lg:text-[2.5rem] font-light lg:leading-8  text-dark-200 text-center">
              <h2 className="z-5 absolute -top-15 left-10 md:left-30 lg:left-56 md:-top-5 lg:-top-8 font-editorial-italic">
                on <br />
                instagram
              </h2>
            </div>
            <div className="md:max-w-40 max-w-70 flex items-center justify-center mx-auto ">
              <div className="flex overflow-hidden shadow-sm items-center w-full py-2 px-6 mx-auto border border-neutral-300  justify-between rounded-full mt-20">
                <Link
                  href="/"
                  className="underline uppercase text-[1.8rem] md:text-[0.8rem]"
                >
                  instagram
                </Link>
                <IconBrandInstagram className="stroke-dark-200 stroke-1 size-10 md:size-5" />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden ml-10 md:flex md:w-[70%] lg:w-[50%]  self-end">
          <motion.div
            ref={image2Ref}
            style={{ y: yProgress }}
            className="w-full h-40"
          >
            <Image
              width={600}
              height={600}
              alt="two_girls"
              src="/2girls.avif"
              className="w-full h-full aspect-square object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
