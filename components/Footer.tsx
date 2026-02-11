import React from "react";
import ParallaxImage from "./Parallaximage";
import Link from "next/link";

const Footer = () => {
  const explore = [
    { title: "shop", href: "/shop" },
    { title: "philosophy", href: "/philosophy" },
    { title: "gallery", href: "/gallery" },
    { title: "journal", href: "/journal" },
  ];
  const social = [
    { title: "instagram", href: "/" },
    { title: "facebook", href: "/" },
  ];
  const contact = [
    { title: "651203648", href: "/" },
    { title: "nbdev@gmail.com", href: "/" },
  ];
  return (
    <section className="h-full flex flex-col w-full overflow-hidden ">
      <div className="h-[60dvh] relative lg:h-[70dvh]   md:h-[60dvh]">
        <ParallaxImage src="/footer.jpg" alt="footer" />
      </div>
      <div className="h-[80dvh]">
        <div className="lg:pt-90 pt-70 md:pt-70 px-15 flex relative flex-row gap-8 md:gap-20">
          <div className="flex flex-col gap-3">
            <h2 className="text-[0.6rem] text-dark-200 uppercase">explore</h2>
            {explore.map((item, index) => {
              return (
                <Link
                  href={item.href}
                  key={index}
                  className="capitalize text-[0.7rem] text-left"
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-[0.6rem] text-dark-200 uppercase">follow us</h2>
            {social.map((item, index) => {
              return (
                <Link
                  href={item.href}
                  key={index}
                  className="capitalize text-[0.7rem] text-left"
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-[0.6rem] text-dark-200 uppercase">
              contact us
            </h2>
            {contact.map((item, index) => {
              return (
                <Link
                  href={item.href}
                  key={index}
                  className="capitalize text-[0.7rem] text-left"
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
