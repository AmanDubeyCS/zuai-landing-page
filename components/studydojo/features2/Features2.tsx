import React from "react"
// import MockTopic from "@/assets/Mock-Topi-Selection.png"
import aibuddies from "@/assets/ai-buddies.webp"
import badge from "@/assets/badge.webp"
import examPrep from "@/assets/examPrep.png"
import template from "@/assets/templates.png"
import cardBackground from "@/assets/card-background.webp"
import Image from "next/image"
export function Features2() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <h1 className="text-balance text-center text-4xl font-bold tracking-tighter text-gray-900 sm:text-5xl md:text-6xl">
        Everything your students need to do their best work.
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-center text-lg font-medium leading-6 tracking-tight text-black/60 sm:mt-8 sm:text-2xl sm:leading-normal lg:max-w-3xl">
        RevisionDojo is already used by 90% of all IBDP students, get a bulk
        discount for yours and see real results.
      </p>
      <div className="my-48 space-y-24">
        <section
          className="grid items-center gap-x-12 gap-y-8 md:grid-cols-2"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="md:order-1" style={{ opacity: 1, transform: "none" }}>
            <h2 className="text-4xl font-bold md:text-5xl">
              AI Buddies for all Subjects
            </h2>
            <div className="mt-8 text-xl text-black/60">
              Expert AI buddies for all subjects to clear doubts, evaluate
              answers and helping with assignment.
            </div>
          </div>
          <div className="relative aspect-[3/2.25] overflow-hidden rounded-[32px] border border-neutrals-300 bg-[linear-gradient(180deg,_#6947BF_0%,_#6947BF_0%,_#A07FEE_100%)] md:order-2 md:aspect-[0] md:h-[360px]">
            <div className="z-10 size-full">
              <Image
                src={aibuddies}
                alt="ai buddies"
                className="inset-x-0 bottom-0 z-0 size-full object-cover object-center"
                priority={false}
                fetchPriority="low"
                loading="lazy"
                decoding="async"
              />
            </div>
            <Image
              width={380}
              height={380}
              src={cardBackground}
              alt="card-background"
              className="absolute left-0 top-0 z-0 size-full object-cover object-center mix-blend-plus-lighter"
            />
          </div>
          {/* <div className="md:order-2 w-[480px] h-[360px]" style={{ opacity: 1, transform: "none" }}>
        <Image
          alt=""
          loading="lazy"
          width="944"
          height="708"
          className="rounded-2xl"
          src={aibuddies}
          style={{ color: "transparent" }}
        />
      </div> */}
        </section>
        <section
          className="grid items-center gap-x-12 gap-y-8 md:grid-cols-2"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="md:order-2" style={{ opacity: 1, transform: "none" }}>
            <h2 className="text-4xl font-bold md:text-5xl">
              Get rewards for your hardwork
            </h2>
            <div className="mt-8 text-xl text-black/60">
              Earn badges with every level of learning, Compete with your
              friends.
            </div>
          </div>
          <div className="relative aspect-[3/2.25] overflow-hidden rounded-[32px] border-neutrals-200 bg-[#FCFBFD] p-8 md:order-1 md:aspect-[0] md:h-[360px]">
            <div className="z-10 size-full overflow-hidden">
              <Image
                src={badge}
                alt="badge"
                className="absolute inset-x-0 bottom-0 z-0 mx-auto h-auto object-center"
              />
            </div>
          </div>
          {/* <div className="md:order-1" style={{ opacity: 1, transform: "none" }}>
            <Image
              alt=""
              loading="lazy"
              width="944"
              height="708"
              className="rounded-2xl"
              src={badge}
              style={{ color: "transparent" }}
            />
          </div> */}
        </section>
        <section
          className="grid items-center gap-x-12 gap-y-8 md:grid-cols-2"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="md:order-1" style={{ opacity: 1, transform: "none" }}>
            <h2 className="text-4xl font-bold md:text-5xl">
              Army of AI Buddies
            </h2>
            <div className="mt-8 text-xl text-black/60">
              Productivity buddies to help increase your IQ and be more
              productive.
            </div>
          </div>
          <div className="relative aspect-[3/2.25] overflow-hidden rounded-[32px] border border-neutrals-300 bg-[linear-gradient(295deg,_#f8b50052_-0.02%,_#fceab552_99.98%)] p-8 md:order-2 md:aspect-[0] md:h-[360px]">
            <div className="z-10 size-full">
              <Image
                src={examPrep}
                alt="templates"
                className="absolute inset-x-0 bottom-0 z-0 mx-auto h-auto object-center"
              />
            </div>
            {/* <Image
              width={380}
              height={380}
              src={featureBG}
              alt="backgroun image"
              className="absolute left-0 top-0 z-[9] size-full object-cover object-center mix-blend-plus-lighter"
            /> */}
          </div>
          {/* <div className="md:order-2" style={{ opacity: 1, transform: "none" }}>
            <Image
              alt=""
              loading="lazy"
              width="944"
              height="708"
              className="rounded-2xl"
              src={examPrep}
              style={{ color: "transparent" }}
            />
          </div> */}
        </section>
        <section
          className="grid items-center gap-x-12 gap-y-8 md:grid-cols-2"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="md:order-2" style={{ opacity: 1, transform: "none" }}>
            <h2 className="text-4xl font-bold md:text-5xl">
              Prepare for exams 2x faster
            </h2>
            <div className="mt-8 text-xl text-black/60">
              AI buddies create infine mocks, questions backs and resolve every
              doubt you have.
            </div>
          </div>
          <div className="relative aspect-[3/2.25] overflow-hidden rounded-[32px] border border-neutrals-200 bg-[#FCFBFD] md:order-1 md:aspect-[0] md:h-[360px]">
            <div className="z-10 size-full">
              <Image
                src={template}
                alt="Exam Prep"
                className="inset-x-0 bottom-0 z-0 h-full object-cover object-center"
              />
            </div>
          </div>
          {/* <div className="md:order-1" style={{ opacity: 1, transform: "none" }}>
            <Image
              alt=""
              loading="lazy"
              width="944"
              height="708"
              className="rounded-2xl"
              src={template}
              style={{ color: "transparent" }}
            />
          </div> */}
        </section>
      </div>
    </div>
  )
}
