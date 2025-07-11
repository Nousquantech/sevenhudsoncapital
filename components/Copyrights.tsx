import React from "react";
import Link from "next/link";
import { FaLinkedin, FaYoutube } from "react-icons/fa";

const Copyrights = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-5 lg:gap-10 text-white">
      <div className="text-base lg:text-xl">
        &copy; Copyright {currentYear}, 7HC. All Right Reserved
      </div>
      <Link href="/policy" className="text-base lg:text-xl">
        Privacy Policy
      </Link>
      <div className="flex flex-row gap-4 items-center">
        <FaLinkedin size={27} />
        <FaYoutube size={32} />
      </div>
    </div>
  );
};

export default Copyrights;
