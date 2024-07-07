import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Client from "./components/Clients";
import Community from "./components/Community";
import Section from "./components/Section";
import Dashboard from "./components/Counter";
import Counter from "./components/Counter";
import Business from "./components/Bussiness";
import { FaBeer, FaCoffee, FaApple, FaAndroid } from "react-icons/fa"; // Example icons
import Customers from "./components/Customers";
import Marketing from "./components/Marketing";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import MobileNavbar from "./components/MobileView";
import Market from "./components/Market";

export default function Home() {
  const images = [
    {
      image: "/img/bussiness/1.png",
      des: "Creating Streamlined Safeguarding Processes with OneRen",
    },
    {
      image: "/img/bussiness/2.png",
      des: "What are your safeguarding responsibilities and how can you manage them?",
    },
    {
      image: "/img/bussiness/3.png",
      des: "Revamping the Membership Model with Triathlon Australia",
    },
  ];

  const sectionProps = {
    title: "The unseen of spending three years at Pixelgrade",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.",
    imageLink: "/img/section.png",
  };
  const sectionProps2 = {
    title: "How to design your site footer like we did",
    description:
      "Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.",
    imageLink: "/img/section2.png",
  };
  return (
    <>
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="block lg:hidden">
        <MobileNavbar />
      </div>
      <Hero />
      <Client />
      <Community />
      <div className="p-4">
        <Section {...sectionProps} />
      </div>
      <Business />
      <div className="p-4">
        <Section {...sectionProps2} />
      </div>
      <Customers />
      <div className="p-4 lg:hidden block">
        <Marketing images={images} />
      </div>
      <div className="hidden lg:block">
        <Market images={images} />
      </div>
      <Cta />
      <Footer />
    </>
  );
}
