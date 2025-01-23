import clsx from "clsx";
import { Event } from "../../model/match";
import { convertTimestampToDate } from "../../util/convert";
import { colorScore, statusTeam } from "../../util/status-match-team";
import { MatchTeamInfo } from "./team-info";
import BenchIcon from "../../assets/icons/bench.svg";

export type MatchItem = {
    event: Event;
};
export const MatchItem = ({ event }: MatchItem) => {
    return (
        <div className="flex border-[#09379447] border rounded-lg justify-between p-3 bg-gradient-to-br from-[#0C1A4C66] via-[#102C7366] to-[#0A1F5566]">
            <div className="flex gap-3">
                <div className="text-center text-[#8D8E92]">
                    <div className="mb-2">
                        {convertTimestampToDate(event.startTimestamp, "short")}
                    </div>
                    <div>{event.status.type.toUpperCase()}</div>
                </div>
                <div className="">
                    <MatchTeamInfo
                        team={event.homeTeam}
                        status={statusTeam(
                            event.homeScore.current,
                            event.awayScore.current,
                            true
                        )}
                    />
                    <MatchTeamInfo
                        team={event.awayTeam}
                        status={statusTeam(
                            event.homeScore.current,
                            event.awayScore.current,
                            false
                        )}
                    />
                </div>
            </div>
            <div className="flex gap-2 items-center">
                <div className="">
                    <div
                        className={`${colorScore(
                            event.homeScore.current,
                            event.awayScore.current,
                            true
                        )} from-[#00289F] via-[#001F7B] to-[#091557] py-1 px-2 rounded-tr rounded-tl text-xs text-center`}
                    >
                        {event.homeScore.current}
                    </div>
                    <div
                        className={`${colorScore(
                            event.homeScore.current,
                            event.awayScore.current,
                            false
                        )} from-[#00289F] via-[#001F7B] to-[#091557] py-1 px-2 rounded-br rounded-bl text-xs text-center`}
                    >
                        {event.awayScore.current}
                    </div>
                </div>
                <div
                    className={clsx(
                        "font-medium text-sm rounded-sm w-6 h-6 flex items-center justify-center",
                        {
                            "bg-[#2EA76F]":
                                event.homeScore.current >
                                event.awayScore.current,
                            "bg-[#DA6900]":
                                event.homeScore.current <
                                event.awayScore.current,
                            "bg-none":
                                event.homeScore.current ===
                                event.awayScore.current,
                        }
                    )}
                >
                    {event.homeScore.current === event.awayScore.current ? (
                        <img src={BenchIcon} alt="" />
                    ) : event.homeScore.current > event.awayScore.current ? (
                        "8.2"
                    ) : (
                        "6.1"
                    )}
                </div>
            </div>
        </div>
    );
};
