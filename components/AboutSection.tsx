import React from "react";

type Props = {};

const AboutSection = (props: Props) => {
  const aboutList: {
    title: string;
    description: string;
  }[] = [
    {
      title: "Interactive Features",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
    {
      title: "Interactive Features",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
    {
      title: "Interactive Features",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
    {
      title: "Interactive Features",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
  ];

  return (
    <>
      <div className="ficc w-full">
        <div className="w-full max-w-4xl grid gap-4  sm:grid-cols-2 py-8 sm:py-28 justify-between ">
          <div className="grid grid-cols-2 gap-3 [&>*:nth-child(odd)]:-mt-4 gap-y-8 ">
            {aboutList.map((a, i) => (
              <div
                key={i}
                className="border border-purp rounded-lg shadow p-4 h-fit"
              >
                <h1 className="text-lg font-bold">{a.title}</h1>
                <p className="text-xs mt-2">{a.description}</p>
              </div>
            ))}
          </div>
          <div className="flex sm:justify-end items-center ">
            <div className="">
              <h1 className="text-3xl font-extrabold">About the Course</h1>
              <p className="mt-6 mb-10 text-xs max-w-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkno
              </p>
              <button className="btn-bg rounded-md p-3 px-10 font-bold text-sm text-white">
              Explore Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
