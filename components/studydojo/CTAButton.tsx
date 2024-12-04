import { cn } from "@/lib/utils"
import Link from "next/link"
import React from "react"

export function CTAButton({ classname }: { classname?: string }) {
  return (
    <div
      className={cn("mt-8 flex justify-center", classname)}
      style={{ opacity: 1, transform: "none" }}
    >
      <Link
        href={"/"}
        className={cn(
          "focus-visible:ring-accent-600/50 inline-flex w-fit items-center justify-center !rounded-full border-2 border-b-4 border-black/10 bg-brand-primary px-5 py-3 text-lg font-medium text-white ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 active:mt-0.5 active:border-b-2 disabled:cursor-not-allowed disabled:opacity-50"
        )}
      >
        Become a partner school
      </Link>
    </div>
  )
}
