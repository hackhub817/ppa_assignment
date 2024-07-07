import React from "react";
import Link from "next/link";
import Image from "next/image";
import SocialIcons from "./SocialIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <section className="relative  bg-darkblack  p-8">
      <div className=" ">
        <div className="mx-auto w-full max-w-7xl px-4">
          <div className="gap-8 sm-grid-cols-2 mt-6 flex flex xs:grid w-full flex-wrap   text-sm  md:grid-cols-2 lg:mt-0 lg:grid-cols-4  xs:grid-cols-1 ">
            <div>
              <div className=" xs:grid sx:grid-cols-1 ltablet:gap-12  ltablet:mr-10 xs:flex xs:items-center xs:justify-center ltablet:flex ltablet:items-center ltablet:justify-center">
                <Link
                  className="relative flex flex-shrink-0 flex-grow-0 items-center rounded-[.65rem]  py-2 no-underline transition-all duration-300"
                  href="/"
                >
                  <Image
                    width={190}
                    height={60}
                    className="mt-1 h-8 w-44"
                    src="/img/Footer_logo.png"
                    alt="Header Logo"
                  />
                </Link>
                <div className="text-gray-100  py-6 ">
                  Copyright © 2020 Nexcent ltd. <br />
                  All rights reserved
                </div>
                <div className="mt-4  items-center  lg:mt-0  ltablet:justify-center">
                  <div>
                    <SocialIcons />
                  </div>
                </div>
              </div>{" "}
            </div>

            <div className=" flex flex-col xs:items-center xs:justify-center xs:text-center">
              <h1 className="py-2	text-lg font-bold  text-muted-600 text-white text-white transition-colors duration-300    ">
                Company
              </h1>
              <Link
                href="/about"
                className=" py-2 text-base text-muted-600  text-white text-white transition-colors duration-300 hover:text-teal-500 "
              >
                About Us
              </Link>
              <Link
                href="/privacy-policy"
                className=" py-2 text-base text-muted-600  text-white transition-colors duration-300 hover:text-teal-500 "
              >
                Blog
              </Link>
              <Link
                href="/terms"
                className="py-2 text-base text-muted-600  text-white transition-colors duration-300 hover:text-teal-500 "
              >
                Contact Us
              </Link>
              <Link
                href="/contact-us"
                className="py-2 text-base text-muted-600  text-white transition-colors duration-300 hover:text-teal-500 "
              >
                Pricing
              </Link>
              <Link
                href="/contact-us"
                className="py-2 text-base text-muted-600  text-white transition-colors duration-300 hover:text-teal-500 "
              >
                Testimonial
              </Link>
            </div>
            <div className=" flex flex-col sm:py-2 xs:items-center  xs:py-5 xs:text-center">
              <h1 className="py-2	text-lg font-bold  text-muted-600  text-white text-white transition-colors duration-300    ">
                Support
              </h1>
              <Link
                href="/demos"
                className="py-2 text-base text-muted-600  text-white transition-colors duration-300 hover:text-teal-500 "
              >
                Help Center
              </Link>
              <Link
                href="/demos"
                className="py-2 text-base text-muted-600  text-white transition-colors duration-300 hover:text-teal-500 "
              >
                Terms of Service
              </Link>
              <Link
                href="/demos"
                className="py-2 text-base text-muted-600  text-white transition-colors duration-300 hover:text-teal-500 "
              >
                Legal
              </Link>
              <Link
                href="/demos"
                className="py-2 text-base text-muted-600  text-white transition-colors duration-300 hover:text-teal-500 "
              >
                Privacy Policy
              </Link>
              <Link
                href="/demos"
                className="py-2 text-base text-muted-600  text-white transition-colors duration-300 hover:text-teal-500 "
              >
                Status
              </Link>
            </div>
            <div className="  sm:py-2 xs:items-center  xs:py-5 xs:text-center">
              <h1 className="py-2 text-lg font-bold text-muted-600 text-white transition-colors duration-300">
                Stay up to date
              </h1>
              <div className="relative w-full max-w-md">
                <input
                  type="text"
                  placeholder="Your Email Addresss"
                  className="w-full py-2 pl-4 pr-20 border bg-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="absolute inset-y-0 right-0  px-4 py-2  text-white rounded-r-lg">
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
