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
        <Container bgColor="bg-bg-bage">
          <div className="flex flex-row justify-center my-5 gap-10">
            <Image
              src={icn}
              alt="icon"
              width={521}
              height={209}
              objectFit="cover"
            />
            <div className="flex flex-col justify-center items-start gap-5 max-w-[521px]">
              <div>
                <div className="text-navi font-bold text-2xl">{title}</div>
                <div className="text-navi font-bold text-base">{subtitle}</div>
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
        </Container>
      ) : (
        <Container bgColor="bg-white">
          <div className="flex flex-row justify-center my-5 gap-10">
            <div className="flex flex-col justify-center items-start gap-5 max-w-[521px]">
              <div>
                <div className="text-navi font-bold text-2xl">{title}</div>
                <div className="text-navi font-bold text-base">{subtitle}</div>
                <div className="text-navi text-sm">{mainText}</div>
              </div>
              <Link
                href={"/"}
                className="flex flex-row justify-center items-center min-h-12 min-w-52 px-3.5 py-1 bg-main-orange rounded-full"
              >
                <div className="text-white font-bold text-base">LEARN MORE</div>
              </Link>
            </div>
            <Image
              src={icn}
              alt="icon"
              width={521}
              height={209}
              objectFit="cover"
            />
          </div>
        </Container>
      )}
    </>
  );
};

export default CardFive;
