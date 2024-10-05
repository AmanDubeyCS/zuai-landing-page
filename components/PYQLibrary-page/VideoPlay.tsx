import React from "react"

export function VideoPlay({
  videoID,
  title,
  description,
}: {
  videoID: string
  title: string
  description: string
}) {
  return (
    <div className="flex flex-1 flex-col gap-8">
      <div className="overflow-hidden rounded-lg bg-[#D9D9D9]">
        <iframe
          className="aspect-video h-auto"
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoID}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex flex-col gap-3 text-left">
        <p className="line-clamp-2 text-wrap text-[20px] font-medium">
          {title}
        </p>
        <p className="line-clamp-3 rounded-lg text-[14px] text-[#AAAAAA]">
          {description}
        </p>
      </div>
    </div>
  )
}
