import React from "react";
import logo from "../assets/icons/logo+hamburger.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { NavItem } from "./nav-item";
export const Header = () => {
    return (
        <header className="flex flex-col justify-between bg-gradient-to-r from-[#203397] via-[#122690] to-[#091557] relative">
            <div className="flex justify-between items-center py-2 px-5 lg:py-4 lg:px-10">
                <div className="flex gap-6 flex-col md:flex-row">
                    <div className="">
                        <img
                            src={logo}
                            alt="Web logo"
                            className="w-24 lg:w-32"
                        />
                    </div>
                </div>
                <div className="">
                    <div className="p-3 lg:p-4 rounded-full bg-[#02020F26]">
                        <FontAwesomeIcon
                            icon={faUser}
                            className="text-white w-3 h-3 lg:w-4 lg:h-4 block"
                        />
                    </div>
                </div>
            </div>

            <nav className="mx-2 mb-2 lg:absolute lg:top-4 lg:left-52">
                <NavItem />
            </nav>
        </header>
    );
};
