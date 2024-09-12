import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";

export function Faq() {
  return (
    <div className="max-w-[800px] mx-auto flex flex-col gap-12">
      <h2 className="text-center text-[32px] font-bold leading-[normal] tracking-[0.16px] text-neutrals-900 sm:text-[56px] sm:tracking-[0.28px]">
        Why to choose ZuAi
      </h2>
      <Accordion type="single" collapsible className="w-full flex flex-col gap-2">
        <AccordionItem value="item-1">
          <AccordionTrigger className="bg-blue-100 rounded-[8px] p-2 hover:no-underline">Is it accessible?</AccordionTrigger>
          <AccordionContent className="p-2">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="bg-blue-100 rounded-[8px] p-2 hover:no-underline">Is it accessible?</AccordionTrigger>
          <AccordionContent className="p-2">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="bg-blue-100 rounded-[8px] p-2 hover:no-underline">Is it accessible?</AccordionTrigger>
          <AccordionContent className="p-2">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="bg-blue-100 rounded-[8px] p-2 hover:no-underline">Is it accessible?</AccordionTrigger>
          <AccordionContent className="p-2">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="bg-blue-100 rounded-[8px] p-2 hover:no-underline">Is it accessible?</AccordionTrigger>
          <AccordionContent className="p-2">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="bg-blue-100 rounded-[8px] p-2 hover:no-underline">Is it accessible?</AccordionTrigger>
          <AccordionContent className="p-2">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
