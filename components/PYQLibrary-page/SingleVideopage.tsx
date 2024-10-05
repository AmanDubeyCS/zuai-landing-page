"use client"
import React, { useState } from "react"

export function SingleVideopage({ videos }: any) {
  const [activeVideo, setActiveVideo] = useState(videos[0].snippet)
  return (
    <div className="flex gap-10">
      <div className="flex w-full max-w-[810px] flex-col gap-8">
        <div className="h-[450px] overflow-hidden rounded-lg bg-[#D9D9D9]">
          <iframe
            className="aspect-video h-auto max-w-[1200px]"
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${activeVideo.resourceId.videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex flex-col gap-3 text-left">
          <p className="line-clamp-2 text-wrap text-[20px] font-medium">
            {activeVideo.title}
          </p>
          <p className="line-clamp-3 max-w-[800px] rounded-lg text-[14px] text-[#AAAAAA]">
            {activeVideo.description}
          </p>
        </div>
      </div>
      <div className="scrollbar-none h-[560px] overflow-y-scroll">
        {videos.map((videos: any) => (
          <div
            key={videos.id}
            onClick={() => setActiveVideo(videos.snippet)}
            className="mb-1 flex cursor-default gap-4 rounded-lg p-2 hover:bg-slate-100"
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
  )
}
