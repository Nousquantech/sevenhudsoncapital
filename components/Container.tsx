import React from "react";

interface ContainerProps {
  children?: React.ReactNode;
  bgColor?: string;
}

const Container = ({ bgColor, children }: ContainerProps) => {
  return (
    <div className={bgColor}>
      {/* <div className={`w-screen ${bgColor}`}> */}
      <div className="mx-auto xl:max-w-7xl lg:max-w-5xl sm:max-w-sm">
        {children}
      </div>
    </div>
  );
};

export default Container;
