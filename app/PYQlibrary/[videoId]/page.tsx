import { SingleVideopage } from "@/components/PYQLibrary-page/SingleVideopage"
import { VideoList } from "@/components/PYQLibrary-page/videoList/VideoList"
import React from "react"

interface Props {
  params: {
    videoId: number
  }
}

export default function page({ params }: Props) {
    console.log(params)
  return (
    <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 bg-white p-8">
      <SingleVideopage />
      <div className="h-px w-full bg-black"></div>
      <VideoList videopage={true}/>
    </div>
  )
}
