import React, { useState } from "react";

type Props = {};

const ChoosePlan = (props: Props) => {
  const [duration, setDuration] = useState<string>("monthly");
  const plansDuration: string[] = ["monthly", "yearly"];

  const plans: {
    heading: string;
    descripton: string;
    price: number;
    planType: string;
  }[] = [
    {
      heading: "Basic Plan",
      descripton:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
      price: 54,
      planType: "basic",
    },
    {
      heading: "Premium Plan",
      descripton:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
      price: 54,
      planType: "premiun",
    },
    {
      heading: "Basic Plan",
      descripton:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
      price: 54,
      planType: "basic",
    },
  ];

  return (
    <>
      <div
        style={{
          backgroundImage: "url(" + `/images/podcast.png` + ")",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          height: "100%",
        }}
        className="px-4 py-10 ficc "
      >
        <div className="w-full max-w-4xl ">
          <div className="text-center ficc flex-col py-8">
            <h1 className="font-bold text-3xl">Choose your plan</h1>
            <p className="max-w-sm text-xs my-6 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
            <div className="shadow-lg rounded-xl p-1 grid grid-cols-2 w-40 font-medium bg-white">
              {plansDuration.map((p: string, i: number) => (
                <button
                  key={i}
                  onClick={() => setDuration(p)}
                  className={` rounded-xl ${
                    p == duration && `bg-purple-300 p-2 py-1`
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
          <div className="grid sm:grid-cols-3 mt-8 sm:mt-0 gap-8 lg:gap-16">
            {plans.map((p, i) => (
              <div
                className={`border border-purp rounded-lg p-4 py-6 ${
                  p.planType == "basic" ? "bg-white" : "bg-purp text-white"
                }`}
                key={i}
              >
                <h1 className="text-sm font-bold mb-3">{p.heading}</h1>
                <p className="text-xs">{p.descripton}</p>
                <h2
                  className={`my-5 flex items-center gap-3 text-xs ${
                    p.planType == "basic" ? "text-purp" : " text-white"
                  }`}
                >
                  <b className={`text-xl `}>$ {p.price}</b> /month
                </h2>
                <ul className="text-xs font-bold list-disc pl-4 flex flex-col gap-1 mb-5">
                  <li>Free access to video class</li>
                  <li>Free access to video class</li>
                  <li>Free access to video class</li>
                </ul>
                <button className="border border-purp rounded-md bg-white text-purp p-3 px-6 text-xs">
                  Start Free Trial
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChoosePlan;
