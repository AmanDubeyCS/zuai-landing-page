"use client"
import Image from "next/image"
import React from "react"
import stanford from "@/assets/stanford.png"
import mit from "@/assets/mit.png"
import harvard from "@/assets/harvard.png"
import Caltech from "@/assets/caltech.webp"
import Marquee from "@/components/ui/marquee"

const data = [
  {
    name: "Stanford",
    image: stanford,
    class: "h-auto w-[104px] md:w-[200px]",
  },
  {
    name: "MIT",
    image: mit,
    class: "h-auto w-[82px] md:w-[156px]",
  },
  {
    name: "Harvard",
    image: harvard,
    class: "h-auto w-[100px] md:w-[191px]",
  },
  {
    name: "caltech",
    image: Caltech,
    class: "h-auto w-[88px] md:w-[168px]",
  },
]

export function TrustedBy() {
  return (
    <div className="-mt-24 py-12">
      <div className="relative mx-auto flex h-[96px] w-full max-w-5xl flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
        <Marquee className="[--duration:20s] [--gap:80px]">
          {data.map((contributors) => (
            <Image
              src={contributors.image}
              alt={contributors.name}
              className={contributors.class}
            />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-white"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-white"></div>
      </div>
      {/* <div className="flex h-[96px] w-full max-w-full items-center justify-center gap-20">
        <Image
          width={200}
          height={88}
          src={stanford.src}
          alt="Stanford"
          className="h-auto w-[104px] md:w-[200px]"
        />
        <Image
          width={156}
          height={88}
          src={mit.src}
          alt="MIT"
          className="h-auto w-[82px] md:w-[156px]"
        />
        <Image
          width={192}
          height={52}
          src={harvard.src}
          alt="Harvard"
          className="h-auto w-[100px] md:w-[191px]"
        />
        <Image
          width={168}
          height={61}
          src={Caltech}
          alt="caltech"
          className="h-auto w-[88px] md:w-[168px]"
        />
      </div> */}
    </div>
  )
}
