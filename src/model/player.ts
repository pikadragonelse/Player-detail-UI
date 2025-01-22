import { Category, FullCategory } from "./category";
import { Nationality } from "./nation";
import { PlayerTeam } from "./team";

export interface PlayerInfoData {
    player: Player;
}

export interface Player {
    id: string;
    name: string;
    slug: string;
    shortName: string;
    team: PlayerTeam;
    position: string;
    height: number;
    preferredFoot: any;
    dateOfBirthTimestamp: number;
    contractUntilTimestamp: number;
    proposedMarketValue: number;
    proposedMarketValueRaw: ProposedMarketValueRaw;
    nationality: Nationality;
}

export interface UniqueTournament {
    name: string;
    slug: string;
    category: Category;
    id: string;
    displayInverseHomeAwayTeams: boolean;
}

export interface PrimaryUniqueTournament {
    name: string;
    slug: string;
    category: FullCategory;
}

export interface ProposedMarketValueRaw {
    value: number;
    currency: string;
}
