import React from "react";

type Props = {};

const TopSection = (props: Props) => {
  return (
    <>
      <div className="ficc w-full">
        <div className="w-full max-w-4xl grid grid-cols-2 py-16 text-white">
          <div className="">
            <h1 className="text-3xl font-extrabold">Learn how to launch a successful podcast</h1>
            <p className="mt-6 mb-12 text-xs max-w-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              in ustry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <button className="btn-bg rounded-md p-3 px-5 font-bold text-sm" >Sign up Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopSection;
