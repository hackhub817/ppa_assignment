import React, { FC } from "react";
import Image from "next/image";

interface SectionProps {
  imageSrc: string;
  title: string;
  description: string;
}

const Card: FC<SectionProps> = ({ imageSrc, title, description }) => (
  <div className="w-72 flex flex-col items-center p-4 ">
    <Image
      src={imageSrc}
      alt={title}
      width={200}
      height={200}
      className="mb-4 h-20 w-16"
    />
    <h2 className="text-3xl text-center font-bold mb-2">{title}</h2>
    <p className="text-center text-base">{description}</p>
  </div>
);
export default Card;
