import { blogsData } from "./blogsData";
import { articlesData } from "./articlesData";
import { newsData } from "./newsData";
import { latestData } from "./latestData";
import { BlogData } from "../types/resources";

export const resourcesData: Record<string, BlogData> = {
    ...blogsData,
    ...articlesData,
    ...newsData,
    ...latestData
};
