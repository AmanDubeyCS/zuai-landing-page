import React from "react"

export function Hero() {
  return (
    <div className="flex max-w-[913px] flex-col gap-3 text-[#1E2026]">
      <div className="w-full text-[32px] font-bold leading-[140%]">
        This is a Heading, This is a Heading, This is a Heading
      </div>
      <div className="flex max-w-[642px] flex-col gap-1">
        <div className="w-full text-[20px]">
          This is a sub heading, This is a sub heading
        </div>
        <div className="w-full text-[16px]">This is Description</div>
      </div>
    </div>
  )
}
