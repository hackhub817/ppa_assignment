import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-light-color">
      <div className="relative mx-auto  flex flex-col items-start px-4 sm:min-h-[50vh] md:px-0 lg:min-h-[80vh] lg:max-w-screen-xl lg:px-8">
        <div className="mb-16 mt-16 text-center md:mt-0 lg:my-auto lg:pe-5 lg:text-start ltablet:mt-16">
          <div className="flex flex-col lg:flex-row items-center ">
            <div className="lg:w-2/3">
              <h2 className="mb-5  text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl sm:leading-none">
                Lessons and insights
                <br className="hidden md:block" />{" "}
                <span className="text-green">from 8 years</span>
              </h2>
              <p className="text-lg py-3 pb-6 ">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className="px-4 h-16 w-32 subpixel-antialiased text-lg py-2 text-white bg-green border  rounded-md  transition">
                Register
              </button>
            </div>
            <div className="lg:w-1/2 flex  justify-end">
              <Image
                width={395}
                height={412}
                className="w-[395px] h-[412px] object-cover p-6"
                src="/img/banner.png"
                alt="Header Logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
