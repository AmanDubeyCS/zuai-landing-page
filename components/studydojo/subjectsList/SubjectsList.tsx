import React from "react"
import { SubjectMarquee } from "./SubjectsMarquee"

export function SubjectsList() {
  return (
    <div className="mx-auto my-32 w-full max-w-7xl overflow-hidden px-0">
      <h2 className="mb-16 mt-2 text-center text-5xl font-bold tracking-tighter lg:text-7xl">
        Every subject in one place
      </h2>
      <SubjectMarquee />
    </div>
  )
}
