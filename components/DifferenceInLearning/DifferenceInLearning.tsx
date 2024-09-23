import React from "react"

export function DifferenceInLearning() {
  const feat = [
    {
      img: "https://helloblen.com/images/subjects/icons/STRUCTURED-SOLUTIONS.png",
      header: "Structured Solutions",
      subheader:
        "Gain confidence with clear and crisp exemplary solutions for each question.",
    },
    {
      img: "https://helloblen.com/images/subjects/icons/TOPIC-BY-TOPIC-QUESTIONS.png",
      header: "Topic-by-Topic Questions",
      subheader:
        "Establish a solid foundation by focusing on exam-style questions concept by concept.",
    },
    {
      img: "https://helloblen.com/images/subjects/icons/KEY-CONCEPTS-2.png",
      header: "Key Concept",
      subheader:
        "Comprehend the key business terms and definitions in an easy-to-understand manner.",
    },
    {
      img: "https://helloblen.com/images/subjects/icons/EXHAUSTIVE-PRACTICE.png",
      header: "Exhaustive Practice",
      subheader:
        "Every time you re-attempt the same test, you would be challenged with new questions. Because little is not enough.",
    },
    {
      img: "https://helloblen.com/images/subjects/icons/UNLIMITED-RE-ATTEMPTS-2.png",
      header: "Unlimited Re-attempts",
      subheader:
        "Once you complete any test, just try to reattempt it and discover all-new set of questions to practice on.",
    },
  ]

  return (
    <div className="mx-auto max-w-[992px]">
      <div className="flex flex-col justify-center gap-[25px] text-black">
        <h2 className="mb-[30px] text-[38px] font-bold leading-none">
          What is different in learning Math AA SL with Blen?{" "}
        </h2>

        <div className="flex flex-col gap-[25px]">
          {feat.map((feat, index) => (
            <div key={index} className="flex">
              <div className="flex w-[140px] justify-center">
                <img
                  src={feat.img}
                  className="h-[39px] w-[44px]"
                  alt={feat.header}
                />
              </div>
              <div className="flex w-full flex-col gap-[25px] border-b pb-[25px]">
                <div className="text-[24px] font-bold">{feat.header} </div>
                <div className="text-lg">
                  <p>{feat.subheader}</p>{" "}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex w-full items-center justify-center">
          <div className="flex h-[50px] w-[190px] items-center justify-center rounded-[5px] bg-[#334AC0] text-base font-bold text-white">
            <a className="" href="/" target="_blank">
              Join now{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
