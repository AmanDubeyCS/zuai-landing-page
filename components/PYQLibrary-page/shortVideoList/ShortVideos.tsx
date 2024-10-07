"use client"
import React, { useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import data from "@/components/PYQLibrary-page/shortsData.json"
import { usePathname } from "next/navigation"

// const fetchYouTubeShorts = async (channelId, apiKey) => {
//   let allShortVideos = [];
//   let nextPageToken = '';  // Initially empty to start fetching the first page

//   try {
//     // Continue fetching while there's a nextPageToken
//     do {
//       // Step 1: Search for videos on the channel with short duration (< 4 mins)
//       const searchResponse = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=50&type=video&videoDuration=short&pageToken=${nextPageToken}&key=${apiKey}`);
//       const searchData = await searchResponse.json();

//       // Extract video IDs from search results
//       const videoIds = searchData.items.map(item => item.id.videoId).join(',');

//       // Step 2: Get detailed video info (including duration) for filtering
//       const videoDetailsResponse = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails&id=${videoIds}&key=${apiKey}`);
//       const videoDetailsData = await videoDetailsResponse.json();

//       // Step 3: Filter videos by duration (< 60 seconds)
//       const shortVideos = videoDetailsData.items.filter(video => {
//         const duration = video.contentDetails.duration;
//         const match = duration.match(/PT(\d+M)?(\d+S)?/);
//         const minutes = match[1] ? parseInt(match[1].replace('M', '')) : 0;
//         const seconds = match[2] ? parseInt(match[2].replace('S', '')) : 0;
//         return minutes * 60 + seconds < 60;  // Less than 60 seconds
//       });

//       // Step 4: Append these Shorts to the full list
//       allShortVideos = [...allShortVideos, ...shortVideos];

//       // Get the next page token (if any)
//       nextPageToken = searchData.nextPageToken || '';

//     } while (nextPageToken);  // Continue fetching until no nextPageToken is present

//     return allShortVideos;
//   } catch (error) {
//     console.error('Error fetching Shorts:', error);
//   }
// };

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
//       `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails&id=${videoIds}&key=${apiKey}`
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
//   fetchYouTubeShorts(channelId, apiKey).then(allShortVideos => console.log(allShortVideos));
//   const allShortVideos = await fetchYouTubeShorts(channelId, apiKey)  // Await the result
//   return allShortVideos
// };

export function ShortVideos() {
  const [activeVideo, setActiveVideo] = useState("")
  const pathname = usePathname()
  // const shortVideos = getShortVideos();
  // console.log(pathname)
  if (pathname.startsWith("/PYQlibrary/")) {
    return null
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <h2 className="text-[32px] font-bold leading-[normal] tracking-[0.16px] text-neutrals-900 sm:tracking-[0.28px]">
          PYQ Shorts{" "}
        </h2>
        {/* <div className="flex flex-wrap gap-4">
          {tags.map((tags, index) => (
            <div
              key={index}
              className="flex h-[32px] w-[178px] cursor-pointer items-center justify-center rounded-[32px] border border-[#D9D9D9] text-[18px] font-medium"
            >
              {tags}
            </div>
          ))}
        </div> */}
      </div>
      <div className="scrollbar-none flex gap-6 overflow-x-scroll">
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
      </div>
    </div>
  )
}
