"use client"; // Ensure this directive is at the top
import React, { type FC } from "react";
import Image from "next/image";
import Marquee from "react-marquee-slider";
import ClientData from "../data/ClientData";

const Client: FC = () => {
  return (
    <div className="bg-white  py-16">
      <div className="mx-auto w-[1280px] max-w-full px-4">
        <div className="flex justify-center ">
          <div className="">
            <h1 className="text-4xl text-gray-900 py-4 text-center font-semibold">
              Our Clients
            </h1>
            <p className="text-lg pb-6 text-center ">
              We have been working with some Fortune 500+ clients
            </p>
            <div className="flex  justify-center">
              <Marquee
                velocity={30}
                resetAfterTries={200}
                scatterRandomly={false}
                direction="ltr"
                onInit={() => console.log("Init")}
                onFinish={() => console.log("Finish")}
                step={5} // Display 3 images at a time
                gap={20} // Adjust the gap between images
              >
                {ClientData.map((item, index) => (
                  <div key={index} className="w-[240px] px-3">
                    <Image
                      src={item.image}
                      className="w-auto h-auto"
                      alt=""
                      width={800}
                      height={600}
                    />
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
