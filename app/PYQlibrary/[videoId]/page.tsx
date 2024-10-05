import { SingleVideopage } from "@/components/PYQLibrary-page/SingleVideopage"
import { config } from "@/youtubeApiConfig"
import React from "react"

interface Props {
  params: {
    videoId: string
  }
}

export default async function page({ params }: Props) {
  const playList = await fetch(
    config.getVideosFromPlaylist(params.videoId)
  ).then((res) => res.json())

  return (
    <div className="flex flex-col gap-8">
      <SingleVideopage videos={playList.items} />
      <div className="h-px w-full bg-black"></div>
    </div>
  )
}
