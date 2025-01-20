import React from "react";
import footballIcon from "../assets/icons/Football-icon.svg";

export const NavItem = () => {
    return (
        <button className="bg-transparent lg:bg-gradient-to-r p-[1.5px] from-[#1456FF80] via-[#658BEC80] to-[#092E8D80] rounded-full ">
            <div className="flex flex-col items-center gap-2 py-2 px-6 rounded-lg bg-[#1c33a8] lg:flex-row lg:py-2 lg:px-3 lg:bg-gradient-to-r from-[#203397] via-[#122690] to-[#091557] lg:rounded-full">
                <span>
                    <img
                        src={footballIcon}
                        alt="Football icon"
                        className="w-8 lg:w-6"
                    />
                </span>
                <span className="text-white uppercase text-[8px] lg:font-semibold lg:text-xs">
                    Football
                </span>
            </div>
        </button>
    );
};
