"use client";
import { ArrowCurve } from "@/icons";
import React from "react";
import ParallaxImage from "./Parallaximage";
import Button from "./Button";
import { IconShoppingBag } from "@tabler/icons-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import TextReveal from "./TextRevealAnimation";
import { motion } from "motion/react";

const Explore = () => {
  const itemsFirst = [
    {
      type: "pure brilliance",
      icon: <IconShoppingBag />,
      description: "AHA Brightening Exfoliant  Cleanser/Face Wash",
      price: " ₹899 ",
      image: "/RedPerfume/1.avif",
    },
    {
      type: "pure brilliance",
      icon: <IconShoppingBag />,
      description: "Bio Exfoliant Brightening  Sleeping Mask",
      price: " ₹999 ",
      image: "/RedPerfume/2.avif",
    },
    {
      type: "Pure brilliance",
      icon: <IconShoppingBag />,
      image: "/RedPerfume/4.avif",
      description: "AHA Brightening Exfoliant Cleanser/Face Wash",
      price: " ₹799 ",
    },
  ];
  const itemsTwo = [
    {
      type: "varnaya blends",
      icon: <IconShoppingBag />,
      description: "AHA Brightening Exfoliant  Cleanser/Face Wash",
      price: " ₹899 ",
      image: "/BluePerfume/5.avif",
    },
    {
      type: "varnaya blends",
      icon: <IconShoppingBag />,
      description: "Bio Exfoliant Brightening  Sleeping Mask",
      image: "/BluePerfume/2.avif",
      price: " ₹999 ",
    },
    {
      type: "varnaya blends",
      icon: <IconShoppingBag />,
      image: "/BluePerfume/5.avif",
      description: "AHA Brightening Exfoliant Cleanser/Face Wash",
      price: " ₹799 ",
    },
  ];
  return (
    <section className="border-t mt-8 border-neutral-200 md:mt-32 md:pt-15 lg:pt-18">
      <div className="flex relative items-center justify-center pt-15 md:justify-between md:items-baseline-last md:pr-5 lg:pr-10">
        <div className="mx-auto w-full items-center justify-center inline-flex ">
          <TextReveal>
            <h1 className="md:text-[2.5rem] text-neutral-800 text-[3.5rem] leading-10 lg:text-[3rem] text-center font-semibold lg:leading-10 md:leading-8.5">
              <div className="uppercase text-[2.8rem] lg:text-[2.5rem] md:text-[2rem]">
                Explore
              </div>
              <div className="lowercase font-editorial-italic font-medium">
                pure potency
              </div>
            </h1>
          </TextReveal>
        </div>
        <ArrowCurve className="hidden md:inline-block" />
      </div>
      <div className="flex flex-col">
        <ExploreContainer
          parallaxImage="/explore1.jpg"
          item={itemsFirst}
          heading1="pure"
          heading2="brilliance"
          cardContainer="md:pr-1"
          headingClassName="md:pr-8"
        />
        <ExploreContainer
          parallaxImage="/explore2.jpg"
          containerClassName="md:mt-0 md:flex-row-reverse"
          cardContainer="lg:pl-5 lg:pr-50 md:pl-5  md:pr-25 md:-translate-x-25"
          item={itemsTwo}
          heading1="varnaya"
          heading2="blends"
          headingClassName="lg:translate-x-25 md:translate-x-18"
        />
      </div>
    </section>
  );
};

export default Explore;

const ExploreContainer = ({
  parallaxImage,
  headingClassName,
  item,
  heading1,
  heading2,
  containerClassName,
  cardContainer,
}: {
  parallaxImage: string;
  headingClassName?: string;
  containerClassName?: string;
  cardContainer?: string;
  heading1: string;
  heading2: string;
  item: {
    type: string;
    icon: React.ReactNode;
    image: string;
    description: string;
    price: string;
  }[];
}) => {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row md:grid-cols-2 w-full overflow-hidden md:mt-8",
        containerClassName
      )}
    >
      <div className="h-screen grow w-[40%] aspect-square  hidden md:block">
        <ParallaxImage src={parallaxImage} alt="girl" />
      </div>
      <div
        className={cn(
          "flex grow flex-col  pt-10 md:pt-0 max-h-120 my-auto md:pl-25 md:pr-10 lg:pl-50 lg:pr-20 justify-between h-full  w-full  overflow-hidden ",
          cardContainer
        )}
      >
        <div className="flex flex-col items-center mx-auto justify-center w-full ">
          <div
            className={cn(
              "flex items-baseline-last  pl-8 pr-8 md:pl-8 md:pr-0 mx-auto justify-between w-full",
              headingClassName
            )}
          >
            <TextReveal>
              <h1 className="capitalize text-[1.8rem] leading-8 lg:text-[2rem] md:text-[2.1rem] md:leading-9 text-left lg:leading-8">
                <div>{heading1}</div>
                <div className="font-editorial-italic">{heading2}</div>
              </h1>
            </TextReveal>
            <Button />
          </div>
          <div className="flex  mt-5  items-center w-full  h-full gap-3 ">
            {item.map((items, index) => {
              return <Card key={index} {...items} />;
            })}
          </div>
          <TextReveal>
            <p className="uppercase text-[0.5rem] max-w-48 pt-5 text-left -translate-x-5">
              stay glowing and healthy without having to think about it
            </p>
          </TextReveal>
        </div>
      </div>
    </div>
  );
};

const Card = ({
  index,
  type,
  icon,
  image,
  description,
  price,
}: {
  index: number;
  type: string;
  icon: React.ReactNode;
  image: string;
  description: string;
  price: string;
}) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.1 + 1 * index }}
      viewport={{
        once: true,
      }}
      className="rounded-2xl overflow-hidden relative px-2 pb-2 shrink-0 pt-2 w-[50%] md:w-[40%] h-65"
    >
      <div className="absolute inset-0 -z-1">
        <Image
          src={image}
          alt="perfume"
          width={400}
          height={400}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col h-full w-full justify-between">
        <div className="w-full flex items-center justify-between">
          <div className="rounded-full uppercase p-1 bg-white">
            <h3 className="text-[0.4rem]">{type}</h3>
          </div>
          <div className="rounded-full *:stroke-1 *:size-3.5 bg-white size-6 flex items-center justify-center">
            {icon}
          </div>
        </div>
        <div className="items-baseline-last flex justify-between">
          <p className="text-[0.5rem] max-w-26 text-balance">{description}</p>
          <p className="text-[0.6rem]">{price}</p>
        </div>
      </div>
    </motion.div>
  );
};
