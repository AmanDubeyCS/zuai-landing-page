"use client"
import { useRouter } from "next/navigation"
import React from "react"
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"

export function VideoList({ videopage = false }: { videopage?: boolean }) {
  const router = useRouter()
  const tags = ["IB Chemistry SL", "IB Biology SL", "IB Math AI SL"]
  const items = [1, 2, 3, 4, 5, 6, 7, 8]

  const handleClick = (videoId: number) => {
    if (videopage) {
      router.push(`${videoId}`)
    } else {
      router.push(`PYQlibrary/${videoId}`)
    }
  }
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <h2 className="text-[32px] font-bold leading-[normal] tracking-[0.16px] text-neutrals-900 sm:tracking-[0.28px]">
          PYQ Videos{" "}
        </h2>
        <div className="flex gap-4 flex-wrap">
          {tags.map((tags, index) => (
            <div
              key={index}
              className="flex h-[32px] w-[178px] cursor-pointer items-center justify-center rounded-[32px] border border-[#D9D9D9] text-[18px] font-medium"
            >
              {tags}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-6">
        {items.map((items, index) => (
          <div
            className="flex max-w-[320px] cursor-pointer flex-col gap-2"
            onClick={() => handleClick(index)}
          >
            <div className="h-[180px] w-[320px] overflow-hidden rounded-lg bg-[#D9D9D9]"></div>
            <div className="flex flex-col gap-1 text-left">
              <p className="line-clamp-2 text-wrap text-[18px] font-medium">
                IB Biology 2023 November SL Paper 1 TZ 1 - Full past paper
                solution with ZuAI
              </p>
              <p className="text-[14px] text-[#AAAAAA]">
                15 views : 3 days ago
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* <Dialog>
        <DialogTrigger>
          <div className="flex max-w-[320px] flex-col gap-2">
            <div className="h-[180px] w-[320px] overflow-hidden rounded-lg bg-slate-400"></div>
            <div className="flex flex-col gap-1 text-left">
              <p className="line-clamp-2 text-wrap text-[18px] font-medium ">
                IB Biology 2023 November SL Paper 1 TZ 1 - Full past paper
                solution with ZuAI
              </p>
              <p className="text-[14px] text-[#AAAAAA]">
                15 views : 3 days ago
              </p>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-[1200px] h-auto border-none rounded-lg overflow-hidden">
          <iframe
            className="max-w-[1200px] h-auto aspect-video "
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/IByY2bfSxDk?si=HDFVBkIG3B7bb8jt"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </DialogContent>
      </Dialog> */}
    </div>
  )
}
