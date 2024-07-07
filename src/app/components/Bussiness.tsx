import Image from "next/image";
import React from "react";
import Link from "next/link";
import Counter from "./Counter";

const Business: React.FC = () => {
  return (
    <div className="bg-gray-200">
      <div className="mx-auto w-full max-w-7xl py-10 px-4">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 flex items-center mb-6 lg:mb-0">
            <div>
              <h1 className="font-bold text-2xl lg:text-3xl">
                Helping a local <br />
                <span className="text-green-500">business reinvent itself</span>
              </h1>
              <p className="text-base">
                We reached here with our hard work and dedication
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <Counter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
