import React from "react";

type Props = {};

const LookingFor = (props: Props) => {
  return (
    <div className="text-center ficc flex-col">
      <h1 className="font-bold text-3xl">We have what you're looking for</h1>
      <p className="max-w-lg text-xs my-6 mb-12 text-purple-700">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type a
      </p>
      <button className="btn-bg rounded-md p-3 px-5 font-bold text-sm text-white">
        Explore Now
      </button>
    </div>
  );
};

export default LookingFor;
