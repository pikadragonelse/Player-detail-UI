import React from "react";
import logo from "../assets/icons/logo+hamburger.png";
import footballIcon from "../assets/icons/Football-icon.svg";
export const Header = () => {
    return (
        <div>
            <div className="">
                <div className="">
                    <img src={logo} alt="Web logo" />
                </div>
                <button>
                    <span>
                        <img src={footballIcon} alt="Football icon" />
                    </span>
                    <span>Football</span>
                </button>
            </div>
            <div className=""></div>
        </div>
    );
};
