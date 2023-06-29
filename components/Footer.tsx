import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <div className="ficc w-full mt-20">
        <div className="w-full max-w-4xl justify-between border-t border-white p-4 px-6 grid grid-cols-12 text-white text-xs">
          <div className="col-span-5">
            <p>All Right Reserved @Copyright 2023</p>
          </div>
          <div className="col-span-4">
            <ul className="fic justify-between">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Product</li>
            </ul>
          </div>
          <div className="col-span-3"></div>
        </div>
      </div>
    </>
  );
};

export default Footer;
