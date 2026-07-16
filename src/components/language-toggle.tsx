"use client";

import { Button } from "@/components/ui/button";
import { useTranslation } from "@/i18n/context";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";

export function LanguageToggle({ className }: { className?: string }) {
    const { lang, setLang } = useTranslation();

    return (
        <Button
            type="button"
            variant="link"
            size="icon"
            className={cn(className)}
            onClick={() => setLang("en")}
            title={lang === "en" ? "Switch to Hindi" : "Switch to English"}
        >
            <Globe className="size-4" />
        </Button>
    );
}
