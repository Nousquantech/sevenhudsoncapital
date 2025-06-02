import React from "react";
import Link from "next/link";

interface ButtonProps {
  txt?: string;
}

const Button: React.FC<ButtonProps> = ({ txt }) => {
  return (
    <Link
      href={"/"}
      className="flex flex-row justify-center items-center min-h-12 max-w-52 px-3.5 py-1 bg-main-orange rounded-full"
    >
      <div className="text-white font-bold text-base">{txt}</div>
    </Link>
  );
};

export default Button;
