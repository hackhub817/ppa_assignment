import React, { FC } from "react";
import Card from "./Card";

const Cta: FC = () => {
  return (
    <>
      <div className="bg-gray-200">
        <div className="mx-auto w-[1280px] max-w-full p-4">
          <div className="text-6xl font-bold text-center mx-auto max-w-5xl py-4">
            Pellentesque suscipit fringilla libero eu.
          </div>
          <div className="flex justify-center py-2">
            <button className="px-4 text-lg py-2 text-white w-auto h-auto  bg-green border font-semibold rounded-md  transition">
              Get a Demo
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cta;
