import { Player } from "../model/player";
import { convertTimestampToDate } from "../util/convert";
import { renderLinkImg } from "../util/render";

export type PlayerInfo = { playerInfo: Player };
export const PlayerInfo = ({ playerInfo }: PlayerInfo) => {
    return (
        <div className="flex gap-3 mb-2 lg:mb-0 lg:mt-6">
            <div className="min-w-[90px] w-[90px] h-[90px] bg-white rounded-full overflow-hidden border-4 border-white">
                <img
                    src={renderLinkImg("player", playerInfo.id, "medium")}
                    alt=""
                    className="object-cover"
                />
            </div>
            <div className="">
                <h2 className="text-3xl font-medium">{playerInfo.name}</h2>
                <div className="flex gap-3 mt-2 items-center">
                    <div className="w-10 h-10">
                        <img
                            src={renderLinkImg(
                                "team",
                                playerInfo.team.id,
                                "medium"
                            )}
                            alt=""
                        />
                    </div>
                    <div className="">
                        <h3 className="font-medium">{playerInfo.team.name}</h3>
                        <span className="text-[#8D8E92] text-sm">
                            Contract until{" "}
                            {convertTimestampToDate(
                                playerInfo.contractUntilTimestamp
                            )}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
