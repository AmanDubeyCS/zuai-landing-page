"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion"

export function Faq() {
  const FAQs = [
    {
      question: "What is IBDP Coursework in ZuAI?",
      answer:
        "ZuAI’s IBDP Coursework feature provides expert evaluations and detailed feedback for IB coursework, including Theory of Knowledge (TOK), Extended Essay (EE), and Internal Assessments (IA). It helps students improve their coursework through quick and accurate evaluations.",
    },
    {
      question: "How does ZuAI’s IBDP Coursework evaluation work?",
      answer:
        "ZuAI allows you to upload your TOK, EE, or IA files, including images, graphs, and exhibitions, for expert review. You’ll receive a 99% accurate predicted evaluation and detailed suggestions on how to improve your coursework to meet IB standards.",
    },
    {
      question: "How quickly can I get my IBDP Coursework evaluated on ZuAI?",
      answer:
        "ZuAI’s Quick Evaluation feature allows you to receive an evaluation of your coursework within minutes. The AI analyzes the strengths and weaknesses of your essay and provides insights on how to improve your score.",
    },
    {
      question: "What types of coursework can ZuAI evaluate?",
      answer:
        "ZuAI evaluates a wide range of IB coursework, including Theory of Knowledge (TOK) essays, Extended Essays (EE), and Internal Assessments (IA) across various subjects. You can upload any related coursework and receive expert feedback.",
    },
    {
      question:
        "How accurate are the predicted evaluations for IBDP Coursework on ZuAI?",
      answer:
        "ZuAI’s AI is designed to provide 99% accurate predicted evaluations of your IBDP coursework. The platform’s evaluation is based on IB’s scoring criteria, giving you realistic insights into your performance and what areas need improvement.",
    },
    {
      question: "Can ZuAI provide detailed analysis of my IBDP Coursework?",
      answer:
        "Yes, ZuAI offers Detailed Analysis of your coursework. It provides insights based on different IB scoring criteria, offering feedback on writing style, structure, language, and methodology, ensuring that your work aligns with IB standards.",
    },
    {
      question: "Can ZuAI help me improve my IBDP Coursework?",
      answer:
        "Absolutely! ZuAI not only evaluates your coursework but also provides detailed suggestions for improvement. You will receive feedback on how to enhance your essay’s structure, language, and argumentation to improve your score.",
    },
    {
      question: "Does ZuAI provide access to sample IBDP Coursework?",
      answer:
        "Yes, ZuAI offers access to a vast collection of 10,000+ evaluated coursework samples. You can explore these examples to understand what a top-tier IB coursework looks like and apply those insights to your own work.",
    },
    {
      question: "What kind of feedback does ZuAI offer for IBDP Coursework?",
      answer:
        "ZuAI offers comprehensive feedback on your coursework, focusing on areas like structure, writing style, methodology, and how well you’ve met IB’s scoring criteria. This feedback helps you refine your coursework for better results.",
    },
    {
      question:
        "How can ZuAI help me with the structure of my IBDP Coursework?",
      answer:
        "ZuAI provides expert guidance on structuring your coursework. Whether it's your TOK essay, EE, or IA, ZuAI analyzes your work and suggests improvements in methodology, flow, and structure to ensure that your coursework meets IB requirements.",
    },
  ]

  return (
    <div className="mx-auto flex max-w-[800px] flex-col gap-12 px-8">
      <h2 className="text-center text-[32px] font-bold leading-[normal] tracking-[0.16px] text-neutrals-900 sm:text-[56px] sm:tracking-[0.28px]">
        Frequently asked questions
      </h2>
      <Accordion
        type="single"
        collapsible
        className="flex w-full flex-col gap-2"
      >
        {FAQs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger className="rounded-[8px] p-2 text-start hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="rounded-[16px] bg-[#E5ECF3] p-3">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
