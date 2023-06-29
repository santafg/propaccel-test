import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { navLinks } from "./navlinks";

type Props = {};

const HomeNavbar = (props: Props) => {
  return (
    <div className="h-16 ficc w-full">
      <div className="w-full max-w-4xl fic justify-between text-white text-base">
        <div>
          <h1 className="font-semibold">Logo</h1>
        </div>
        <div className="flex items-center gap-8 font-light">
          {navLinks.map((nlink, i) => (
            <div key={i}>
              <ScrollLink
                className="cursor-pointer"
                activeClass="text-green-300"
                to={`${nlink.route}`}
                spy={true}
                smooth={true}
                duration={500}
                // offset={-150}
              >
                {nlink.title}
              </ScrollLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeNavbar;
