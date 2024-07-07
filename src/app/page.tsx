import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Client from "./components/Clients";
import Community from "./components/Community";
import Section from "./components/Section";
import Dashboard from "./components/Counter";
import Counter from "./components/Counter";
import { FaBeer, FaCoffee, FaApple, FaAndroid } from "react-icons/fa"; // Example icons

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Client />
      <Community />
      <Section />
      <Counter />
    </>
  );
}
