import React from "react";
import Image from "next/image";
import chart from "@/assets/chart-i.png";

interface Props {
    image?: string,
    title: string,
    description: string
}

export function FeatureCard({ title, description }: Props) {
  return (
    <div className="flex flex-col-reverse max-w-[360px] md:flex-row md:max-w-[900px] md:h-[300px] items-center justify-between gap-10 bg-white">
      <div className="flex flex-col items-start gap-4 flex-1">
        <h3 className="text-[32px] sm:text-[40px] text-[#3D404B] font-bold leading-[normal]">
          {title}
        </h3>
        <p className="text-[16px] text-[#5B6170] font-normal leading-[normal]">
          {description}
        </p>
        <div className="flex h-[44px] 3xl:h-[56px] px-[24px] items-center rounded-[50px] bg-[#6947BF] shadow-[0_2px_8px_0px_rgba(0,0,0,0.04)] text-lg 3xl:text-[20px] font-bold text-white leading-[140%] tracking-[0.18px] ">
          Count me in!
        </div>
      </div>
      <div>
        <Image
          src={chart}
          alt="feature"
          className="w-[400px] h-auto bg-red-600 rounded-lg"
        />
      </div>
    </div>
  );
}
