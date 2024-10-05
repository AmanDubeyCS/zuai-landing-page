"use client"
import React from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

// const fetchYouTubeShorts = async (channelId: any, apiKey: any) => {
//   try {
//     // Step 1: Search for videos on the channel with short duration (< 4 mins)
//     const searchResponse = await fetch(
//       `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=50&type=video&videoDuration=short&key=${apiKey}`
//     )
//     const searchData = await searchResponse.json()

//     // Extract video IDs from search results
//     const videoIds = searchData.items.map((item: any) => item.id.videoId).join(",")

//     // Step 2: Get detailed video info (including duration) for filtering
//     const videoDetailsResponse = await fetch(
//       `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${videoIds}&key=${apiKey}`
//     )
//     const videoDetailsData = await videoDetailsResponse.json()

//     // Step 3: Filter videos by duration (< 60 seconds)
//     const shortVideos = videoDetailsData.items.filter((video: any) => {
//       const duration = video.contentDetails.duration
//       const match = duration.match(/PT(\d+M)?(\d+S)?/)
//       const minutes = match[1] ? parseInt(match[1].replace("M", "")) : 0
//       const seconds = match[2] ? parseInt(match[2].replace("S", "")) : 0
//       return minutes * 60 + seconds < 60 // Less than 60 seconds
//     })

//     return shortVideos
//   } catch (error) {
//     console.error("Error fetching Shorts:", error)
//   }
// }

// const getShortVideos = async () => {
//   const channelId = "UCrzMQ38sRyAx_PIETNJjN-Q"
//   const apiKey = "AIzaSyDRoqhL9_pd9CeSa2Z6RECcmlCPB8dEass"

//   const allShortVideos = await fetchYouTubeShorts(channelId, apiKey)  // Await the result
//   return allShortVideos
//     // This will print the actual list of shorts
// };

export function ShortVideos() {
  const tags = ["IB Chemistry SL", "IB Biology SL", "IB Math AI SL"]
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // const shortVideos = getShortVideos();
  // console.log(shortVideos);
  // const channelId = "UCrzMQ38sRyAx_PIETNJjN-Q"
  // const apiKey = "AIzaSyDRoqhL9_pd9CeSa2Z6RECcmlCPB8dEass"
  // const data = fetchYouTubeShorts(channelId, apiKey)

  // console.log(data)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <h2 className="text-[32px] font-bold leading-[normal] tracking-[0.16px] text-neutrals-900 sm:tracking-[0.28px]">
          PYQ Shorts{" "}
        </h2>
        <div className="flex flex-wrap gap-4">
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
        {items.map((index) => (
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
            <DialogContent className="h-[710px] max-w-fit overflow-hidden rounded-lg border-none">
              <iframe
                className="h-full overflow-hidden rounded-lg"
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
