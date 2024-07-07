import React from "react";
import { FaArrowRight } from "react-icons/fa";
interface data {
  image: string;
  des: string;
}
interface ImageWithOverlayProps {
  images: data[];
}

const Market: React.FC<ImageWithOverlayProps> = ({ images }) => {
  return (
    <div className="py-10">
      <div className="mx-auto w-[1280px] max-w-full py-10 ">
        <div className="text-4xl text-center font-bold">
          Caring is the new marketing
        </div>
        <div className="text-lg text-center max-w-4xl mx-auto py-2 ">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.​
        </div>
        <div className="flex justify-around items-center">
          {images.map((image, index) => (
            <div key={index} className="relative w-1/3 p-4">
              <img
                src={image.image}
                alt={`Image ${index + 1}`}
                className="w-full h-auto"
              />
              <div className="absolute text-center text-lg bottom-[-20%] p-4 left-0 right-0 mx-auto w-80 rounded-lg bg-gray-200 h-1/2">
                {image.des} <br />
                <div className="py-5">
                  <span className="flex items-center gap-2 justify-center text-green ">
                    Read More <FaArrowRight className="mt-1" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Market;
