import React, { FC } from "react";

const Cta: FC = () => {
  return (
    <div className="bg-gray-200">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-4xl sm:text-6xl font-bold text-center max-w-5xl mx-auto py-4">
          Pellentesque suscipit fringilla libero eu.
        </div>
        <div className="flex justify-center py-4">
          <button className="px-6 py-3 text-lg sm:text-xl text-white bg-green-500 hover:bg-green-600 border border-transparent font-semibold rounded-md transition duration-300">
            Get a Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cta;
