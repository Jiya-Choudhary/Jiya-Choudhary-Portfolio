"use client";
/* eslint-disable @next/next/no-img-element */
import FAQSection from "@/components/section/faq-section";
import { Python } from "@/components/ui/svgs/python";
import { Java } from "@/components/ui/svgs/java";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import { portfolioData } from "@/data/portfolio";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import HackathonsSection from "@/components/section/hackathons-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
// import GallerySection from "@/components/section/gallery-section";
// import BlogSection from "@/components/section/blog-section";
import {
  ArrowUpRight,
  BadgeCheck,
  Briefcase,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { useTranslation } from "@/i18n/context";
import { RealTimeClock } from "@/components/real-time-clock";
import { GithubContributions } from "@/components/section/github-contributions"

const BLUR_FADE_DELAY = 0.04;

const homepageTechStackAI = [
   {
    name: "Python",
    icon: <Python className="size-5" />,
  },
  {
    name: "Java",
    icon: <Java className="size-5" />,
  },
  {
    name: "JavaScript",
    icon: (
      <img
        src="https://cdn.simpleicons.org/javascript"
        className="size-5"
        alt="JavaScript"
      />
    ),
  },
  {
    name: "HTML5",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        className="size-5"
        alt="HTML5"
      />
    ),
  },
  {
    name: "CSS3",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        className="size-5"
        alt="CSS3"
      />
    ),
  },
  {
    name: "Flask",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
        className="size-5"
        alt="Flask"
      />
    ),
  },
  {
    name: "Bootstrap",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
        className="size-5"
        alt="Bootstrap"
      />
    ),
  },
  {
    name: "SQLite",
    icon: (
      <img
        src="https://cdn.simpleicons.org/sqlite"
        className="size-5"
        alt="SQLite"
      />
    ),
  },
  {
    name: "NumPy",
    icon: (
      <img
        src="https://cdn.simpleicons.org/numpy"
        className="size-5"
        alt="NumPy"
      />
    ),
  },
  {
    name: "Pandas",
    icon: (
      <img
        src="https://cdn.simpleicons.org/pandas"
        className="size-5"
        alt="Pandas"
      />
    ),
  },
];

