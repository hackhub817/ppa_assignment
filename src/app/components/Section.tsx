import React from "react";
import Image from "next/image";

const Section: React.FC = () => {
  return (
    <div className="mx-auto w-[1280px] max-w-full px-4">
      <div className="flex flex-row items-center items-start bg-white shadow-md rounded-lg overflow-hidden">
        <div className="w-1/2">
          <Image
            width={395}
            height={412}
            src="/img/section.png"
            alt="fasdf"
            className="w-[442px] h-[433px] object-cover"
          />
        </div>
        <div className="p-6 w-1/2">
          <h2 className="text-3xl font-bold mb-2">
            The unseen of spending three years at Pixelgrade
          </h2>
          <p className="text-gray-700 text-base mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <button className="px-4 h-auto w-auto subpixel-antialiased text-lg py-2 text-white bg-green border  rounded-md  transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section;
