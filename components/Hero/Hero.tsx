"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import sparkle from "@/assets/sparkStar.png";
import hand from "@/assets/handsPrase.png";
import rocket from "@/assets/rocket-img.png";

export function Hero() {
  return (
    <div className="top-[70px] z-[48] flex flex-col items-center gap-10 self-stretch bg-white  px-3 mb-[150px] lg:sticky lg:px-0">
      <div className="flex max-w-[736px] flex-col items-center gap-5 3xl:max-w-[875px]">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-[32px] font-semibold leading-[normal] text-neutrals-900 sm:text-5xl 2xl:font-bold 3xl:text-[64px]"
        >
          <span>The Fast Track To Your</span>
          <span className="flex gap-2 flex-wrap items-center justify-center leading-[110%] xs:flex-row xs:gap-2">
            Best <span className="bg-[#FFE55E]"> IB Coursework</span>
          </span>
        </motion.h1>
      </div>
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-row items-center justify-center w-full"
      >
        <AnimatedTooltip items={people} />
        <div className="ml-6 text-[18px] font-semibold">
         <div className="flex items-center font-bold">
         <Icons.starFilledIcon className="size-[18px] text-yellow-500"/>
          <Icons.starFilledIcon className="size-[18px] text-yellow-500"/>
          <Icons.starFilledIcon className="size-[18px] text-yellow-500"/>
          <Icons.starFilledIcon className="size-[18px] text-yellow-500"/>
          <Icons.starFilledIcon className="size-[18px] text-yellow-500"/>
          4.9 on review
         </div>
          <p className="text-base font-medium">from 45,500+ members</p>
        </div>
      </motion.div> */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="flex h-[44px] 3xl:h-[56px] px-[24px] items-center rounded-[50px] bg-[#6947BF] shadow-[0_2px_8px_0px_rgba(0,0,0,0.04)] text-lg 3xl:text-[20px] font-bold text-white leading-[140%] tracking-[0.18px] ">
          Count me in!
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex max-w-[625px] w-full px-[18px] py-[11px] justify-center gap-[30px] items-center rounded-[20px] border border-[#6947BF] bg-[rgba(230,230,230,0.20)]"
      >
        <div className="flex flex-1 items-center gap-2">
          <Image src={sparkle} alt="sparkle" className="size-[30px] sm:size-[40px] " />
          <div className="text-start">
            <p className="text-[18px] sm:text-[23px] font-bold leading-[normal]">100k+</p>
            <p className="text-[12px] font-medium leading-[normal] ">
              resources
            </p>
          </div>
        </div>
        <div className="flex flex-1 items-center gap-2">
          <Image src={hand} alt="sparkle" className="size-[30px] sm:size-[40px]" />
          <div className="text-start">
            <p className="text-[18px] sm:text-[23px] font-bold leading-[normal]">50k+</p>
            <p className="text-[12px] font-medium leading-[normal] text-nowrap">
              IB Students
            </p>
          </div>
        </div>
        <div className="flex flex-1 items-center gap-2">
          <Image src={rocket} alt="sparkle" className="size-[30px] sm:size-[40px]" />
          <div className="text-start">
            <p className="text-[18px] sm:text-[23px] font-bold leading-[normal]">5x</p>
            <p className="text-[12px] font-medium leading-[normal] ">
            Learning speed
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
