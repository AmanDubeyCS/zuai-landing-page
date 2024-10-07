"use client"

import React from "react"
import Link from "next/link"
import { Icons } from "../icons"

export function Header() {
  return (
    <div className="sticky top-0 z-[31] w-full bg-white">
      <header className="mx-auto flex max-w-[1440px] items-center justify-center bg-white px-8 py-4">
        <div className="flex w-full items-center justify-between self-stretch">
          <Link href="/PYQlibrary" className="relative z-[11]">
            <Icons.zuAiLogoBeta className="h-[38px] w-auto" />
          </Link>
          <div className="flex h-[40px] cursor-pointer items-center rounded-[24px] bg-[#6947BF] px-[24px] text-base font-bold leading-[140%] tracking-[0.18px] text-white shadow-[0_2px_8px_0px_rgba(0,0,0,0.04)]">
            Get started - It&apos;s free
          </div>
        </div>
      </header>
    </div>
  )
}
