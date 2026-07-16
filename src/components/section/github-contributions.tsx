"use client";

import { useEffect, useState, useRef } from "react";
import { Github, ExternalLink, Star, GitBranch, Eye, CalendarDays } from "lucide-react";

interface GitHubStats {
    publicRepos: number;
    followers: number;
    totalStars: number;
}

export function GithubContributions({ username = "Jiya-Choudhary" }: { username?: string }) {
    const [stats, setStats] = useState<GitHubStats | null>(null);
    const [loading, setLoading] = useState(true);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        async function fetchGitHubData() {
            try {
                const userRes = await fetch(`https://api.github.com/users/${username}`);
                const userData = await userRes.json();

                const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
                const reposData = await reposRes.json();

                const totalStars = Array.isArray(reposData)
                    ? reposData.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0)
                    : 0;

                setStats({
                    publicRepos: userData.public_repos || 0,
                    followers: userData.followers || 0,
                    totalStars: totalStars,
                });
            } catch (error) {
                console.error("Failed fetching GitHub stats:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchGitHubData();
    }, [username]);

    // Force the scroll container to the far right so the latest data is instantly visible
    useEffect(() => {
        if (!loading && scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            // Small timeout ensures the image layout has fully rendered before calculating width
            const timeoutId = setTimeout(() => {
                container.scrollLeft = container.scrollWidth;
            }, 100);
            return () => clearTimeout(timeoutId);
        }
    }, [loading]);

    return (
        <div className="w-full max-w-[900px] mx-auto mt-16 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <h2 className="text-2xl font-bold tracking-tighter inline-flex items-center gap-2">
                        <Github className="size-5" /> Code Contributions
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Open-source activity, repository statistics, and code history.
                    </p>
                </div>
                <a
                    href={`https://github.com/${username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors border border-border/60 rounded-xl px-3 py-2 flex items-center gap-1.5 bg-muted/10 hover:bg-muted/30"
                >
                    @{username} <ExternalLink className="size-3" />
                </a>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-muted/10 border border-border/40 dark:border-border/20 rounded-2xl p-4 flex flex-col justify-between gap-2">
                    <div className="flex items-center justify-between text-muted-foreground">
                        <span className="text-xs font-medium">Repositories</span>
                        <GitBranch className="size-4 opacity-70" />
                    </div>
                    <span className="text-2xl font-bold tracking-tight font-mono">
                        {loading ? "···" : stats?.publicRepos}
                    </span>
                </div>
                <div className="bg-muted/10 border border-border/40 dark:border-border/20 rounded-2xl p-4 flex flex-col justify-between gap-2">
                    <div className="flex items-center justify-between text-muted-foreground">
                        <span className="text-xs font-medium">Total Stars</span>
                        <Star className="size-4 text-amber-500 opacity-90" />
                    </div>
                    <span className="text-2xl font-bold tracking-tight font-mono">
                        {loading ? "···" : stats?.totalStars}
                    </span>
                </div>
                <div className="bg-muted/10 border border-border/40 dark:border-border/20 rounded-2xl p-4 flex flex-col justify-between gap-2">
                    <div className="flex items-center justify-between text-muted-foreground">
                        <span className="text-xs font-medium">Followers</span>
                        <Eye className="size-4 opacity-70" />
                    </div>
                    <span className="text-2xl font-bold tracking-tight font-mono">
                        {loading ? "···" : stats?.followers}
                    </span>
                </div>
            </div>

            {/* Improved Contribution Calendar Matrix */}
            <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground px-1">
                    <CalendarDays className="size-3.5" />
                    <span>Daily Contribution History (Latest on the right)</span>
                </div>
                <div className="w-full border border-border/40 dark:border-border/20 rounded-2xl bg-muted/5 p-4 md:p-6">
                    {/* Added Ref and custom scroll handling */}
                    <div
                        ref={scrollContainerRef}
                        className="w-full overflow-x-auto snap-x scroll-smooth no-scrollbar flex items-center"
                    >
                        <div className="min-w-[720px] w-full py-2 flex justify-center items-center">
                            <img
                                src={`https://ghchart.rshah.org/22c55e/${username}`}
                                alt={`${username}'s contribution matrix`}
                                className="max-w-full h-auto object-contain select-none pointer-events-none dark:invert dark:hue-rotate-180 dark:brightness-125 dark:contrast-125 transition-all duration-300"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Activity Line Trend Graph */}
            <div className="relative border border-border/40 dark:border-border/20 rounded-2xl overflow-hidden bg-muted/5 p-4 md:p-6 flex flex-col items-center justify-center min-h-[160px]">
                <picture className="w-full select-none pointer-events-none">
                    <source
                        media="(prefers-color-scheme: dark)"
                        srcSet={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&bg_color=00000000&color=a1a1aa&line=2563eb&point=3b82f6&area=true&hide_border=true`}
                    />
                    <img
                        src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&bg_color=00000000&color=71717a&line=2563eb&point=3b82f6&area=true&hide_border=true`}
                        alt={`${username}'s github activity graph`}
                        className="w-full object-contain filter invert-0 dark:brightness-110"
                    />
                </picture>
            </div>
        </div>
    );
}