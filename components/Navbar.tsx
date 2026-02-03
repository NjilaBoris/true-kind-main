"use client";
import { LogoIcon } from "@/icons";
import {
  IconBrandDribbble,
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandTwitterFilled,
  IconShoppingBag,
  IconUser,
} from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

const items = [
  { title: "shop", href: "/shop" },
  { title: "philosophy", href: "/philosophy" },
  { title: "gallery", href: "/gallery" },
  { title: "journal", href: "/journal" },
];

const Navbar = () => {
  return (
    <div>
      <DesktopNav />
      <MobileNav />
    </div>
  );
};

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const socials = [
    {
      icon: <IconBrandFacebookFilled className="fill-neutral-700" />,
      href: "/",
    },
    {
      icon: <IconBrandInstagram className="stroke-neutral-700" />,
      href: "/",
    },
    {
      icon: <IconBrandTwitterFilled className="fill-neutral-700" />,
      href: "/",
    },
    {
      icon: <IconBrandDribbble className="stroke-neutral-700" />,
      href: "/",
    },
  ];
  return (
    <>
      <div className="w-full fixed flex max-w-100 items-center z-5 justify-between inset-x-0 -mt-5  mx-auto md:hidden">
        <div
          onClick={() => setOpen(!open)}
          className="inline-flex flex-col gap-2 justify-center cursor-pointer"
        >
          <div
            className={`
      w-10 h-0.5 
      transition-transform duration-300 ease-in-out
      ${open ? "rotate-45 translate-y-1.5 bg-dark-100" : "bg-white"}
    `}
          />
          <div
            className={`
            w-10 h-0.5 
            transition-transform duration-300 ease-in-out
            ${open ? "-rotate-45 -translate-y-1.5 bg-dark-100" : "bg-white"}
            `}
          />
        </div>
        <Link href="/" className="cursor-pointer block md:hidden">
          <LogoIcon
            className={`size-25  transition-colors duration-500 ${open ? "text-black" : "text-white"}`}
          />
        </Link>
        <IconShoppingBag
          className={`stroke-1 block md:hidden transition-colors duration-500  ${open ? "text-black" : "text-white"}`}
        />
      </div>
      <div
        className={`z-4 pl-3 w-screen flex flex-col gap-5 items-start justify-center  h-dvh transition-transform duration-300  bg-neutral-100 inset-0  absolute  md:hidden ${open ? "translate-x-0" : "-translate-x-120"}`}
      >
        <div className="flex h-fit flex-col  items-start gap-2 justify-center">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="uppercase text-[2.3rem]"
              onClick={() => setOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex flex-row items-center gap-2">
          {socials.map((item, index) => (
            <Social {...item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

const Social = ({ icon, href }: { icon: React.ReactNode; href: string }) => {
  return (
    <Link
      href={href}
      className="rounded-full flex items-center p-4 justify-center border border-neutral-400"
    >
      {icon}
    </Link>
  );
};

export default Navbar;

const DesktopNav = () => {
  return (
    <div className="w-full fixed flex  items-center justify-between inset-x-0   mx-auto md:max-w-180 -mt-2.5 lg:max-w-280 z-5">
      <Link href="/" className="cursor-pointer hidden md:block">
        <LogoIcon className="size-20 text-white" />
      </Link>
      <div className="md:flex hidden  items-center justify-center  gap-8 *:text-[7.5px] *:hover:cursor-pointer *:text-white *:font-medium">
        {items.map((item, index) => (
          <Link key={index} href={item.href} className="uppercase">
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex items-center rounded-full bg-white  justify-between md:px-3 md:py-1.5 gap-2.5 lg:px-[14.7px] lg:py-[11.2px]">
        <IconShoppingBag className="stroke-1 hidden md:block lg:size-5 stroke-neutral-900" />
        <div className="h-5 w-px bg-neutral-200 hidden md:block" />
        <IconUser className="stroke-1 lg:size-5 stroke-neutral-900 hidden md:block" />
      </div>
    </div>
  );
};
