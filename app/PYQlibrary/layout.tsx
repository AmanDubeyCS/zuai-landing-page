import { VideoList } from "@/components/PYQLibrary-page/videoList/VideoList"
import { config } from "@/youtubeApiConfig"
import React from "react"

interface RootLayoutProps {
  children: React.ReactNode
}
export default async function layout({ children }: RootLayoutProps) {
  // Fetch the playlist
  const playListResponse = await fetch(config.getYoutubePlaylist)
  const playList = await playListResponse.json()

  // Fetch videos for each playlist
  const videoFetchPromises = playList.items.map(async (playlist: any) => {
    const videoResponse = await fetch(
      `${config.getVideosFromPlaylist(playlist.id)}`
    )
    const videoData = await videoResponse.json()
    return videoData.items
  })

  // Wait for all the videos to be fetched
  const videos = await Promise.all(videoFetchPromises)
  const allVideos = videos.flat()

  const sortedVideos = allVideos.sort((a: any, b: any) => {
    return (
      new Date(b.snippet.publishedAt).getTime() -
      new Date(a.snippet.publishedAt).getTime()
    )
  })

  return (
    <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 bg-white p-8">
      {children}
      {playList && videos && (
        <VideoList playlist={playList.items} videos={sortedVideos} />
      )}
    </div>
  )
}
