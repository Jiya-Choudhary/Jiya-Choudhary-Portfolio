/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DATA } from "@/data/resume";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useTranslation } from "@/i18n/context";

const DEFAULT_VISIBLE = 5;

// FIXED: Changed src to be optional (src?: string) to accept string | undefined
function LogoImage({ src, alt }: { src?: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="size-9 md:size-11 p-1.5 border border-border/80 rounded-full shadow-[0_2px_8px_rgba(138,114,184,0.04)] ring-4 ring-background bg-muted flex-none relative z-10" />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="size-9 md:size-11 p-1.5 border border-border/80 rounded-full shadow-[0_2px_8px_rgba(138,114,184,0.04)] ring-4 ring-background bg-background overflow-hidden object-contain flex-none relative z-10 hover:scale-105 transition-transform duration-300"
      onError={() => setImageError(true)}
    />
  );
}

export default function WorkSection() {
  const { t, lang } = useTranslation();
  const data = DATA[lang as keyof typeof DATA] || DATA.en;
  const visibleWork = data.work.slice(0, DEFAULT_VISIBLE);

  return (
    <div className="flex flex-col gap-6">
      <Accordion type="single" collapsible className="w-full grid gap-6 relative before:absolute before:inset-y-0 before:left-[18px] md:before:left-[22px] before:w-px before:bg-linear-to-b before:from-border/30 before:via-primary/20 before:to-border/30">
        {visibleWork.map((work, index) => (
          <AccordionItem
            key={`${work.company}-${index}`}
            value={`${work.company}-${index}`}
            className="w-full border-b-0 grid gap-2"
          >
            <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
              <div className="flex flex-col sm:flex-row sm:items-center gap-y-1 gap-x-3 justify-between w-full text-left">
                <div className="flex items-center gap-x-3 flex-1 min-w-0">
                  <LogoImage src={work.logoUrl} alt={work.company} />
                  <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                    <div className="font-bold text-base leading-tight flex items-center gap-2 text-foreground/90 group-hover:text-primary transition-colors duration-300">
                      {work.company}
                      <span className="relative inline-flex items-center w-3.5 h-3.5">
                        <ChevronRight
                          className={cn(
                            "absolute h-3.5 w-3.5 shrink-0 text-primary stroke-[2.5px] transition-all duration-300 ease-out",
                            "translate-x-0 opacity-0",
                            "group-hover:translate-x-1 group-hover:opacity-100",
                            "group-data-[state=open]:opacity-0 group-data-[state=open]:translate-x-0"
                          )}
                        />
                        <ChevronDown
                          className={cn(
                            "absolute h-3.5 w-3.5 shrink-0 text-primary stroke-[2.5px] transition-all duration-200",
                            "opacity-0 rotate-0",
                            "group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-180"
                          )}
                        />
                      </span>
                    </div>
                    <div className="font-sans text-sm text-muted-foreground/80 font-medium">
                      {work.title}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground/80 sm:text-right flex-none ml-12 sm:ml-0 bg-secondary/60 border border-border/40 px-2.5 py-0.5 rounded-full">
                  <span>
                    {work.start} - {work.end ?? t.present}
                  </span>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-0 ml-12 sm:ml-[54px] text-xs sm:text-[13px] leading-relaxed text-muted-foreground/90 border-l border-primary/10 pl-4 mt-1">
              {work.description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      {data.work.length > DEFAULT_VISIBLE && (
        <Link
          href="/experience"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg px-4 py-2 w-fit mx-auto flex items-center gap-1.5 group"
        >
          {t.viewAllExperience}
          <ChevronRight className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      )}
    </div>
  );
}