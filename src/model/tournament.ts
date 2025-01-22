import { Category } from "./category";
import { UniqueTournament } from "./player";

export interface PlayerTournament {
    name: string;
    slug: string;
    category: Category;
    uniqueTournament: UniqueTournament;
}

export interface MatchTournament {
    id: string;
    priority: number;
    name: string;
    slug: string;
    category: Category;
    group_num: number;
}
