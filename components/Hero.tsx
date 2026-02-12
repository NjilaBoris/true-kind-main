"use client";

import Button from "./Button";
import Link from "next/link";
import TextReveal from "./TextRevealAnimation";
import Preloader from "@/components/Preloader/Preloader";

const Hero = () => {
  return (
    <>
      <Preloader />
      <div className="h-dvh w-full relative overflow-hidden ">
        <div className="absolute  inset-0 h-dvh  w-full  -z-1">
          <video
            className="h-full hero-video scale-0 w-full object-cover"
            muted
            loop
            playsInline
            autoPlay
            src="/TrueKind.mp4"
          />
        </div>
        <div className="w-full px-1 h-full max-w-2xl mx-auto flex flex-col items-center">
          <div className="text-center w-full *:text-white my-auto lg:-translate-y-8">
            <TextReveal animateOnScroll={false} delay={10}>
              <h1 className="text-[3.2rem]  leading-11.25 md:text-[71px] md:leading-15 font-bold">
                <span className="font-editorial-italic font-normal">True</span>{" "}
                to Oneself
                <br />
                kind to{" "}
                <span className="font-editorial-italic font-normal">
                  Nature
                </span>
              </h1>
            </TextReveal>
            <TextReveal animateOnScroll={false} delay={11}>
              <p className="md:max-w-[16rem] max-w-92 mt-6 leading-4.5 md:leading-3 md:text-[0.7rem] mx-auto md:mt-5">
                Unreservedly honest products that truly work, be kind to skin
                and the planet – no exceptions!
              </p>
            </TextReveal>
          </div>

          <div className="w-full cta overflow-hidden  p-2 mb-6  sm:max-w-100 bg-neutral-200 md:max-w-150 flex items-center hover:cursor-pointer group justify-between  md:p-1.5 rounded-full md:mb-8">
            <Link
              href="/"
              className="uppercase cta-label md:text-[0.6rem] text-sm underline mx-auto"
            >
              explore all products
            </Link>
            <div className="group-hover:scale-[1.1] cta-icon scale-0 transition duration-300 ease-out">
              <Button className="max-sm:size-14" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
