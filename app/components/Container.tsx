import React from "react";

interface ContainerProps {
  children?: React.ReactNode;
  bgColor?: string;
}

const Container = ({ bgColor, children }: ContainerProps) => {
  return (
    <div className={`w-screen ${bgColor}`}>
      <div className="mx-auto max-w-7xl md:max-w-7xl">{children}</div>
    </div>
  );
};

export default Container;
