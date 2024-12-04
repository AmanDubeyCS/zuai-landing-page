import { AiFeatures } from "@/components/studydojo/AiFeatures/AiFeatures"
import { CTABanner } from "@/components/studydojo/CTAbanner/CTABanner"
import { Features1 } from "@/components/studydojo/features1/Features1"
import { Features2 } from "@/components/studydojo/features2/Features2"
import { Hero } from "@/components/studydojo/hero/Hero"
import { TrustedBy } from "@/components/studydojo/hero/TrustedBy"
import { SecurityBanner } from "@/components/studydojo/securityBanner/SecurityBanner"
import { SubjectsList } from "@/components/studydojo/subjectsList/SubjectsList"
import React from "react"

export default function page() {
  return (
    <main>
      <Hero />
      <TrustedBy />
      <Features1 />
      <SubjectsList />
      <AiFeatures />
      <Features2 />
      <SecurityBanner />
      <CTABanner />
    </main>
  )
}
