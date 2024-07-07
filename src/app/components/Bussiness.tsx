import Image from "next/image";
import React from "react";
import Link from "next/link";
import Counter from "./Counter";
const Business: React.FC = () => {
  return (
    <>
      <div className="bg-gray-200 ">
        <div className="mx-auto w-[1280px] max-w-full py-10 px-4">
          <div className="flex">
            <div className="w-1/2 flex  items-center">
              <div>
                <h1 className="font-bold text-3xl ">
                  Helping a local <br />
                  <span className="text-green ">
                    business reinvent itself
                  </span>{" "}
                </h1>
                <p className="text-base ">
                  We reached here with our hard work and dedication
                </p>
              </div>
            </div>

            <div className="w-1/2">
              <Counter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Business;
