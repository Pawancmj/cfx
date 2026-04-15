export interface BlogSection {
    title: string;
    content: string;
    image?: string;
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface BlogData {
    title: string;
    slug: string;
    excerpt: string;
    date: string;
    category: string;
    readTime: string;
    coverImage: string;
    intro: string;
    sections: BlogSection[];
    faqs?: FAQ[];
}
