import React from "react"
import { MarqueeDemo } from "./ReviewCard"

export function Testimonials() {
  return (
    <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center gap-[30px] pt-20">
      <h2 className="text-center text-[32px] font-bold leading-[normal] tracking-[0.16px] text-neutrals-900 sm:text-[56px] sm:tracking-[0.28px]">
        What the learners say!
      </h2>
      <MarqueeDemo />
    </div>
  )
}
