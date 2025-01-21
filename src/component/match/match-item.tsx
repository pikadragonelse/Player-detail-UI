import { MatchTeam } from "../../model/match-team";
import GeorgiaIcon from "../../assets/icons/Georgia.png";
import SpainIcon from "../../assets/icons/Spain.svg";
import BenchIcon from "../../assets/icons/bench.svg";

export type MatchItem = {
    date?: string;
    time?: string;
    homeTeam: MatchTeam;
    awayTeam: MatchTeam;
};
export const MatchItem = () => {
    return (
        <div className="flex border-[#09379447] border rounded-lg justify-between p-3 bg-gradient-to-br from-[#0C1A4C66] via-[#102C7366] to-[#0A1F5566]">
            <div className="flex gap-3">
                <div className="text-center text-[#8D8E92]">
                    <div className="mb-2">10/07</div>
                    <div>AET</div>
                </div>
                <div className="">
                    <div className="flex gap-2 mb-2">
                        <span className="">
                            <img src={SpainIcon} alt="" />
                        </span>
                        <span>Spain</span>
                    </div>
                    <div className="flex gap-2">
                        <div className="flex items-center w-6 h-6 rounded-full overflow-hidden">
                            <img
                                src={GeorgiaIcon}
                                alt=""
                                className=" object-cover scale-150"
                            />
                        </div>
                        <span>Georgia</span>
                    </div>
                </div>
            </div>
            <div className="flex gap-2 items-center">
                <div className="">
                    <div className="bg-[#2187E5] py-1 px-2 rounded-tr rounded-tl font-medium text-xs text-center">
                        3
                    </div>
                    <div className="bg-gradient-to-t py-1 px-2 from-[#00289F] via-[#001F7B] to-[#091557] rounded-br rounded-bl text-xs text-center">
                        1
                    </div>
                </div>
                <div className="font-medium text-sm rounded-sm bg-[#2EA76F] w-6 h-6 flex items-center justify-center">
                    {/* <img src={BenchIcon} alt="" /> */}
                    <div>8.2</div>
                    {/* <div>6.1</div> */}
                </div>
            </div>
        </div>
    );
};
