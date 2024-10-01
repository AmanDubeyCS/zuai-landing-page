'use client'
import React from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export function ShortVideos() {
  const tags = ["IB Chemistry SL", "IB Biology SL", "IB Math AI SL"]
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <h2 className="text-[32px] font-bold leading-[normal] tracking-[0.16px] text-neutrals-900 sm:tracking-[0.28px]">
          PYQ Shorts{" "}
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
      <div className="scrollbar-none flex gap-6 overflow-x-scroll">
        {items.map(( index) => (
          <Dialog key={index}>
            <DialogTrigger>
              <div className="flex max-w-[200px] cursor-pointer flex-col gap-2">
                <div className="h-[360px] w-[200px] overflow-hidden rounded-lg bg-[#D9D9D9]"></div>
                <div className="flex flex-col gap-1 text-left">
                  <p className="line-clamp-2 text-wrap text-[18px] font-medium">
                    IB Biology 2023 November SL Paper 1 TZ 1 - Full past paper
                    solution with ZuAI
                  </p>
                  <p className="text-[14px] text-[#AAAAAA]">15 views</p>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className=" max-w-fit h-[710px] overflow-hidden rounded-lg border-none">
              <iframe
                className="h-full rounded-lg overflow-hidden"
                width={363}
                height={850}
                src="https://www.youtube.com/embed/GCwCTRInuXU?si=a3yvzxnzDuQzQ_O5"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  )
}
