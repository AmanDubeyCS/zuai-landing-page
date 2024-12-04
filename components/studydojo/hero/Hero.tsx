import React from "react"
import { CTAButton } from "../CTAButton"

export function Hero() {
  return (
    <section
      id="hero-container"
      className="relative flex h-dvh max-h-[820px] min-h-[560px] w-full items-center overflow-hidden bg-white"
    >
      {/* <div className="hero-block absolute inset-0 bg-white"></div> */}
      <div className="mx-auto flex h-full max-w-7xl flex-col justify-center px-6 pb-16 pt-0 sm:pb-24 lg:px-8 lg:pt-28">
        <div className="relative mx-auto max-w-4xl">
          <img
            alt="hero Image"
            width="280"
            height="280"
            className="mx-auto my-5 md:hidden"
            src="https://www.zuai.co/_next/static/media/zuai-dashboard-preview.6479a69b.png"
          />
          <div className="flex flex-col items-center">
            <h1 className="font-title mx-auto max-w-xl text-center text-4xl font-bold tracking-tighter text-black transition-all sm:text-7xl lg:max-w-3xl lg:text-[88px]">
              Keep your students ahead of the{" "}
              <span className="whitespace-nowrap text-brand-primary underline decoration-brand-primary md:block">
                AI curve
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-center text-lg font-medium leading-6 tracking-tight text-black/60 sm:mt-8 sm:text-2xl sm:leading-normal lg:max-w-3xl">
              RevisionDojo personalizes exam prep for 90% of IBDP students
            </p>
            <CTAButton />
          </div>
        </div>
      </div>
    </section>
  )
}
