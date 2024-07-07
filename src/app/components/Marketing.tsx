import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface Data {
  image: string;
  des: string;
}

interface ImageWithOverlayProps {
  images: Data[];
}

const Marketing: React.FC<ImageWithOverlayProps> = ({ images }) => {
  return (
    <div className="py-10 bg-gray-100">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-3xl sm:text-4xl text-center font-bold mb-6">
          Caring is the new marketing
        </div>
        <div className="text-base sm:text-lg text-center max-w-4xl mx-auto mb-8">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends, and more. See who's joining the community, read
          about how our community is increasing their membership income and lots
          more.
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image.image}
                alt={`Image ${index + 1}`}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gray-200 bg-opacity-75 p-4 rounded-lg">
                <p className="text-lg">{image.des}</p>
                <div className="flex items-center justify-center mt-3">
                  <span className="text-green-500">
                    Read More <FaArrowRight className="ml-1" />
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

export default Marketing;
