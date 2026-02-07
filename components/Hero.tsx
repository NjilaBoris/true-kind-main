import { ArrowRightIcon } from "@/icons";
import React from "react";
import Button from "./Button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="h-dvh w-full relative overflow-hidden ">
      <div className="absolute inset-0 h-dvh  w-full  -z-1">
        <video
          className="h-full w-full object-cover"
          muted
          loop
          playsInline
          autoPlay
          src="/TrueKind.mp4"
        />
      </div>
      <div className="w-full px-1 h-full max-w-2xl mx-auto flex flex-col items-center">
        <div className="text-center w-full *:text-white my-auto lg:-translate-y-8">
          <h1 className="text-[3.2rem]  leading-11.25 md:text-[71px] md:leading-15 font-bold">
            <span className="font-editorial-italic font-normal">True</span> to
            Oneself
            <br />
            kind to{" "}
            <span className="font-editorial-italic font-normal">Nature</span>
          </h1>
          <p className="md:max-w-[16rem] max-w-92 mt-6 leading-4.5 md:leading-3 md:text-[0.7rem] mx-auto md:mt-5">
            Unreservedly honest products that truly work, be kind to skin and
            the planet – no exceptions!
          </p>
        </div>

        <div className="w-full p-2 mb-6  sm:max-w-100 bg-neutral-200 md:max-w-150 flex items-center hover:cursor-pointer group justify-between  md:p-1.5 rounded-full md:mb-8">
          <Link
            href="/"
            className="uppercase md:text-[0.6rem] text-sm underline mx-auto"
          >
            explore all products
          </Link>
          <div className="group-hover:scale-[1.1] transition duration-300 ease-out">
            <Button className="max-sm:size-14" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
