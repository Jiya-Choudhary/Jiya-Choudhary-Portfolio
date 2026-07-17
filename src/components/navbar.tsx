"use client";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { Icons } from "@/components/icons";
import { useTranslation } from "@/i18n/context";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const { t, lang } = useTranslation();
  const data = DATA[lang as keyof typeof DATA] || DATA.en;
  const [isVisible, setIsVisible] = useState(true);
  const scrollTimeout = useRef<NodeJS.Timeout>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Always show at the top of the page
      if (window.scrollY < 50) {
        setIsVisible(true);
        if (scrollTimeout.current) {
          clearTimeout(scrollTimeout.current);
        }
        return;
      }

      // Hide navbar when scrolling
      setIsVisible(false);

      // Clear the previous timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // Show navbar after scrolling stops (150ms delay)
      scrollTimeout.current = setTimeout(() => {
        setIsVisible(true);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: isVisible ? 0 : 100,
          opacity: isVisible ? 1 : 0
        }}
        exit={{ y: 100, opacity: 0 }}
        transition={{
          duration: 0.3,
          ease: [0.23, 1, 0.32, 1] // Efficient easing for UI elements
        }}
        className="pointer-events-none fixed inset-x-0 bottom-4 z-30"
      >
        <Dock className="z-50 pointer-events-auto relative h-14 p-2 w-fit mx-auto flex items-center gap-1.5 border border-border/80 bg-card/65 backdrop-blur-xl shadow-[0_10px_30px_-10px_rgba(138,114,184,0.15)] rounded-full transition-all duration-300">
          {data.navbar.map((item: any) => {
            const isExternal = item.href.startsWith("http");
            return (
              <Tooltip key={item.href}>
                <TooltipTrigger asChild>
                  <a
                    href={item.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                  >
                    <DockIcon className="rounded-full cursor-pointer size-full bg-background/60 text-muted-foreground hover:text-primary hover:bg-primary/5 hover:border-primary/30 backdrop-blur-md border border-border/85 transition-all duration-300 flex items-center justify-center hover:-translate-y-0.5">
                      <item.icon className="size-full rounded-sm overflow-hidden object-contain" />
                    </DockIcon>
                  </a>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  sideOffset={8}
                  className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
                >
                  <p>{item.label}</p>
                  <TooltipArrow className="fill-primary" />
                </TooltipContent>
              </Tooltip>
            );
          })}
          <Separator
            orientation="vertical"
            className="h-2/3 m-auto w-px bg-border"
          />
          {/* Center Links: LinkedIn -> Chatbot -> Email */}
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href={data.contact.social.LinkedIn.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <DockIcon className="rounded-full cursor-pointer size-full bg-background/60 text-muted-foreground hover:text-primary hover:bg-primary/5 hover:border-primary/30 backdrop-blur-md border border-border/85 transition-all duration-300 flex items-center justify-center hover:-translate-y-0.5">
                  <Icons.linkedin className="size-full rounded-sm overflow-hidden object-contain" />
                </DockIcon>
              </a>
            </TooltipTrigger>
            <TooltipContent
              side="top"
              sideOffset={8}
              className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
            >
              <p>LinkedIn</p>
              <TooltipArrow className="fill-primary" />
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href={data.contact.social.GitHub.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <DockIcon className="rounded-full cursor-pointer size-full bg-background/60 text-muted-foreground hover:text-primary hover:bg-primary/5 hover:border-primary/30 backdrop-blur-md border border-border/85 transition-all duration-300 flex items-center justify-center hover:-translate-y-0.5">
                  <Icons.github className="size-full rounded-sm overflow-hidden object-contain" />
                </DockIcon>
              </a>
            </TooltipTrigger>
            <TooltipContent
              side="top"
              sideOffset={8}
              className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
            >
              <p>GitHub</p>
              <TooltipArrow className="fill-primary" />
            </TooltipContent>
          </Tooltip>



          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href={`mailto:${data.contact.email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <DockIcon className="rounded-full cursor-pointer size-full bg-background/60 text-muted-foreground hover:text-primary hover:bg-primary/5 hover:border-primary/30 backdrop-blur-md border border-border/85 transition-all duration-300 flex items-center justify-center hover:-translate-y-0.5">
                  <Icons.email className="size-full rounded-sm overflow-hidden object-contain" />
                </DockIcon>
              </a>
            </TooltipTrigger>
            <TooltipContent
              side="top"
              sideOffset={8}
              className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
            >
              <p>{data.contact.social.email.name}</p>
              <TooltipArrow className="fill-primary" />
            </TooltipContent>
          </Tooltip>
          <Separator
            orientation="vertical"
            className="h-2/3 m-auto w-px bg-border"
          />
          <Tooltip>
            <TooltipContent
              side="top"
              sideOffset={8}
              className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
            >
              <p>{lang === "en" ? "Language" : "Bahasa"}</p>
              <TooltipArrow className="fill-primary" />
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <DockIcon className="rounded-full cursor-pointer size-full bg-background/60 text-muted-foreground hover:text-primary hover:bg-primary/5 hover:border-primary/30 backdrop-blur-md border border-border/85 transition-all duration-300 flex items-center justify-center hover:-translate-y-0.5">
                <ModeToggle className="size-full cursor-pointer" />
              </DockIcon>
            </TooltipTrigger>
            <TooltipContent
              side="top"
              sideOffset={8}
              className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
            >
              <p>{lang === "en" ? "Theme" : "Tema"}</p>
              <TooltipArrow className="fill-primary" />
            </TooltipContent>
          </Tooltip>
        </Dock>
      </motion.div>
    </AnimatePresence>
  );
}
