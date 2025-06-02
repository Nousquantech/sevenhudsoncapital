import React from "react";
import Image from "next/image";
import Button from "../components/Button";
import Container from "../components/Container";

const Hero = () => {
  return (
    <Container bgColor="bg-bg-bage">
      <div className=" flex flex-row  py-24">
        <div className="flex flex-col max-w-lg ">
          <div className="flex flex-col pb-8 gap-2">
            <p className="font-bold text-4xl text-navi">
              Data-Driven Investment Strategy for Finance Professionals.
            </p>

            <p className="font-bold text-base text-navi">
              Future-Focused Insights, Intelligence, and Investments
            </p>
          </div>
          <Button txt="GET STARTED" />
        </div>
        <div className="flex-none ml-auto px-24">
          <Image src="/HeroPhoto.jpg" alt="Hero" width="545" height="242" />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
