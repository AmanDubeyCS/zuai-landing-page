import { VideoPlay } from "@/components/PYQLibrary-page/VideoPlay"
import { config } from "@/youtubeApiConfig"
import React from "react"

interface Props {
  params: {
    Video: string
  }
}

export default async function page({ params }: Props) {
  const video = await fetch(config.getVideoFromVideoId(params.Video)).then(
    (res) => res.json()
  )

  return (
    <div className="flex flex-col gap-8">
      <VideoPlay
        title={video.items[0].snippet.title}
        videoID={params.Video}
        description={video.items[0].snippet.description}
      />
      {/* <SingleVideopage videos={video.items} /> */}
      <div className="h-px w-full bg-black"></div>
    </div>
  )
}
