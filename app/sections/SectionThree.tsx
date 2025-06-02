import React from "react";
import Container from "../components/Container";

const SectionThree = () => {
  return (
    <Container bgColor="bg-white">
      <div className="flex flex-col justify-center items-center gap-6 h-full w-full py-24">
        <div className="h-fit justify-center">
          <div className="text-navi tact-bold text-4xl text-center">
            Why Our Investment Research Stands Apart?
          </div>
          <div className="text-main-orange font-bold text-base text-center">
            Leading the way in global financial research and intelligence
          </div>
        </div>
        <div className="text-xs text-navi">
          7HC provides independent, objective, and actionable investment
          research, data, and analytics to clients around the world—powered by
          our award-winning technology—to help them make smarter investment and
          business decisions.
        </div>
      </div>
    </Container>
  );
};

export default SectionThree;
