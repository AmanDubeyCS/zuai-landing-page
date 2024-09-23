"use client"
import React, { useRef } from "react"
import { useScroll, useTransform, motion, MotionValue } from "framer-motion"
import Image from "next/image"
import DashboardBGImage from "@/assets/hero-bg.svg"

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode
  children: React.ReactNode
}) => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
  })
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1]
  }

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0])
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions())
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <div
      className="relative flex h-fit items-center justify-center p-2"
      ref={containerRef}
    >
      <div
        className="relative w-full bg-transparent lg:pt-32"
        style={{
          perspective: "1000px",
        }}
      >
        <div className="absolute inset-0 z-[9] hidden place-items-center bg-transparent pt-[400px] md:grid">
          <Image
            src={DashboardBGImage}
            alt="Backgroud Image"
            width={1024}
            height={768}
            className="h-auto min-h-[510px] w-full object-cover blur-[80px]"
          />
        </div>
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  )
}

export const Header = ({
  translate,
  titleComponent,
}: {
  translate: MotionValue
  titleComponent: React.ReactNode
}) => {
  return (
    <>
      <motion.div
        style={{
          translateY: translate,
        }}
        className="div mx-auto hidden max-w-5xl bg-transparent text-center lg:block"
      >
        {titleComponent}
      </motion.div>
      <motion.div className="div mx-auto block max-w-5xl bg-transparent text-center lg:hidden">
        {titleComponent}
      </motion.div>
    </>
  )
}

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>
  scale: MotionValue<number>
  translate: MotionValue<number>
  children: React.ReactNode
}) => {
  return (
    <>
      <motion.div
        style={{
          rotateX: rotate,
          scale,
        }}
        className="relative z-40 mx-auto -mt-12 hidden w-full max-w-5xl rounded-[30px] border-4 border-[#6C6C6C] bg-[#222222] p-2 md:p-6 lg:flex"
      >
        <div className="relative z-30 size-full overflow-hidden rounded-2xl bg-gray-100 md:rounded-2xl dark:bg-zinc-900">
          {children}
        </div>
      </motion.div>
      <motion.div className="relative z-40 mx-auto -mt-12 flex w-full max-w-5xl rounded-[30px] border-4 border-[#6C6C6C] bg-[#222222] p-2 md:p-6 lg:hidden">
        <div className="relative z-30 size-full overflow-hidden rounded-2xl bg-gray-100 md:rounded-2xl dark:bg-zinc-900">
          {children}
        </div>
      </motion.div>
    </>
  )
}
