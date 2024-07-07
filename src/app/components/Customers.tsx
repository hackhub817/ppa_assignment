"use client"; // Ensure this directive is at the top
import React from "react";
import Image from "next/image";
import Marquee from "react-marquee-slider";
import ClientData from "../data/ClientData";
import { FaArrowRight } from "react-icons/fa";

const Customers: React.FC = () => {
  return (
    <div className="py-10 bg-gray-200">
      <div className="mx-auto w-[1280px] max-w-full px-4">
        <div className="flex gap-10 flex-row  items-start  overflow-hidden">
          <div className="w-96  rounded-lg">
            <Image
              width={395}
              height={412}
              src="/img/customers.png"
              alt=""
              className="w-96 h-96 object-cover  rounded-xl"
            />
          </div>
          <div className="w-3/4">
            <p className="text-gray-700 text-lg mt-2">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <div className="py-4">
              <span className="text-green text-xl font-bold py-2">
                Tim Smith
              </span>
              <br />
              British Dragon Boat Racing Association
            </div>
            <div className="flex">
              <div>
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
              <div className="text-xl font-bold text-green flex ml-4">
                <div>Meet all customers</div>
                <FaArrowRight className="text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
