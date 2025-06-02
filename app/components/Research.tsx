import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
Link;
interface ResearchProps {
  photo: string;
  date: string;
  author: string;
  mainText: string;
}

const Research = ({ photo, date, author, mainText }: ResearchProps) => {
  return (
    <Link href="/">
      <div className="flex flex-row gap-1 h-fit">
        <div className="flex flex-col justify-start">
          <Image src={photo} alt="research" width={96} height={96} />
          <span className="text-xs text-data-text">{date}</span>
        </div>
        <div className="flex flex-col justify-start gap-1">
          <div className="text-data-text text-sm">{author}</div>
          <div className="text-navi max-w-58 font-bold text-base">
            {mainText}
          </div>
          <FaArrowRight style={{ width: "25", height: "25" }} color="white" />
        </div>
      </div>
    </Link>
  );
};

export default Research;
