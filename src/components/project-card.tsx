"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight, ImageOff } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import Markdown from "react-markdown";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <div className="w-full h-48 bg-muted" />;
  }

  return (
    <motion.img
      src={src}
      alt={alt}
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{
        duration: 1,
        ease: [0.4, 0, 0.2, 1] // Custom cubic-bezier for premium feel
      }}
      className="absolute inset-0 w-full h-48 object-cover"
      onError={() => setImageError(true)}
    />
  );
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  images?: readonly string[];
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  images,
  links,
  className,
}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images && images.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [images]);

  const displayImage = images && images.length > 0 ? images[currentIndex] : image;

  return (
    <div
      className={cn(
        "group flex flex-col h-full border border-border/80 bg-card/45 backdrop-blur-md rounded-2xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(138,114,184,0.02)] hover:shadow-[0_16px_36px_-10px_rgba(138,114,184,0.12),0_4px_12px_-5px_rgba(138,114,184,0.04)] hover:border-primary/30 hover:-translate-y-1 cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        className
      )}
    >
      <div className="relative shrink-0">
        <Link
          href={href || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {video ? (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-48 object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            />
          ) : displayImage ? (
            <div className="relative w-full h-48 overflow-hidden bg-muted group-hover:scale-[1.03] transition-transform duration-700 ease-out">
              <AnimatePresence mode="popLayout">
                <ProjectImage src={displayImage} alt={title} key={displayImage} />
              </AnimatePresence>
            </div>
          ) : (
            <div className="w-full h-48 flex flex-col items-center justify-center gap-2 border-b border-border/20 bg-linear-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 relative overflow-hidden group/no-preview transition-colors duration-500">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.03)_100%)]" />
              <div className="p-3 rounded-full bg-background/50 backdrop-blur-md border border-border/80 shadow-xs group-hover/no-preview:scale-110 transition-transform duration-500">
                <ImageOff className="size-6 text-muted-foreground/45" />
              </div>
              <span className="text-[9px] font-bold text-muted-foreground/40 uppercase tracking-[0.3em] mt-2 ml-1">
                No Preview Available
              </span>
            </div>
          )}
        </Link>
        {links && links.length > 0 && (
          <div className="absolute top-3 right-3 flex flex-wrap gap-2">
            {links.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Badge
                  className="flex items-center gap-1.5 text-xs font-semibold bg-background/80 backdrop-blur-md text-foreground border border-border/80 shadow-xs hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 rounded-full px-3 py-1 cursor-pointer"
                  variant="default"
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold text-base group-hover:text-primary transition-colors duration-300 tracking-tight leading-tight">{title}</h3>
            <time className="text-xs text-muted-foreground/80 font-mono">{dates}</time>
          </div>
          <Link
            href={href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground/80 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            aria-label={`Open ${title}`}
          >
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <div className="text-xs flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
          <Markdown>{description}</Markdown>
        </div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="text-[11px] font-medium bg-primary/5 text-primary border border-primary/10 h-6 w-fit px-2.5 rounded-full hover:bg-primary/10 transition-colors duration-300"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
