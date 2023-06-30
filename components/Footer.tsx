import React from "react";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  const socialLinks: {
    icon: string;
    link: string;
  }[] = [
    {
      icon: "facebook",
      link: "https://www.google.com",
    },
    {
      icon: "youtube",
      link: "https://www.google.com",
    },
    {
      icon: "instagram",
      link: "https://www.google.com",
    },
    {
      icon: "twitter",
      link: "https://www.google.com",
    },
  ];
  return (
    <>
      <div className="ficc w-full mt-20">
        <div className="w-full max-w-4xl  border-t border-white p-4 sm:p-5 sm:px-12 grid items-center gap-8 lg:gap-4 lg:grid-cols-12 text-white text-xs">
          <div className="col-span-5">
            <p>All Right Reserved @Copyright 2023</p>
          </div>
          <div className="col-span-4">
            <ul className="fic justify-between">
              <li className="cursor-pointer">Terms of Service</li>
              <li className="cursor-pointer">Privacy Policy</li>
              <li className="cursor-pointer">Product</li>
            </ul>
          </div>
          <div className="col-span-3 fic lg:justify-end gap-4">
            {socialLinks.map((sc, i) => (
              <div key={i}>
                <Link href={sc.link} target="_blank">
                  <img src={`/images/${sc.icon}.png`} alt="" className="w-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
