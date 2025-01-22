import { PersonalInfoItem } from "./personal-info-item";
import SpainIcon from "../../assets/icons/Spain.svg";
import FootIcon from "../../assets/icons/Foot.svg";
import HeightIcon from "../../assets/icons/Height.svg";
import DateOfBirthIcon from "../../assets/icons/tuổi.svg";
import JerseyIcon from "../../assets/icons/Jersey.svg";
import PositionIcon from "../../assets/icons/Football.svg";
import StarIcon from "../../assets/icons/star.svg";
import data from "../../data/playerInfo.json";
import {
    convertTimestampToAge,
    convertTimestampToDate,
} from "../../util/convert";
import { PlayerInfo } from "../player-info";

const playerInfo = data.data.player;

export const PersonalInfo = () => {
    return (
        <div className="lg:flex">
            <div className="lg:w-1/2 py-3 px-4 relative bg-gradient-to-r from-[#203397] via-[#122690] to-[#091557] lg:bg-none">
                <div className="ml-auto w-fit">
                    <img src={StarIcon} alt="" />
                </div>
                <PlayerInfo playerInfo={playerInfo} />
            </div>
            <div className="grid grid-cols-2 lg:flex-1">
                <PersonalInfoItem
                    title="Nationality"
                    icon={SpainIcon}
                    description={playerInfo.nationality.name}
                    className="border-t-0"
                />
                <PersonalInfoItem
                    title="Date of birth"
                    icon={DateOfBirthIcon}
                    description={convertTimestampToDate(
                        playerInfo.dateOfBirthTimestamp
                    )}
                    subDescription={`${convertTimestampToAge(
                        playerInfo.dateOfBirthTimestamp
                    )} years old`}
                    className="border-t-0"
                />
                <PersonalInfoItem
                    title="Height"
                    icon={HeightIcon}
                    description={playerInfo.height}
                />
                <PersonalInfoItem
                    title="Preferred foot"
                    icon={FootIcon}
                    description={playerInfo.preferredFoot}
                />
                <PersonalInfoItem
                    title="Jersey number"
                    icon={JerseyIcon}
                    description={null}
                />
                <PersonalInfoItem
                    title="Position"
                    icon={PositionIcon}
                    description={playerInfo.position}
                />
            </div>
        </div>
    );
};
