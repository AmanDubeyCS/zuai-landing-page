import React from "react"
import { CTAButton } from "../CTAButton"
import Image from "next/image"

export function AiFeatures() {
  return (
    <section
      id="ai-features"
      className="relative mx-auto my-48 rounded-[32px] bg-[rgb(23,23,23)] px-4 py-24 text-white sm:my-24 sm:px-8 lg:my-64 xl:max-w-7xl"
    >
      <div className="mx-auto w-full max-w-5xl space-y-16">
        <div>
          <h1 className="text-center text-5xl font-bold tracking-tighter lg:text-7xl">
            Pioneer education with an{" "}
            <span className="sm:whitespace-nowrap">
              <span className="text-gradient">AI-native platform</span> <br />
            </span>
            designed for student success
          </h1>
        </div>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-1 mx-auto max-w-xl">
            <div className="mt-8 space-y-6">
              {/* Feature 1 */}
              {[1, 2, 3, 4].map(() => (
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="grid size-12 place-items-center rounded-lg bg-white/10 text-2xl">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M19 3c-1.654 0-3 1.346-3 3 0 .502.136.968.354 1.385l-1.116 1.302A3.976 3.976 0 0 0 13 8c-.739 0-1.425.216-2.02.566L9.566 7.152A3.449 3.449 0 0 0 10 5.5C10 3.57 8.43 2 6.5 2S3 3.57 3 5.5 4.57 9 6.5 9c.601 0 1.158-.166 1.652-.434L9.566 9.98A3.972 3.972 0 0 0 9 12c0 .997.38 1.899.985 2.601l-1.692 1.692.025.025A2.962 2.962 0 0 0 7 16c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3c0-.476-.121-.919-.318-1.318l.025.025 1.954-1.954c.421.15.867.247 1.339.247 2.206 0 4-1.794 4-4a3.96 3.96 0 0 0-.439-1.785l1.253-1.462c.364.158.764.247 1.186.247 1.654 0 3-1.346 3-3s-1.346-3-3-3zM7 20a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM5 5.5C5 4.673 5.673 4 6.5 4S8 4.673 8 5.5 7.327 7 6.5 7 5 6.327 5 5.5zm8 8.5c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm6-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">
                      Cutting edge LLM technologies
                    </h3>
                    <p className="mt-2 text-base text-white/70">
                      Leveraging the latest in AI to provide intelligent,
                      adaptive learning experiences.
                    </p>
                  </div>
                </div>
              ))}
              {/* Add similar blocks for other features */}
            </div>
            <CTAButton classname="justify-start" />
          </div>
          <div className="order-0 relative mx-auto w-full max-w-xl lg:order-2">
            <Image
              alt="Technology stack"
              loading="lazy"
              width="960"
              height="1280"
              data-nimg="1"
              className="-my-16 sm:-my-24"
              src="https://www.revisiondojo.com/images/landing/dojo-stack.svg"
              style={{ color: "transparent" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
