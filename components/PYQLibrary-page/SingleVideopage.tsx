"use client"
import React, { useState } from "react"
import { VideoPlay } from "./VideoPlay"
import { cn } from "@/lib/utils"

export function SingleVideopage({ videos }: any) {
  const [activeVideo, setActiveVideo] = useState(videos[0].snippet)
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-10">
        <VideoPlay
          videoID={activeVideo.resourceId.videoId}
          title={activeVideo.title}
          description={activeVideo.description}
        />
        <div className="h-[560px] max-w-[400px] overflow-y-scroll">
          {videos.map((videos: any) => (
            <div
              key={videos.id}
              onClick={() => setActiveVideo(videos.snippet)}
              className={cn(
                "mb-1 flex cursor-default gap-4 rounded-lg p-2 hover:bg-slate-100",
                activeVideo.resourceId.videoId ===
                  videos.snippet.resourceId.videoId && "bg-slate-100"
              )}
            >
              <img
                src={videos.snippet.thumbnails.medium.url}
                alt=""
                className="h-[94px] w-[168px] rounded-lg"
              />
              <div className="flex flex-col justify-between pb-2">
                <p className="mb-1 line-clamp-3 max-w-[500px] text-[18px] font-medium">
                  {videos.snippet.title}
                </p>
                <p className="text-xs font-normal">
                  {videos.snippet.channelTitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
