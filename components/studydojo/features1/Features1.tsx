"use client"
import { useState, useEffect } from "react"
import EvaluationResult from "@/assets/EvaluationResult.png"
import AiBuddy from "@/assets/AiBuddy.png"
import Flashcard from "@/assets/Flashcard.png"
import QuestionBank from "@/assets/QuestionBank.png"
import mockExam from "@/assets/MockExam.png"
import expertNotes from "@/assets/expert-notes.png"

import Image from "next/image"

const features = [
  {
    title: "AI Buddies for all Subjects",
    image: AiBuddy,
  },
  {
    title: "Instant grading",
    image: EvaluationResult,
  },
  {
    title: "Smart test builder",
    image: mockExam,
  },
  {
    title: "Concise study notes",
    image: expertNotes,
  },
  {
    title: "Tailored practice questions",
    image: QuestionBank,
  },
  {
    title: "Syllabus specific flashcards",
    image: Flashcard,
  },
]

export const Features1 = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isManual, setIsManual] = useState(false) // Track manual clicks

  useEffect(() => {
    if (isManual) return // Skip auto-rotation if manually clicked

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % features.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [activeIndex, isManual])

  const handleTextClick = (index: number) => {
    setActiveIndex(index)
    setIsManual(true)
    setTimeout(() => {
      setIsManual(false)
    }, 10)
  }

  return (
    <>
      <div className="hidden lg:block">
        <div className="relative">
          <div className="flex h-screen items-center justify-center">
            <div className="mx-auto w-full max-w-5xl">
              <h2 className="mb-12 text-center text-5xl font-bold tracking-tighter lg:text-6xl">
                AI-powered learning without the gimmicks
              </h2>
              <div className="grid w-full items-center gap-8 md:grid-cols-2">
                {/* Text Section */}
                <div>
                  <div className="space-y-2">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        onClick={() => handleTextClick(index)}
                        className={`relative flex cursor-pointer items-center justify-between gap-4 rounded-2xl p-4 text-gray-500 transition-all ${
                          activeIndex === index
                            ? "!bg-[#6947bf]/[0.1] !text-brand-primary"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        <div className="text-2xl font-bold leading-[normal] -tracking-tight">
                          {feature.title}
                        </div>
                        {activeIndex === index && (
                          <div className="relative size-6">
                            <svg className="loader size-6" viewBox="0 0 36 36">
                              <circle
                                cx="18"
                                cy="18"
                                r="16"
                                fill="none"
                                className="stroke-[#6947bf]/[0.4]"
                                strokeWidth="4"
                              ></circle>
                              <circle
                                cx="18"
                                cy="18"
                                r="16"
                                fill="none"
                                className="animate-loader stroke-[#6947bf]/[0.6]"
                                strokeWidth="4"
                                strokeDasharray="100"
                                strokeDashoffset="100"
                                transform="rotate(-90 18 18)"
                              ></circle>
                            </svg>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image Section */}
                <div className="relative aspect-[3/4]">
                  <Image
                    alt={features[activeIndex].title}
                    src={features[activeIndex].image}
                    className="absolute inset-0 size-full rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-2xl lg:hidden">
        <div className="mx-auto w-full max-w-5xl px-4 py-16">
          <h2 className="mb-12 text-center text-4xl font-bold tracking-tighter">
            AI powered learning without the gimmicks
          </h2>
          <div className="space-y-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-3xl border-2 border-gray-200 p-2 pt-6"
              >
                <h3 className="mb-6 text-center text-[30px] font-bold">
                  {feature.title}
                </h3>
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    alt={feature.title}
                    loading="lazy"
                    className="rounded-2xl object-cover"
                    src={feature.image}
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      inset: "0px",
                      color: "transparent",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
