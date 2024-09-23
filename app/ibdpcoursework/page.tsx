import React from "react"
import { FadeInSection } from "@/components/fadein-section"
import { Faq } from "@/components/Faq/Faq"
import { Hero } from "@/components/Hero/Hero"
// import { HeroImage } from "@/components/Hero/heroImage";
import { NewsLetter } from "@/components/Newsletter/NewsLetter"
import { FormulBooklet } from "@/components/Formula-booklet/FormulBooklet"
import { GradeBoosting } from "@/components/GradeBoosting/GradeBoosting"
import { DifferenceInLearning } from "@/components/DifferenceInLearning/DifferenceInLearning"

export default function page() {
  return (
    <main className="mx-auto flex flex-col space-y-[80px] bg-white pb-6 lg:space-y-0">
      {/* <HeroContainer /> */}
      <Hero />
      {/* <FadeInSection animate={false} className="" delay={0.5}>
          <HeroImage />
        </FadeInSection> */}
      <div className="relative z-50 space-y-[80px] bg-white md:space-y-[50px] lg:pt-[50px]">
        <FadeInSection animate={false} className="bg-white" delay={0.3}>
          <FormulBooklet />
        </FadeInSection>
        <FadeInSection animate={false} className="bg-white" delay={0.3}>
          <GradeBoosting />
        </FadeInSection>
        <FadeInSection animate={false} className="bg-white" delay={0.3}>
          <DifferenceInLearning />
        </FadeInSection>
        <FadeInSection animate={false} className="bg-white" delay={0.3}>
          <Faq />
        </FadeInSection>
        <FadeInSection animate={false} className="bg-white" delay={0.3}>
          <NewsLetter />
        </FadeInSection>
      </div>
    </main>
  )
}
