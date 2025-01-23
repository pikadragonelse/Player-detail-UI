import clsx from "clsx";
import { MatchTeam } from "../../model/team";
import { renderLinkImg } from "../../util/render";

export type MatchTeamInfo = {
    team: MatchTeam;
    status?: "lose" | "win";
};
export const MatchTeamInfo = ({ team, status = "lose" }: MatchTeamInfo) => {
    return (
        <div className="flex items-center gap-2 mb-2">
            <span className="w-5 h-5 rounded-full overflow-hidden">
                <img
                    src={renderLinkImg("team", team.id, "small")}
                    alt=""
                    className="object-cover"
                />
            </span>
            <span className={clsx({ "text-[#8D8E92]": status === "lose" })}>
                {team.name}
            </span>
        </div>
    );
};
