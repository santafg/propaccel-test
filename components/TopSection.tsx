import React from "react";

type Props = {};

const TopSection = (props: Props) => {
  return (
    <>
      <div className="ficc w-full">
        <div className="w-full max-w-4xl gap-8 lg:gap-4 grid lg:grid-cols-2 py-16 text-white ">
          <div className="">
            <h1 className="text-3xl font-extrabold tracking-wider">
              Learn how to launch a successful podcast
            </h1>
            <p className="mt-8 mb-16 text-xs max-w-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              in ustry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <button className="btn-bg rounded-md p-3 px-10 font-bold text-sm">
              Sign up Now
            </button>
          </div>
          <div className="relative hidden lg:block ">
            <div className="absolute -bottom-16 right-0 w-96">
              <img src="/images/dots.png" alt="" />
            </div>
            <div className="absolute top-0 right-10 w-96">
              <img src="/images/bottom-smile.png" alt="" />
            </div>
            <div className="absolute -bottom-8 -left-5 w-96">
              <img src="/images/top-smile.png" alt="" />
            </div>
            <div className="absolute top-28 -right-12 w-24">
              <img src="/images/mic-head.png" alt="" />
            </div>
            <div className="absolute -bottom-20 -right-3 w-24">
              <img src="/images/white-mic.png" alt="" />
            </div>
          </div>
          <div className="ficc lg:hidden">
            <div className="relative max-w-sm top-box w-full overflow-hidden">
              <div className="absolute bottom-0 right-0 w-11/12">
                <img src="/images/dots.png" alt="" />
              </div>
              <div className="absolute top-0 right-8 w-10/12">
                <img src="/images/bottom-smile.png" alt="" />
              </div>
              <div className="absolute bottom-8 left-0 w-10/12">
                <img src="/images/top-smile.png" alt="" />
              </div>
              <div className="absolute  top-1/2 -right-6 transform -translate-y-1/2 w-20">
                <img src="/images/mic-head.png" alt="" />
              </div>
              <div className="absolute -bottom-4 -right-3 w-20">
                <img src="/images/white-mic.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopSection;
