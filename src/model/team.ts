import { Country } from "./nation";
import { PrimaryUniqueTournament } from "./player";
import { Sport } from "./sport";
import { PlayerTournament } from "./tournament";

export interface MatchTeam {
    id: string;
    name: string;
    slug: string;
    shortName: string;
}

export interface PlayerTeam {
    id: string;
    name: string;
    slug: string;
    sport: Sport;
    tournament: PlayerTournament;
    primaryUniqueTournament: PrimaryUniqueTournament;
    country: Country;
}

export interface MatchTeamUI {
    name: string;
    icon: string;
}
