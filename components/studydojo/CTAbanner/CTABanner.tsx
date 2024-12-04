import React from "react"
import earth from "@/assets/earth.webp"
import Image from "next/image"
import { CTAButton } from "../CTAButton"
export function CTABanner() {
  return (
    <div className="mx-auto mb-32 max-w-5xl px-4">
      <div
        className="relative isolate w-full max-w-5xl overflow-hidden rounded-3xl bg-[linear-gradient(295deg,_#f8b50052_-0.02%,_#fceab552_99.98%)] px-6 py-20 text-white"
        style={{ opacity: 1, transform: "none" }}
      >
        <div className="absolute inset-0 -z-10" style={{ opacity: 1 }}>
          <Image
            alt=""
            loading="lazy"
            className="absolute top-[80px] size-full object-cover"
            src={earth}
          />
        </div>
        <h2
          className="mx-auto max-w-xl text-center text-5xl font-bold text-black"
          style={{ opacity: 1, transform: "none" }}
        >
          Pioneer AI learning at your school today
        </h2>
        <CTAButton />
      </div>
    </div>
  )
}
