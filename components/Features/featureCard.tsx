import React from "react"
import Image, { StaticImageData } from "next/image"
import flashCards from "@/assets/Flashcard.png"
import { Icons } from "../icons"

interface Props {
  image: StaticImageData
  title: string
  description: string
  points: string[]
}

export function FeatureCard({ image, title, description, points }: Props) {
  return (
    <div className="grid w-full place-items-center">
      <div
        id="card-container"
        className="flex size-fit max-w-[864px] flex-col-reverse items-start overflow-hidden rounded-[32px] border border-neutrals-100 bg-white sm:flex-row"
      >
        <div className="flex h-auto max-w-[346px] shrink-0 flex-col items-start justify-between gap-3 self-stretch p-2 sm:w-[320px] sm:max-w-[auto] sm:p-0">
          <div className="flex flex-col items-start gap-3 self-stretch sm:px-[32px] sm:py-[24px]">
            <div className="flex flex-col items-start gap-1 self-stretch px-2 sm:gap-3">
              <div className="flex flex-row items-center gap-[2px] self-stretch sm:flex-col sm:items-start">
                <Image
                  src={flashCards}
                  alt="card"
                  className="size-[34px] shrink-0"
                />
                <p className="text-[24px] font-bold leading-[normal] text-neutrals-800 sm:text-[32px]">
                  {title}
                </p>
              </div>
              <p className="text-sm font-normal leading-[normal] text-neutrals-700 sm:text-base">
                {description}
              </p>
            </div>
            <ul className="list-disc pl-[26px] text-xs font-normal leading-[normal] text-neutrals-800 sm:h-auto sm:overflow-hidden sm:text-base">
              {points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-start gap-3 self-stretch sm:py-[24px] sm:pl-[32px] sm:pr-[20px]">
            <p className="flex items-center justify-center gap-2.5 self-stretch text-base font-extrabold leading-[normal] text-neutrals-700 sm:justify-start sm:p-1.5">
              {" "}
              <span className="text-brand-primary">10,000+</span> {} coursework
              evaluated
            </p>
            <button className="flex h-[44px] w-full items-center justify-between rounded-[24px] bg-[#6947BF] px-[24px] text-lg font-bold leading-[140%] tracking-[0.18px] text-white shadow-[0_2px_8px_0px_rgba(0,0,0,0.04)] sm:hidden sm:w-fit">
              Count me in! <Icons.arrowRightIcon className="size-7" />
            </button>
            <button className="hidden h-[44px] w-full items-center justify-center rounded-[24px] bg-[#6947BF] px-[24px] text-lg font-bold leading-[140%] tracking-[0.18px] text-white shadow-[0_2px_8px_0px_rgba(0,0,0,0.04)] sm:flex sm:w-fit">
              Count me in!
            </button>
          </div>
        </div>
        <Image
          src={image}
          alt="image"
          width={500}
          height={500}
          className="size-auto max-w-[347px] sm:hidden sm:h-[656px] sm:w-[inherit] sm:max-w-[inherit] sm:flex-1"
        />

        <div className="hidden h-[656px] w-full items-center justify-center overflow-hidden sm:relative sm:flex">
          <Image src={image} alt="image" className="mx-auto h-full" />
        </div>
      </div>
    </div>
  )
}
