import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link href="/" className="-m-1.5 p-1.5">
      <span className="sr-only">Seven Hudson Capital</span>
      <img alt="logo" src="logo.svg" className={className} />
    </Link>
  );
};

export default Logo;
