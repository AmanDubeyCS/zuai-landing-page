"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import React from "react"
import sparkle from "@/assets/sparkStar.png"
import hand from "@/assets/handsPrase.png"
import rocket from "@/assets/rocket-img.png"
import DashboardBGImage from "@/assets/hero-bg.svg"

export function Hero() {
  return (
    <div className="relative z-40 flex h-fit flex-col items-center justify-center gap-10 self-stretch px-3 py-40 lg:px-0">
      <div className="absolute inset-0 z-[-9] hidden place-items-center bg-transparent md:grid">
        <Image
          src={DashboardBGImage}
          alt="Backgroud Image"
          width={1024}
          height={400}
          className="h-auto w-full object-cover blur-[120px]"
        />
      </div>
      <div className="3xl:max-w-[875px] flex max-w-[736px] flex-col items-center gap-5">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="3xl:text-[64px] text-center text-[32px] font-semibold leading-[normal] text-neutrals-900 sm:text-[48px] 2xl:font-bold"
        >
          <span>IB MAth formula </span>
          <span className="xs:flex-row xs:gap-2 flex flex-wrap items-center justify-center gap-2 leading-[110%]">
            <span className="bg-[#FFE55E] px-1"> booklet</span>
          </span>
        </motion.h1>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="3xl:h-[56px] 3xl:text-[20px] flex h-[44px] items-center rounded-[50px] bg-[#6947BF] px-[24px] text-lg font-bold leading-[140%] tracking-[0.18px] text-white shadow-[0_2px_8px_0px_rgba(0,0,0,0.04)]">
          Download now
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex w-full max-w-[625px] items-center justify-center gap-[30px] rounded-[20px] border border-[#6947BF] bg-[rgba(230,230,230,0.20)] px-[18px] py-[11px]"
      >
        <div className="flex flex-1 items-center gap-2">
          <Image
            src={sparkle}
            alt="sparkle"
            className="size-[30px] sm:size-[40px]"
          />
          <div className="text-start">
            <p className="text-[18px] font-bold leading-[normal] sm:text-[23px]">
              100k+
            </p>
            <p className="text-[12px] font-medium leading-[normal]">
              resources
            </p>
          </div>
        </div>
        <div className="flex flex-1 items-center gap-2">
          <Image
            src={hand}
            alt="sparkle"
            className="size-[30px] sm:size-[40px]"
          />
          <div className="text-start">
            <p className="text-[18px] font-bold leading-[normal] sm:text-[23px]">
              50k+
            </p>
            <p className="text-nowrap text-[12px] font-medium leading-[normal]">
              IB Students
            </p>
          </div>
        </div>
        <div className="flex flex-1 items-center gap-2">
          <Image
            src={rocket}
            alt="sparkle"
            className="size-[30px] sm:size-[40px]"
          />
          <div className="text-start">
            <p className="text-[18px] font-bold leading-[normal] sm:text-[23px]">
              5x
            </p>
            <p className="text-[12px] font-medium leading-[normal]">
              Learning speed
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
