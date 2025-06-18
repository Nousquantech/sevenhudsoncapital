import React from "react";
import Image from "next/image";

interface CardFourProps {
  pict: string;
  title?: string;
  mainText: string;
}

const CardFour = ({ pict, title, mainText }: CardFourProps) => {
  return (
    <div className="flex flex-col gap-2 min-h-72 h-full max-w-96 items-center justify-center bg-main-orange px-10 py-7">
      <Image src={pict} alt="Icon" width={120} height={120} />

      <div className="font-bold text-2xl text-center text-white">{title}</div>
      <div className="text-navi font-bold text-xs">{mainText}</div>
    </div>
  );
};

export default CardFour;
