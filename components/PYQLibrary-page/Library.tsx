"use client"

import React from "react"

import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Icons } from "../icons"

export function Library({
  items,
  handleClick,
}: {
  items: any
  handleClick: any
}) {
  return (
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
        {items.map((playlist: any, index: number) => (
          <SwiperSlide
            key={index}
            onClick={() => handleClick(playlist.id)}
            className="!flex items-center justify-center"
          >
            <div
              key={playlist.id}
              className="flex max-w-[320px] cursor-pointer flex-col gap-2"
            >
              <div className="relative h-[180px] w-[320px] overflow-hidden rounded-lg bg-[#D9D9D9]">
                <img src={playlist.snippet.thumbnails.medium.url} alt="" />
                <p className="absolute bottom-2 right-2 flex items-center gap-1 rounded-lg bg-[#051C26CC] p-1 text-white">
                  <Icons.playlistIcon className="text-white" />
                  {playlist.contentDetails.itemCount} <span>videos</span>
                </p>
              </div>
              <div className="flex flex-col gap-1 text-left">
                <p className="line-clamp-1 text-wrap text-[18px] font-medium">
                  {playlist.snippet.title}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
