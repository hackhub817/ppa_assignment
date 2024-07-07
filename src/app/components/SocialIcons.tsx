import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className=" flex py-8 items-center space-x-6 xs:flex-wrap   ltablet:flex ltablet:items-center ltablet:justify-center">
      <a
        href="#"
        className="text-gray-500 transition-colors duration-300 hover:text-blue-500"
      >
        <FaFacebookF className="text-2xl" />
      </a>
      <a
        href="#"
        className="text-gray-500 transition-colors duration-300 hover:text-pink-500"
      >
        <FaInstagram className="text-2xl" />
      </a>
      <a
        href="#"
        className="text-gray-500 transition-colors duration-300 hover:text-gray-800"
      >
        <FaGithub className="text-2xl" />
      </a>
      <a
        href="#"
        className="text-gray-500 transition-colors duration-300 hover:text-blue-600"
      >
        <FaLinkedinIn className="text-2xl" />
      </a>
      <a
        href="#"
        className="text-gray-500 transition-colors duration-300 hover:text-red-500"
      >
        <FaYoutube className="h-10 text-2xl" />
      </a>
    </div>
  );
};

export default SocialIcons;
