import React from "react";
import { Container, Research } from "@/components/index";

const SectionTwo = () => {
  return (
    <Container bgColor="bg-main-orange">
      <div className="flex flex-col px-8  lg:px-8">
        <div className=" py-3 justify-right text-center lg:text-left">
          <span className="text-white ">Featured Research</span>
        </div>
        <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row w-full justify-between my-4">
          <Research
            photo="/research1.jpg"
            date="16 April 2025"
            author="Miranda Voss"
            mainText="Tariffs and the Tipping Point: Recession in Slow Motion"
          />
          <Research
            photo="/research2.jpg"
            date="3 February 2025"
            author="Darren Flint"
            mainText="ETF Echoes: How Trade Wars Are Reshaping Passive Investing"
          />
          <Research
            photo="/research3.jpg"
            date="14 January 2025"
            author="Amira Chen"
            mainText="Ghosts in the Code: AI Risk and the Tech Collapse"
          />
        </div>
      </div>
    </Container>
  );
};

export default SectionTwo;
