import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  type: "primary" | "secondary";
}

const Logo: React.FC<LogoProps> = ({ className, type }) => {
  return (
    <Link href="/" className="-m-1.5 p-1.5">
      <span className="sr-only">Seven Hudson Capital</span>
      <img
        alt="logo"
        src={type == "primary" ? "logo.svg" : "LogoWhite.png"}
        className={className}
      />
    </Link>
  );
};

export default Logo;
