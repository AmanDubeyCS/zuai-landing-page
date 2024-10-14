"use client"
import { cn } from "@/lib/utils"
import { usePathname, useRouter } from "next/navigation"
import React, { useEffect, useRef, useState } from "react"
import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { Swiper as SwiperType } from "swiper/types"

import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Library } from "../Library"

export function VideoList({
  playlist,
  videos,
}: {
  playlist: any
  videos: any
}) {
  const swiperRef = useRef<SwiperType | null>(null)
  const [list, setList] = useState(playlist)
  const [videoList, setVideoList] = useState(videos)
  const [filter, setFilter] = useState("All")
  const router = useRouter()
  const pathname = usePathname()
  const tags = ["All", "IB Chemistry HL", "Physics HL", "Math AI SL"]

  const regex = /^\/PYQlibrary\/.*/
  const handleClick = (videoId: number) => {
    if (regex.test(pathname)) {
      router.push(`/PYQlibrary/${videoId}`)
    } else if (pathname.startsWith("/PYQlibrary/")) {
      router.push(`${videoId}`)
    } else {
      router.push(`PYQlibrary/${videoId}`)
    }
  }
  const handleVideoClick = (playlistID: string, video: string) => {
    router.push(`/PYQlibrary/${playlistID}/${video}`)
  }

  useEffect(() => {
    if (filter === "All") {
      setList(playlist)
      setVideoList(videos)
    } else {
      const filterList = playlist.filter((playlist: any) =>
        playlist.snippet.title.toLowerCase().includes(filter.toLowerCase())
      )
      const filterdVideoList = videos.filter((videos: any) =>
        videos.snippet.title
          .toLowerCase()
          .includes(
            filter === "IB Chemistry HL" ? "ib chem" : filter.toLowerCase()
          )
      )
      setList(filterList)
      setVideoList(filterdVideoList)
    }
  }, [filter, playlist, videos])

  return (
    <div className="z-30 flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <h2 className="text-[32px] font-bold leading-[normal] tracking-[0.16px] text-neutrals-900 sm:tracking-[0.28px]">
          PYQ Videos{" "}
        </h2>
        <div className="flex flex-wrap gap-4">
          {tags.map((tags, index) => (
            <div
              key={index}
              onClick={() => setFilter(tags)}
              className={cn(
                "flex h-[32px] w-fit cursor-pointer items-center justify-center rounded-[32px] border border-[#D9D9D9] px-3 text-[18px] font-medium",
                tags === filter && "border-blue-500 bg-blue-100"
              )}
            >
              {tags}
            </div>
          ))}
        </div>
      </div>
      <Library items={list} handleClick={(val: any) => handleClick(val)} />

      <div
        style={{ width: "-webkit-fill-available" }}
        className="mx-auto max-w-[1400px] pt-2 text-center"
      >
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          navigation
          breakpoints={{
            140: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          modules={[Navigation]}
        >
          {videoList.map((video: any) => (
            <SwiperSlide
              key={video.id}
              onClick={() =>
                handleVideoClick(
                  video.snippet.playlistId,
                  video.snippet.resourceId.videoId
                )
              }
              className="!flex items-center justify-center"
            >
              <div className="flex max-w-[320px] cursor-pointer flex-col gap-2">
                <div className="relative h-[180px] w-[320px] overflow-hidden rounded-lg bg-[#D9D9D9]">
                  <img src={video.snippet.thumbnails.medium.url} alt="" />
                </div>
                <div className="flex flex-col gap-1 text-left">
                  <p className="line-clamp-1 text-wrap text-[18px] font-medium">
                    {video.snippet.title}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
