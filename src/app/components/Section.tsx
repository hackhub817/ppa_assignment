import React from "react";
import Image from "next/image";

interface SectionProps {
  title: string;
  description: string;
  imageLink: string;
}

const Section: React.FC<SectionProps> = ({ title, description, imageLink }) => {
  return (
    <div className="mx-auto w-full max-w-7xl px-4">
      <div className="flex flex-col lg:flex-row items-center bg-white shadow-md rounded-lg overflow-hidden">
        <div className="w-full lg:w-1/2">
          <Image
            width={442}
            height={433}
            src={imageLink}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 w-full lg:w-1/2">
          <h2 className="text-2xl lg:text-3xl font-bold mb-2">{title}</h2>
          <p className="text-gray-700 text-base lg:text-lg mb-4">
            {description}
          </p>
          <button className="px-4 py-2 text-lg text-white bg-green-500 hover:bg-green-600 border rounded-md transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section;
