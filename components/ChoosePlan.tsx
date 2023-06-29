import React, { useState } from "react";

type Props = {};

const ChoosePlan = (props: Props) => {
  const [plan, setPlan] = useState<string>("monthly");
  const plans: string[] = ["monthly", "yearly"];
  return (
    <>
      <div
        style={{
          backgroundImage: "url(" + `/images/podcast.png` + ")",
          // backgroundSize: "cover",
          backgroundSize: "100% 90%",
          backgroundRepeat: "no-repeat",
          height: "100%",
        }}
        className="px-4"
      >
        <div className="text-center ficc flex-col py-8">
          <h1 className="font-bold text-3xl">Choose your plan</h1>
          <p className="max-w-sm text-xs my-6 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
          <div className="shadow-lg rounded-xl p-1 grid grid-cols-2 w-40 font-medium">
            {plans.map((p: string, i: number) => (
              <button
                key={i}
                onClick={() => setPlan(p)}
                className={` rounded-xl ${p == plan && `bg-purple-300 p-2 py-1`}`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChoosePlan;
