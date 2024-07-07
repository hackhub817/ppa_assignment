import React, { FC } from "react";
import Card from "./Card";

const Community: FC = () => {
  const sections = [
    {
      imageSrc: "/img/icon/4.png",
      title: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      imageSrc: "/img/icon/2.png",
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      imageSrc: "/img/icon/3.png",
      title: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto py-8">
      <h1 className="text-4xl text-center font-bold  ">
        {" "}
        Manage your entire community in a <br /> single system
      </h1>
      <p className="text-center text-lg py-4">Who is Nextcent suitable for?</p>
      <div className="flex flex-wrap justify-between p-8 ">
        {sections.map((section, index) => (
          <Card
            key={index}
            imageSrc={section.imageSrc}
            title={section.title}
            description={section.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Community;
