"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const MobileView: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState<string>("main");
  const [isHoverMenuOpen, setIsHoverMenuOpen] = useState<null | string>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setCurrentMenu("main");
  };

  const toggleSubMenu = (menu: string) => {
    setCurrentMenu(menu);
  };

  const toggleHoverMenu = (menu: string) => {
    setIsHoverMenuOpen(isHoverMenuOpen === menu ? null : menu);
  };
  const handleBack = () => {
    setCurrentMenu("main");
  };

  return (
    <nav className="py-2">
      <div className="px-8">
        <div className="flex items-center justify-between">
          <div className="flex ">
            <Image
              width={190}
              height={60}
              className="mt-1 h-6 w-32 "
              src="/img/logo.png"
              alt=" Logo"
            />
          </div>
          <button
            className="text-black focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        {isOpen && (
          <div>
            <ul className="mt-4 space-y-2 py-2  text-black">
              {currentMenu === "main" && (
                <>
                  <li className="w-48 ">
                    <button className=" py-2 text-left text-lg">
                      <span className="flex items-center gap-2 font-semibold text-gray-700 ">
                        Home <FaArrowRight />
                      </span>
                    </button>
                  </li>
                  <li className="w-48 ">
                    <button className=" py-2 text-left text-lg">
                      <span className="flex items-center gap-2 font-semibold text-gray-700 ">
                        Service <FaArrowRight />
                      </span>
                    </button>
                  </li>
                  <li className="w-48 ">
                    <button className=" py-2 text-left text-lg">
                      <span className="flex items-center gap-2 font-semibold text-gray-700 ">
                        Feature <FaArrowRight />
                      </span>
                    </button>
                  </li>
                  <li className="w-48 ">
                    <button className=" py-2 text-left text-lg">
                      <span className="flex items-center gap-2 font-semibold text-gray-700 ">
                        Product <FaArrowRight />
                      </span>
                    </button>
                  </li>
                  <li className="w-48 ">
                    <button className=" py-2 text-left text-lg">
                      <span className="flex items-center gap-2 font-semibold text-gray-700 ">
                        Testimonal <FaArrowRight />
                      </span>
                    </button>
                  </li>
                  <li className="w-48 ">
                    <button className=" py-2 text-left text-lg">
                      <span className="flex items-center gap-2 font-semibold text-gray-700 ">
                        FAQ <FaArrowRight />
                      </span>
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MobileView;
