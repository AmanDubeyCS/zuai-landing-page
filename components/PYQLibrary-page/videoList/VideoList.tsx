"use client"
import { Icons } from "@/components/icons"
import { cn } from "@/lib/utils"
import { usePathname, useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"

export function VideoList({
  playlist,
  videos,
}: {
  playlist: any
  videos: any
}) {
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
                "flex h-[32px] w-[178px] cursor-pointer items-center justify-center rounded-[32px] border border-[#D9D9D9] text-[18px] font-medium",
                tags === filter && "border-blue-500 bg-blue-100"
              )}
            >
              {tags}
            </div>
          ))}
        </div>
      </div>
      <div className="scrollbar-none flex gap-6 overflow-x-scroll">
        {list.map((playlist: any) => (
          <div
            key={playlist.id}
            className="flex max-w-[320px] cursor-pointer flex-col gap-2"
            onClick={() => handleClick(playlist.id)}
          >
            <div className="relative h-[180px] w-[320px] overflow-hidden rounded-lg bg-[#D9D9D9]">
              <img src={playlist.snippet.thumbnails.medium.url} alt="" />
              <p className="absolute bottom-2 right-2 flex items-center gap-1 rounded-lg bg-[#051C26CC] p-1 text-white">
                <Icons.playlistIcon className="text-white" />
                {playlist.contentDetails.itemCount} <span>videos</span>
              </p>
            </div>
            <div className="flex flex-col gap-1 text-left">
              <p className="line-clamp-2 text-wrap text-[18px] font-medium">
                {playlist.snippet.title}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="scrollbar-none flex gap-6 overflow-x-scroll">
        {videoList.map((video: any) => (
          <div
            key={video.id}
            className="flex max-w-[320px] cursor-pointer flex-col gap-2"
            onClick={() =>
              handleVideoClick(
                video.snippet.playlistId,
                video.snippet.resourceId.videoId
              )
            }
          >
            <div className="relative h-[180px] w-[320px] overflow-hidden rounded-lg bg-[#D9D9D9]">
              <img src={video.snippet.thumbnails.medium.url} alt="" />
            </div>
            <div className="flex flex-col gap-1 text-left">
              <p className="line-clamp-2 text-wrap text-[18px] font-medium">
                {video.snippet.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
