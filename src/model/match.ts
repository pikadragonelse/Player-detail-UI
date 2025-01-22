import { Score } from "./score";
import { MatchTeam } from "./team";
import { MatchTournament } from "./tournament";

export interface MatchListData {
    events: Event[];
}

export interface Event {
    id: string;
    homeScore: Score;
    tournament: MatchTournament;
    homeTeam: MatchTeam;
    awayScore: Score;
    awayTeam: MatchTeam;
    status: Status;
    winnerCode: number;
    startTimestamp: number;
    stage_id: string;
}

export interface Status {
    code: number;
    description: string;
    type: string;
}