const homepageTechStackSoftware = [
  {
    name: "Full Stack Web Development",
    level: "intermediate",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  },
  {
    name: "Python Programming",
    level: "advanced",
    icon: "https://cdn.simpleicons.org/python",
  },
  {
    name: "Database Management",
    level: "intermediate",
    icon: "https://cdn.simpleicons.org/sqlite",
  },
  {
    name: "Web Scraping",
    level: "intermediate",
    icon: "https://cdn.simpleicons.org/python",
  },
  {
    name: "Git & GitHub",
    level: "intermediate",
    icon: "https://cdn.simpleicons.org/github",
  },
  {
    name: "Responsive Web Design",
    level: "advanced",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
];

const homepageHardSkills = [
 {
    name: "Full Stack Web Development",
    level: "intermediate",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  },
  {
    name: "Python Programming",
    level: "advanced",
    icon: "https://cdn.simpleicons.org/python",
  },
  {
    name: "Database Management",
    level: "intermediate",
    icon: "https://cdn.simpleicons.org/sqlite",
  },
  {
    name: "Web Scraping",
    level: "intermediate",
    icon: "https://cdn.simpleicons.org/python",
  },
];

const levelColors: Record<string, string> = {
  expert: "border-green-500/50 ring-green-500/20",
  advanced: "border-blue-500/50 ring-blue-500/20",
  intermediate: "border-amber-500/50 ring-amber-500/20",
  beginner: "border-gray-500/50 ring-gray-500/20",
};

export default function Page() {
  const { t, lang } = useTranslation();
  const data = DATA[lang as keyof typeof DATA] || DATA.en;

  return (
    <main className="min-h-dvh flex flex-col gap-20 md:gap-28 relative">
      <section id="hero" className="pt-6 sm:pt-10">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <BlurFade delay={BLUR_FADE_DELAY} yOffset={8}>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl leading-none text-foreground/95">
                  <span>{data.name}</span>
                  <BadgeCheck
                    className="inline-block ml-2 size-7 md:size-9 text-[#8A72B8] dark:text-[#b5a6f8] -mt-1.5"
                    fill="currentColor"
                    stroke="white"
                  />
                </h1>
              </BlurFade>
              <BlurFadeText
                className="text-muted-foreground/90 max-w-[600px] md:text-lg lg:text-xl font-medium tracking-tight leading-relaxed pt-2"
                delay={BLUR_FADE_DELAY}
                text={data.description}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs md:text-sm text-muted-foreground/80 pt-4 font-medium">
                  <div className="flex items-center gap-1.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/20">
                    <div className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{t.availableForOpportunity}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-secondary/50 border border-border/60 px-3 py-1 rounded-full">
                    <MapPin className="size-3.5" />
                    <span>{data.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 border-l pl-4 border-border ml-1">
                    <span className="font-mono pt-0.5 text-muted-foreground/60">
                      <RealTimeClock />
                    </span>
                  </div>
                </div>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <div className="relative inline-block w-fit group/avatar">
                <Avatar className="size-24 md:size-32 border border-primary/20 rounded-full shadow-xl ring-4 ring-primary/10 hover:ring-primary/20 hover:scale-[1.02] transition-all duration-500 ease-out">
                  <AvatarImage alt={data.name} src={data.avatarUrl} />
                  <AvatarFallback>{data.initials}</AvatarFallback>
                </Avatar>
                <Link
                  href="/contact"
                  className="absolute bottom-0 right-0 md:bottom-1 md:right-1 bg-background border border-border/80 rounded-full p-1.5 shadow-md hover:shadow-lg hover:bg-accent hover:border-primary/30 transition-all duration-300 flex items-center justify-center group-hover/avatar:ring-4 ring-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring z-10"
                  aria-label={t.viewContactInfo}
                  title={t.contactProfiles}
                >
                  <ChevronDown className="size-4 md:size-5 text-muted-foreground/80 group-hover/avatar:text-primary transition-colors" />
                </Link>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">{t.about}</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-justify font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>{data.summary}</Markdown>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">{t.workExperience}</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">{t.education}</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {data.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + index * 0.05}
              >
                <Link
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-3 justify-between group"
                >
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    {education.logoUrl ? (
                      <img
                        src={education.logoUrl}
                        alt={education.school}
                        className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                      />
                    ) : (
                      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                    )}
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="font-semibold leading-none flex items-center gap-2">
                        {education.school}
                        <ArrowUpRight
                          className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                          aria-hidden
                        />
                      </div>
                      <div className="font-sans text-sm text-muted-foreground flex flex-col">
                        <div className="text-foreground/90 font-medium leading-snug">
                          {education.school === "SMAN 88 Jakarta" ? (
                            <span>
                              {education.degree}{" "}
                              <span className="font-normal text-muted-foreground">
                                - {education.major}
                              </span>
                            </span>
                          ) : (
                            education.degree
                          )}
                        </div>
                        {education.school !== "SMAN 88 Jakarta" &&
                          education.major && (
                            <span className="leading-snug">
                              {education.major}
                            </span>
                          )}
                        {education.gpa && (
                          <span className="text-xs mt-0.5 opacity-80">
                            {t.gpa}: {education.gpa}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                    <span>
                      {education.start} - {education.end}
                    </span>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">{t.skills}</h2>
          </BlurFade>
          {/* Tech Stack */}
          <BlurFade delay={BLUR_FADE_DELAY * 9.5}>
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                {t.techStack}
              </h3>
              <div className="flex flex-wrap gap-2">
                {homepageTechStackAI.map((skill) => (
                  <div
                    key={skill.name}
                    className="border bg-background/50 hover:bg-primary/5 border-border/80 ring-2 ring-border/5 rounded-full h-9 px-4 flex items-center gap-2 hover:-translate-y-0.5 hover:scale-[1.03] hover:border-primary/30 transition-all duration-300 shadow-xs cursor-default hover:shadow-md hover:shadow-primary/5 hover:text-foreground"
                  >
                    {skill.icon && (
                      <div className="size-4.5 flex items-center justify-center">
                        {skill.icon}
                      </div>
                    )}
                    <span className="text-foreground text-sm font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
                {homepageTechStackSoftware.map((skill) => (
                  <div
                    key={skill.name}
                    className="border bg-background/50 hover:bg-primary/5 border-border/80 ring-2 ring-border/5 rounded-full h-9 px-4 flex items-center gap-2 hover:-translate-y-0.5 hover:scale-[1.03] hover:border-primary/30 transition-all duration-300 shadow-xs cursor-default hover:shadow-md hover:shadow-primary/5 hover:text-foreground"
                  >
                    {skill.icon && (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="size-4.5 rounded overflow-hidden object-contain dark:invert"
                      />
                    )}
                    <span className="text-foreground text-sm font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>
          {/* Tools */}
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                {t.tools}
              </h3>
              <div className="flex flex-wrap gap-2">
                {data.tools.slice(0).map((tool: any) => (
                  <div
                    key={tool.name}
                    className="border bg-background/50 hover:bg-primary/5 border-border/80 ring-2 ring-border/5 rounded-full h-9 px-4 flex items-center gap-2 hover:-translate-y-0.5 hover:scale-[1.03] hover:border-primary/30 transition-all duration-300 shadow-xs cursor-default hover:shadow-md hover:shadow-primary/5 hover:text-foreground"
                  >
                    {tool.icon && (
                      <img
                        src={tool.icon}
                        alt={tool.name}
                        className="size-4.5 rounded overflow-hidden object-contain dark:invert"
                      />
                    )}
                    <span className="text-foreground text-sm font-medium">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>
          {/* Hard Skills */}
          <BlurFade delay={BLUR_FADE_DELAY * 10.5}>
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                {t.hardSkills}
              </h3>
              <div className="flex flex-wrap gap-2">
                {homepageHardSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`border bg-background/50 hover:bg-primary/5 border-border/80 ring-2 ${levelColors[skill.level] || "ring-border/5 border-border/80"} rounded-full h-9 px-4 flex items-center gap-2 hover:-translate-y-0.5 hover:scale-[1.03] hover:border-primary/30 transition-all duration-300 shadow-xs cursor-default hover:shadow-md hover:shadow-primary/5 hover:text-foreground`}
                  >
                    <span className="text-foreground text-sm font-medium">
                      {skill.name === "Data Science"
                        ? t.dataScience
                        : skill.name === "Machine Learning"
                          ? t.machineLearning
                          : skill.name === "Deep Learning"
                            ? t.deepLearning
                            : skill.name === "NLP"
                              ? t.nlp
                              : skill.name === "Full Stack Developer"
                                ? t.fullStackDeveloper
                                : skill.name === "System Architecture"
                                  ? t.systemArchitecture
                                  : skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>
          {/* Soft Skills */}
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                {t.softSkills}
              </h3>
              <div className="flex flex-wrap gap-2">
                {data.softSkills.slice(0, 6).map((skill: any) => (
                  <div
                    key={skill.name}
                    className="border bg-background/50 hover:bg-primary/5 border-border/80 ring-2 ring-border/5 rounded-full h-9 px-4 flex items-center hover:-translate-y-0.5 hover:scale-[1.03] hover:border-primary/30 transition-all duration-300 shadow-xs cursor-default hover:shadow-md hover:shadow-primary/5 hover:text-foreground"
                  >
                    <span className="text-foreground text-sm font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 11.5}>
            <div className="flex justify-center">
              <Link
                href="/skills"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg px-4 py-2 w-fit flex items-center gap-1.5 group"
              >
                {t.viewAllSkills}
                <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <ProjectsSection />
        </BlurFade>
      </section>
      <section id="hackathons">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <HackathonsSection />
        </BlurFade>
      </section>
      {/* <section id="gallery">
        <BlurFade delay={BLUR_FADE_DELAY * 14.5}>
          <GallerySection interactive={false} />
        </BlurFade>
      </section> */}
      {/* <section id="blog">
        <BlurFade delay={BLUR_FADE_DELAY * 15.5}>
          <BlogSection />
        </BlurFade>
      </section> */}
      <section id="github">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <GithubContributions username="Jiya-Choudhary" />
        </BlurFade>
      </section>
      <section id="faq">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <FAQSection />
        </BlurFade>
      </section>
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 16.5}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
