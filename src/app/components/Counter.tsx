"use client";

import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import Image from "next/image";
interface Count_Array {
  number: number;
  text: string;
  link: string;
}

const Count: Count_Array[] = [
  { number: 2245341, text: "Members", link: "/img/icon/5.png" },
  { number: 46328, text: "Clubs", link: "/img/icon/6.png" },
  { number: 828867, text: "Event Bookings", link: "/img/icon/7.png" },
  { number: 1926436, text: "Event Bookings", link: "/img/icon/8.png" },
  // Add more fun facts if needed
];

const Counter: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-2 ">
        {Count.map((c, index) => (
          <div className="" key={index}>
            <div className="flex ">
              <div>
                <Image
                  width={190}
                  height={60}
                  className="mt-4 h-12 w-12 p-2"
                  src={c.link}
                  alt="Header Logo"
                />
              </div>
              <div className="p-4">
                <div className="text-xl font-bold">
                  <CounterWithAnimation end={c.number} />
                </div>
                <p className="">{c.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

interface CounterWithAnimationProps {
  end: number;
}

const CounterWithAnimation: React.FC<CounterWithAnimationProps> = ({ end }) => {
  const countRef = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
      }
    }, options);

    const currentRef = countRef.current; // Create a local variable

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <span ref={countRef}>
      {inView ? <CountUp end={end} duration={2} separator="," /> : "0"}
    </span>
  );
};

export default Counter;
