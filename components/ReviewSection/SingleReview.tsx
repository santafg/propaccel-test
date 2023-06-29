import React from "react";

type Props = {};

const SingleReview = (props: Props) => {
  return (
    <div className="bg-white border border-gray-200 sm:mr-8 my-6 rounded-lg p-6 shadow-lg">
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <img src="/images/Lolla.png" className="w-16" alt="" />
        </div>
        <div className="col-span-9">
          <h1 className="text-base font-bold">Lolla Smith</h1>
          <p className="text-sm">Microsoft</p>
          <div className="flex gap-3 mt-1">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <div key={i}>
                  <img src="/images/star.png" className="w-4" alt="" />
                </div>
              ))}
          </div>
        </div>
      </div>

      <p className="text-xs mt-4">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make
      </p>
    </div>
  );
};

export default SingleReview;
