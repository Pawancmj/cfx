"use client";

import { useState } from "react";
import { Share2, Check } from "lucide-react";

export default function ShareButton() {
    const [copied, setCopied] = useState(false);

    const handleShare = async () => {
        const url = window.location.href;
        const title = document.title;

        // Use native Web Share API if available (mobile & some desktops)
        if (navigator.share) {
            try {
                await navigator.share({ title, url });
                return;
            } catch {
                // User cancelled or API failed — fall through to clipboard
            }
        }

        // Fallback: copy to clipboard
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Last resort
            prompt("Copy this link:", url);
        }
    };

    return (
        <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-primary transition-colors cursor-pointer"
            title="Share this article"
        >
            {copied ? (
                <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                </>
            ) : (
                <>
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                </>
            )}
        </button>
    );
}
