import React from "react"
import DashboardBGImage from "@/assets/hero-bg.svg"
import Image from "next/image"
import agents from "@/assets/agents.png"
export function GradeBoosting() {
  return (
    <div className="flex w-full items-center justify-center text-black">
      <div className="relative z-40 flex h-[450px] w-full max-w-[790px] flex-col justify-between overflow-hidden rounded-[5px]">
        <div className="absolute inset-0 z-[-9] hidden place-items-center bg-transparent pt-[300px] md:grid">
          <Image
            src={DashboardBGImage}
            alt="Backgroud Image"
            width={1224}
            height={400}
            className="h-auto w-full object-cover blur-[80px]"
          />
        </div>
        <div className="flex h-full flex-col justify-between px-[50px] py-[70px]">
          <p className="max-w-[350px] text-[48px] font-semibold leading-[normal]">
            Get 2x grades with your AI study buddy
          </p>
          <div className="flex h-fit w-[275px] rounded-xl bg-[#5430AD] p-2 text-[26px] font-bold text-white">
            <p className="flex-1">Try now</p>
            <div className="flex h-[35px] w-[150px] items-center justify-center rounded-xl bg-white text-black">
              Zuai.co
            </div>
          </div>
        </div>
        <Image
          src={agents}
          alt="agents"
          className="absolute right-0 top-0 h-full w-auto"
        />
      </div>
    </div>
  )
}
