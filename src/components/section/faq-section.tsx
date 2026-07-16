"use client";

import { portfolioData } from "@/data/portfolio";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = portfolioData.faqs;
  
  console.log("FAQs:", faqs);

  return (
    <section className="flex flex-col gap-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground mt-2">
          Answers to some common questions about my work and experience.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq: any, index: number) => (
          <AccordionItem key={index} value={`faq-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}