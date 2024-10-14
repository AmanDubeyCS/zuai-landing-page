"use client"
import React, { useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import data from "@/components/PYQLibrary-page/shortsData.json"
import { usePathname } from "next/navigation"
import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"

export function ShortVideos() {
  const [activeVideo, setActiveVideo] = useState("")
  const pathname = usePathname()
  if (pathname.startsWith("/PYQlibrary/")) {
    return null
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <h2 className="text-[32px] font-bold leading-[normal] tracking-[0.16px] text-neutrals-900 sm:tracking-[0.28px]">
          PYQ Shorts{" "}
        </h2>
      </div>
      <div
        style={{ width: "-webkit-fill-available" }}
        className="mx-auto max-w-[1400px] pt-2 text-center"
      >
        <Swiper
          slidesPerView={6}
          spaceBetween={20}
          navigation
          breakpoints={{
            140: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          modules={[Navigation]}
        >
          {data.map((data, index) => (
            <SwiperSlide
              key={index}
              className="!flex items-center justify-center"
            >
              <Dialog key={index}>
                <DialogTrigger onClick={() => setActiveVideo(data.id)}>
                  <div className="flex max-w-[200px] cursor-pointer flex-col gap-2">
                    <div className="h-[360px] w-[200px] overflow-hidden rounded-lg bg-[#D9D9D9]">
                      <img
                        src={data.snippet.thumbnails.maxres.url}
                        alt=""
                        className="h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-1 text-left">
                      <p className="line-clamp-2 text-wrap text-[18px] font-medium">
                        {data.snippet.title}
                      </p>
                      <p className="text-[14px] text-[#AAAAAA]">
                        {data.snippet.channelTitle}
                      </p>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="h-[710px] max-w-fit overflow-hidden rounded-lg border-none">
                  <iframe
                    className="h-full overflow-hidden rounded-lg"
                    width={363}
                    height={850}
                    src={`https://www.youtube.com/embed/${activeVideo}?&autoplay=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </DialogContent>
              </Dialog>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* <div className="scrollbar-none flex gap-6 overflow-x-scroll">
        {data.map((data, index) => (
          <Dialog key={index}>
            <DialogTrigger onClick={() => setActiveVideo(data.id)}>
              <div className="flex max-w-[200px] cursor-pointer flex-col gap-2">
                <div className="h-[360px] w-[200px] overflow-hidden rounded-lg bg-[#D9D9D9]">
                  <img
                    src={data.snippet.thumbnails.maxres.url}
                    alt=""
                    className="h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1 text-left">
                  <p className="line-clamp-2 text-wrap text-[18px] font-medium">
                    {data.snippet.title}
                  </p>
                  <p className="text-[14px] text-[#AAAAAA]">
                    {data.snippet.channelTitle}
                  </p>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="h-[710px] max-w-fit overflow-hidden rounded-lg border-none">
              <iframe
                className="h-full overflow-hidden rounded-lg"
                width={363}
                height={850}
                src={`https://www.youtube.com/embed/${activeVideo}?&autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </DialogContent>
          </Dialog>
        ))}
      </div> */}
    </div>
  )
}
