import React from "react"

export function FormulBooklet() {
  return (
    <div className="flex w-full items-center justify-center text-white">
      <div className="relative h-fit max-w-[992px] rounded-[5px] bg-[#586ee0] p-16 pr-[160px]">
        <div className="">
          <div className="mb-5 text-[38px]">Formula Booklet</div>
          <div className="mb-12 text-lg leading-[normal]">
            <p>
              IB has released an official Formula Booklet (also referred to as
              “Data Booklet”) to easily refer to formulas when solving
              questions. We recommend that students refer to AA SL/HL Formula
              Booklet while practicing exam question in order to get familiar
              with key concepts and applicable formulas.
            </p>
          </div>
          <div className="w-full">
            <a
              className="rounded-[5px] bg-white px-[60px] py-[15px] text-base font-bold text-[#586ee0]"
              href="/images/subjects/files/mathematics_analysis_and_approach_formula_booklet.pdf"
              target="_blank"
            >
              Download PDF
            </a>
          </div>
        </div>
        <img
          src={
            "https://helloblen.com/images/learning/formula_booklet/mathematics_ai_sl.png"
          }
          alt="img"
          width={140}
          height={330}
          className="absolute right-0 top-0 hidden md:flex"
        />
      </div>
    </div>
  )
}
