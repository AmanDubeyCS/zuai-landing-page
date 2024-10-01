import React from "react"

export function SingleVideopage() {
  return (
    <div className="flex w-full flex-col gap-8">
      <div className="h-[450px] max-w-[810px] rounded-lg bg-[#D9D9D9] overflow-hidden">
        <iframe
          className="aspect-video h-auto max-w-[1200px]"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/IByY2bfSxDk?si=HDFVBkIG3B7bb8jt"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex flex-col gap-1 text-left">
        <p className="line-clamp-2 text-wrap text-[20px] font-medium">
          IB Biology 2023 November SL Paper 1 TZ 1 - Full past paper solution
          with ZuAI
        </p>
        <p className="text-[14px] text-[#AAAAAA]">15 views : 3 days ago</p>
      </div>
    </div>
  )
}
