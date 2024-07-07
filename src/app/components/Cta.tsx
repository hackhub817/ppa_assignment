import React, { FC } from "react";

const Cta: FC = () => {
  return (
    <div className="bg-gray-200">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-4xl sm:text-6xl font-bold text-center max-w-5xl xs:w-full xs:text-2xl mx-auto py-4">
          Pellentesque suscipit fringilla libero eu.
        </div>
        <div className="flex justify-center py-2">
          <button className="px-4 text-lg py-2 text-white w-auto h-auto  bg-green border font-semibold rounded-md  transition">
            Get a Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cta;
