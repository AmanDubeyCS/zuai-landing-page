"use client"
import AnimatedGradientText from "@/components/ui/animated-gradient-text"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import React from "react"

export function Hero() {
  return (
    <div className="z-30 flex flex-col items-center gap-8 self-stretch px-3 py-16 lg:px-0">
      {/* <div className="absolute inset-0 z-[-50] hidden place-items-center bg-transparent md:grid pt-[750px]">
        <Image
          src={DashboardBGImage}
          alt="Backgroud Image"
          width={1024}
          height={100}
          className="h-auto w-full object-cover blur-[120px]"
        />
      </div> */}
      <div className="flex max-w-[736px] flex-col items-center gap-5 3xl:max-w-[875px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatedGradientText>
            ✨ <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
            <span
              className={cn(
                `animate-gradient inline bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
              )}
            >
              Powered by AI
            </span>
            <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedGradientText>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-[40px] font-semibold leading-[normal] text-neutrals-900 sm:text-5xl 2xl:font-bold 3xl:text-[64px]"
        >
          <span>IBDP Previous year</span>
          <span className="flex flex-wrap items-center justify-center leading-[110%] xs:flex-row xs:gap-4">
          solved<span className="bg-[#FFE55E] px-1"> question papers</span>
          </span>
        </motion.h1>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="flex h-[44px] cursor-pointer items-center rounded-[50px] bg-[#6947BF] px-[24px] text-lg font-bold leading-[140%] tracking-[0.18px] text-white shadow-[0_2px_8px_0px_rgba(0,0,0,0.04)] 3xl:h-[56px] 3xl:text-[20px]">
          Try now for free
        </div>
      </motion.div>
    </div>
  )
}
