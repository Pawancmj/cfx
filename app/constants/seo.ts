import { Metadata } from "next";

export const siteConfig = {
    name: "CyberForenX & Associates",
    description: "Enterprise-grade cybersecurity, digital forensics, and strategic tech solutions.",
    url: "https://www.cyberforenx.in",
    ogImage: "/opengraph-image.png",
    links: {
        twitter: "https://twitter.com/cyberforenx",
        github: "https://github.com/cyberforenx",
    },
};

export function constructMetadata({
    title = siteConfig.name,
    description = siteConfig.description,
    image = siteConfig.ogImage,
    icons = "/favicon.ico",
    noIndex = false,
    keywords,
}: {
    title?: string;
    description?: string;
    image?: string;
    icons?: string;
    noIndex?: boolean;
    keywords?: string[];
} = {}): Metadata {
    return {
        title,
        description,
        keywords,
        openGraph: {
            title,
            description,
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: `${siteConfig.name} - Digital Forensics & Web Development`,
                    type: "image/png",
                },
            ],
            siteName: siteConfig.name,
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
            creator: "@cyberforenx",
        },
        icons,
        metadataBase: new URL(siteConfig.url),
        ...(noIndex && {
            robots: {
                index: false,
                follow: false,
            },
        }),
    };
}
