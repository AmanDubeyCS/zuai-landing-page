import { VideoList } from "@/components/PYQLibrary-page/videoList/VideoList"
import { config } from "@/youtubeApiConfig"
import React from "react"

interface RootLayoutProps {
  children: React.ReactNode
}
export default async function layout({ children }: RootLayoutProps) {
  const playList = await fetch(config.getYoutubePlaylist).then((res) =>
    res.json()
  )
  return (
    <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 bg-white p-8">
      {children}
      {playList && <VideoList playlist={playList.items} />}
    </div>
  )
}
