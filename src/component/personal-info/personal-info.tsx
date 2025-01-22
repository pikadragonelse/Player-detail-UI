import { PersonalInfoItem } from "./personal-info-item";
import playerAvt from "../../assets/images/player-avt.png";
import AtleticoMadrid from "../../assets/icons/Atletico Madrid.svg";
import SpainIcon from "../../assets/icons/Spain.svg";
import FootIcon from "../../assets/icons/Foot.svg";
import HeightIcon from "../../assets/icons/Height.svg";
import DateOfBirthIcon from "../../assets/icons/tuổi.svg";
import JerseyIcon from "../../assets/icons/Jersey.svg";
import PositionIcon from "../../assets/icons/Football.svg";
import StarIcon from "../../assets/icons/star.svg";

export const PersonalInfo = () => {
    return (
        <div className="lg:flex">
            <div className="lg:w-1/2 py-3 px-4 relative bg-gradient-to-r from-[#203397] via-[#122690] to-[#091557] lg:bg-none">
                <div className="ml-auto w-fit">
                    <img src={StarIcon} alt="" />
                </div>
                <div className="flex gap-3 mb-2 lg:mb-0 lg:mt-6">
                    <div className="min-w-[90px] w-[90px] h-[90px] bg-white rounded-full overflow-hidden border-4 border-white">
                        <img
                            src={playerAvt}
                            alt=""
                            className=" object-cover translate-y-7 scale-150"
                        />
                    </div>
                    <div className="">
                        <h2 className="text-3xl font-medium">AIvaro Morata</h2>
                        <div className="flex gap-3 mt-2 items-center">
                            <div className="">
                                <img src={AtleticoMadrid} alt="" />
                            </div>
                            <div className="">
                                <h3 className="font-medium">Atletico Madrid</h3>
                                <span className="text-[#8D8E92] text-sm">
                                    Contract until 30 Jun 2026
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 lg:flex-1">
                <PersonalInfoItem
                    title="Nationality"
                    icon={SpainIcon}
                    description="Spain"
                    className="border-t-0"
                />
                <PersonalInfoItem
                    title="Date of birth"
                    icon={DateOfBirthIcon}
                    description="24 OCT 1996"
                    subDescription="27 years old"
                    className="border-t-0"
                />
                <PersonalInfoItem
                    title="Height"
                    icon={HeightIcon}
                    description="189 cm"
                />
                <PersonalInfoItem
                    title="Preferred foot"
                    icon={FootIcon}
                    description="Right"
                />
                <PersonalInfoItem
                    title="Jersey number"
                    icon={JerseyIcon}
                    description="19"
                />
                <PersonalInfoItem
                    title="Position"
                    icon={PositionIcon}
                    description="FW"
                />
            </div>
        </div>
    );
};
