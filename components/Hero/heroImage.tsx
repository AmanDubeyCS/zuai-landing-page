"use client";

import React, { useRef } from "react";
import Image from "next/image";
import DashboardBGImage from "@/assets/hero-bg.svg";
import { motion, useScroll, useTransform } from "framer-motion";

export function HeroImage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const opacity1 = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const color = useTransform(opacity1, (value) => `rgba(255,255,255,${value})`);

  return (
    <motion.section
      className="z-[49] w-full lg:sticky"
      style={{
        backgroundColor: color,
      }}
    >
      <div className="mx-auto max-w-[664px] px-4 lg:hidden">
      <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/XDqfdOsjW0w?controls=0&loop=1&autoplay=1&playlist=XDqfdOsjW0w" 
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-[16px] w-full h-[400px]  border-[12px] border-blue-950 mx-auto"
            />
        {/* <Image src={image} alt="hero image" className="w-full h-auto border-[12px] rounded-[16px] border-blue-950" /> */}
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
            <div className="relative  z-10 grid w-full place-items-center px-4 ">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/XDqfdOsjW0w?controls=0&loop=1&autoplay=1&playlist=XDqfdOsjW0w" 
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-[16px] h-[500px] w-[700px] 2xl:h-[600px] 2xl:w-[800px] 3xl:h-[850px] 3xl:w-[1200px]  border-[12px] border-blue-950"
            />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}