"use client";

import React from "react";
import Link from "next/link";
import { Icons } from "../icons";

export function Header() {
  return (
    <div className="sticky top-0 z-[51] w-full bg-white">
      <header className=" mx-auto flex max-w-[992px] items-center justify-center bg-white px-2 py-4">
        <div className="flex w-full items-center justify-between self-stretch">
          <Link href="/" className="relative z-[11]">
            <Icons.zuAiLogoBeta className="h-[38px] w-auto" />
          </Link>
          <div className="flex h-[40px] px-[24px] items-center rounded-[24px] bg-[#6947BF] shadow-[0_2px_8px_0px_rgba(0,0,0,0.04)] text-lg font-bold text-white leading-[140%] tracking-[0.18px] ">
            Count me in!
          </div>
        </div>
      </header>
    </div>
  );
}
