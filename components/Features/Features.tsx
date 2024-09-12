'use client'
import React, { useEffect, useRef } from "react";
import { FeatureCard } from "./featureCard";
import StackCards from "./StackCard";
// import MockAnalysis from "@/assets/Analysis-Image.png"
// import MockExplanation from "@/assets/Mock-Explaination.png"
// import MockTopic from "@/assets/Mock-Topi-Selection.png"
import EvaluationResult from "@/assets/EvaluationResult.png"
import DetaildEval from "@/assets/detailedEval.png"
import UploadImg from "@/assets/uploadFile.png"
const cards = [
  {
    image: UploadImg,
    title: "Easy to use",
    description: "Expert evaluation on your IB Diploma coursework",
    points: [
      "Upload your Tok, EE or IA files to ZuAI",
      "Upload images, graphs & exhibitions",
      "Get 99% accurate predicted evaluation",
      "Get detailed suggestions to improve"
    ],
    numbers: "10,000",
  },
  {
    image: EvaluationResult,
    title: "Quick Evaluation",
    description: "Evaluate your coursework within minutes",
    points: [
      "Evaluate the strengths and weakness of your essay",
      "Get insights on how to improve your essay to score better",
      "Get access to sample coursworks",
    ],
    numbers: "10,000",
  },
  {
    image: DetaildEval,
    title: "Detailed Analysis",
    description: "Get detailed analysis of your coursework",
    points: [
      "Insights based on different scoring criteria's as per the curriculum",
      "Detailed insights on scope for improvement",
      "Feedback on writing style and language",
      "Get help with structure and methodology used for the coursework"
    ],
    numbers: "10,000",
  },
]

export function Features() {
  const stackRef = useRef(null);

  useEffect(() => {
    if (stackRef.current) {
      new StackCards(stackRef.current);
    }
  }, []);
  return (
    <div className="w-full flex flex-col gap-10 justify-center items-center py-[20px]">
      <ul className="stack-cards js-stack-cards w-full" ref={stackRef}>
        {cards.map((card) => (
          <li
            key={card.title}
            className="stack-cards__item js-stack-cards__item mb-20"
          >
            <FeatureCard
              image={card.image}
              title={card.title}
              description={card.description}
              points={card.points}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
