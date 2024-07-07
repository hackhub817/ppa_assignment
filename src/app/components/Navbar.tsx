import Image from "next/image";
import React from "react";
import Link from "next/link";
const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Image
            width={190}
            height={60}
            className="mt-1 h-7 w-44 "
            src="/img/LOGO.png"
            alt="Header Logo"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-10">
          <Link href="/home" className="text-gray-700 hover:text-gray-900">
            Home
          </Link> 
          <Link href="/services" className="text-gray-700 hover:text-gray-900">
            Services
          </Link>
          <Link href="/features" className="text-gray-700 hover:text-gray-900">
            Features
          </Link>
          <Link href="/products" className="text-gray-700 hover:text-gray-900">
            Products
          </Link>
          <Link
            href="/testimonials"
            className="text-gray-700 hover:text-gray-900"
          >
            Testimonials
          </Link>
          <Link href="/faqs" className="text-gray-700 hover:text-gray-900">
            FAQs
          </Link>
        </div>

        {/* Login and Sign Up */}
        <div className="flex items-center space-x-4">
          <button className="text-green font-semibold text-lg px-4 py-2  rounded  transition">
            Login
          </button>
          <button className="px-4 text-lg py-2 text-white bg-green border font-semibold rounded  transition">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
