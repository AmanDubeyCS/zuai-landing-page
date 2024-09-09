import { FadeInSection } from "@/components/fadein-section";
import { Faq } from "@/components/Faq/Faq";
import { Features } from "@/components/Features/Features";
import { Hero } from "@/components/Hero/Hero";
import { HeroImage } from "@/components/Hero/heroImage";
import { NewsLetter } from "@/components/Newsletter/NewsLetter";
import { Testimonials } from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <main className="mx-auto flex flex-col space-y-[80px] bg-white lg:space-y-0">
        <Hero />
        <FadeInSection animate={false} className="bg-white" delay={0.5}>
          <HeroImage />
        </FadeInSection>
        <div className="relative z-50 space-y-[80px] bg-white md:space-y-[50px] lg:pt-[50px]">
          <FadeInSection animate={false} className="bg-white" delay={0.5}>
            <Testimonials />
          </FadeInSection>
          <FadeInSection animate={false} className="bg-white" delay={0.5}>
            <Features />
          </FadeInSection>
          <FadeInSection animate={false} className="bg-white" delay={0.5}>
            <Faq />
          </FadeInSection>
          <FadeInSection animate={false} className="bg-white" delay={0.5}>
            <NewsLetter />
          </FadeInSection>
        </div>
      </main>
    </>
  );
}
