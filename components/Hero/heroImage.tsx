"use client";

import React, { useRef } from "react";
import Image from "next/image";
import image from "@/assets/rocket-img.png";
import DashboardBGImage from "@/assets/hero-bg.svg";
import { motion, useScroll, useTransform } from "framer-motion";

export function HeroImage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const opacity1 = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const color = useTransform(opacity1, (value) => `rgba(255,255,255,${value})`);

  return (
    <motion.section
      className="z-[49] w-full lg:sticky"
      style={{
        backgroundColor: color,
      }}
    >
      <div className="mx-auto max-w-[664px] px-4 lg:hidden">
        <Image src={image} alt="hero image" className="w-full h-auto border-[12px] rounded-[16px] border-blue-950" />
      </div>
      {/* lg and above */}
      <div
        ref={containerRef}
        className="relative hidden min-h-[calc(100vh-72px)] w-full justify-center lg:flex"
      >
        <div className="sticky top-0 flex w-full items-center overflow-hidden bg-transparent lg:h-screen">
          <div className="absolute inset-0 z-[9] grid place-items-center bg-transparent">
            <Image
              src={DashboardBGImage}
              alt="Backgroud Image"
              width={1024}
              height={768}
              className="h-auto w-full object-cover blur-[80px]"
            />
          </div>
          <div className="sticky top-0 z-50 mx-auto flex h-fit w-full items-start justify-center">
            <div className="relative z-10 grid w-full place-items-center px-4 ">
              <Image
                src={image}
                alt="hero image"
                className="h-[480px] w-3/5 bg-white  border-[12px] rounded-[16px] border-blue-950"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

{
  /* <motion.div
style={{ opacity: opacity1 }}
className="z-10 hidden font-kalam lg:flex"
>
<Image
  src={line}
  alt="arrow"
  className="absolute left-0 top-0 size-[300px] shrink-0"
/>
<p className="absolute left-0 top-[120px] w-[121px] rotate-[-15deg] text-center text-lg font-normal leading-[130%] text-[#AA7712] md:flex">
  Select a subject to get started
</p>
</motion.div>
<motion.div
style={{ opacity: opacity2 }}
className="z-10 hidden font-kalam lg:flex"
>
<Image
  src={line}
  alt="arrow"
  className="absolute right-[-166px] top-[-122px] size-[300px] shrink-0 -scale-x-100"
/>
<p className="absolute right-[-180px] top-0  w-[121px] rotate-[2.45deg] text-center text-lg font-normal leading-[130%] text-[#AA7712] md:flex">
  Maintain daily streak to ace your Learning!
</p>
</motion.div>
<motion.div
style={{ opacity: opacity3 }}
className="z-10 hidden font-kalam lg:flex"
>
<Image
  src={line}
  alt="arrow"
  className="absolute bottom-[-15px] right-[-114px] size-[300px] shrink-0 -scale-x-100"
/>
<p className="absolute bottom-[105px] right-[-140px] w-[121px] rotate-[2.45deg] text-center text-lg font-normal leading-[130%] text-[#AA7712] md:flex">
  Achieve More with AI buddy at Your Side
</p>
</motion.div> */
}
