import { Sport } from "./sport";

export interface FullCategory {
    name: string;
    slug: string;
    id: string;
    flag: string;
    alpha2: string;
    sport: Sport;
}

export interface Category {
    name: string;
    slug: string;
    id: string;
    sport?: Sport;
    flag?: string;
}
