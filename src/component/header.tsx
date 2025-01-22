import logo from "../assets/icons/logo+hamburger.png";
import { NavItem } from "./nav-item";
import UserIcon from "../assets/icons/user.svg";
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
                        <img src={UserIcon} alt="" />
                    </div>
                </div>
            </div>

            <nav className="mx-2 mb-2 lg:absolute lg:top-4 lg:left-52">
                <NavItem />
            </nav>
        </header>
    );
};
