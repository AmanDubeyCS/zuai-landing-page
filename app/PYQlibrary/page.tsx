import { Hero } from '@/components/PYQLibrary-page/Hero/Hero'
import { ShortVideos } from '@/components/PYQLibrary-page/shortVideoList/ShortVideos'
import { VideoList } from '@/components/PYQLibrary-page/videoList/VideoList'
import React from 'react'

export default function page() {
  return (
    <div className='w-full p-8 flex flex-col gap-8 bg-white max-w-[1440px] mx-auto'>
      <Hero />
      <div className='w-full h-px bg-black'></div>
      <VideoList />
      <ShortVideos />
    </div>
  )
}
