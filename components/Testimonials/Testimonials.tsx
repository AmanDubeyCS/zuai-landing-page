import React from "react";
import { MarqueeDemo } from "./ReviewCard";

export function Testimonials() {
  return (
    <div className="flex flex-col gap-[30px] justify-center items-center">
      <h2 className="text-center text-[32px] font-bold leading-[normal] tracking-[0.16px] text-neutrals-900 sm:text-[56px] sm:tracking-[0.28px]">
        What they say ❤️
      </h2>
      <MarqueeDemo />
    </div>
  );
}
