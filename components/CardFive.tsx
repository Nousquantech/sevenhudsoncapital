import React from "react";
import Image from "next/image";
import Button from "./Button";
import Container from "./Container";
import Link from "next/link";

interface CardFiveProps {
  type?: string;
  title?: string;
  subtitle?: string;
  mainText?: string;
  href?: string;
  icn: string;
}

const CardFive = ({
  type,
  title,
  subtitle,
  mainText,
  href,
  icn,
}: CardFiveProps) => {
  return (
    <>
      {type === "left" ? (
        <div className="bg-bg-bage w-full">
          <div className="flex flex-col lg:flex-row justify-center my-5 gap-10 mx-8 lg:mx-0">
            <Image
              src={icn}
              alt="icon"
              width={521}
              height={209}
              objectFit="cover"
            />
            <div className="flex flex-col justify-center items-center lg:items-start  gap-5 max-w-[521px]">
              <div className="flex flex-col gap-5">
                <div className="text-navi font-bold text-2xl text-center lg:text-left">
                  {title}
                </div>
                <div className="text-navi font-bold text-base text-center lg:text-left">
                  {subtitle}
                </div>
                <div className="text-navi text-sm">{mainText}</div>
              </div>
              <Link
                href={"/"}
                className="flex flex-row justify-center items-center min-h-12 min-w-52 px-3.5 py-1 bg-main-orange rounded-full"
              >
                <div className="text-white font-bold text-base">LEARN MORE</div>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white">
          <div className="flex flex-col lg:flex-row justify-center my-5 gap-10 mx-8 lg:mx-0">
            <div className="lg:hidden ">
              <Image
                src={icn}
                alt="icon"
                width={521}
                height={209}
                objectFit="cover"
              />
            </div>
            <div className="flex flex-col justify-center items-center lg:items-start gap-5 max-w-[521px]">
              <div className="flex flex-col gap-5">
                <div className="text-navi font-bold text-2xl text-center lg:text-left">
                  {title}
                </div>
                <div className="text-navi font-bold text-base text-center lg:text-left">
                  {subtitle}
                </div>
                <div className="text-navi text-sm">{mainText}</div>
              </div>
              <Link
                href={"/"}
                className="flex flex-row justify-center items-center min-h-12 min-w-52 px-3.5 py-1 bg-main-orange rounded-full"
              >
                <div className="text-white font-bold text-base">LEARN MORE</div>
              </Link>
            </div>
            <div className="hidden lg:block">
              <Image
                src={icn}
                alt="icon"
                width={521}
                height={209}
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardFive;
