"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-marquee-slider";
import ClientData from "../data/ClientData";
import { FaArrowRight } from "react-icons/fa";

const Customers: React.FC = () => {
  return (
    <div className="py-10 bg-gray-200">
      <div className="mx-auto w-full max-w-7xl py-10 px-4">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-6 items-start overflow-hidden">
            <div className="w-full sm:w-1/2 lg:w-1/3 rounded-lg">
              <Image
                width={395}
                height={412}
                src="/img/customers.png"
                alt=""
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="w-full sm:w-1/2 lg:w-2/3">
              <p className="text-gray-700 text-base sm:text-lg mt-4 sm:mt-2">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
                eu enim metus. Vivamus sed libero ornare, tristique quam in,
                gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                laoreet elit at ligula molestie, nec molestie mi blandit.
                Suspendisse cursus tellus sed augue ultrices, quis tristique
                nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                eget efficitur libero condimentum id. Curabitur id nibh id sem
                dignissim finibus ac sit amet magna.
              </p>
              <div className="py-4">
                <span className="text-green-600 text-lg sm:text-xl font-bold py-2">
                  Tim Smith
                </span>
                <br />
                British Dragon Boat Racing Association
              </div>
              <div className="flex items-center">
                <Marquee
                  velocity={30}
                  resetAfterTries={200}
                  scatterRandomly={false}
                  direction="ltr"
                  onInit={() => console.log("Init")}
                  onFinish={() => console.log("Finish")}
                  step={3} // Display 3 images at a time
                  gap={10} // Adjust the gap between images
                  className="flex-shrink-0"
                >
                  {ClientData.map((item, index) => (
                    <div key={index} className="w-[160px] px-3 sm:w-[240px]">
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
                <div className="text-lg sm:text-xl font-bold text-green-600 flex items-center ml-4">
                  <div>Meet all customers</div>
                  <FaArrowRight className="text-xl ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
