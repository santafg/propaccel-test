import React from "react";
import Carousal from "@itseasy21/react-elastic-carousel";
import SingleReview from "./SingleReview";

type Props = {};

const ReviewSection = (props: Props) => {

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
  ];
  return (
    <>
      <div className="ficc w-full ">
        <div className="w-full max-w-4xl py-8">
          <div className="p-4">
            <h1 className="text-3xl font-bold">Review from customers</h1>
            <p className="text-xs max-w-xs mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry
            </p>
          </div>
          <div className="mt-8 lg:-mr-4 lg:-ml-4">
            <Carousal breakPoints={breakPoints} isRTL={false} showArrows={false} itemPadding={[0 ,12]} >
              {Array(12)
                .fill("")
                .map((_, i) => (
                  <div key={i}>
                    <SingleReview />
                  </div>
                ))}
            </Carousal>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewSection;
