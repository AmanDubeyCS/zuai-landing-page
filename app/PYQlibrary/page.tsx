import { Hero } from "@/components/PYQLibrary-page/Hero/Hero"
import React from "react"

export default async function page() {
  return (
    <div className="flex flex-col gap-8">
      <Hero />
      <div className="h-px w-full bg-black"></div>
      {/* <ShortVideos /> */}
    </div>
  )
}
