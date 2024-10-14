import { Hero } from "@/components/PYQLibrary-page/Hero/Hero"
import React from "react"

export default async function page() {
  return (
    <div className="flex flex-col gap-8">
      <div className="absolute right-0 top-[24px]">
      <div className="blur-[42px]">
        <div
          className="h-12 w-[calc(100vw-74px)] opacity-40"
          style={{
            clipPath: "ellipse(50% 50% at 50% 50%)",
            backgroundImage: "linear-gradient(to right, #ffaf38, #ff6363, #6000ff)"
          }}
        ></div>
      </div>
    </div>
      <Hero />
    </div>
  )
}
