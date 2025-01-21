import clsx from "clsx";

export type PersonalInfoItem = {
    title?: string;
    description?: string;
    subDescription?: string;
    icon?: string;
    className?: string;
};
export const PersonalInfoItem = ({
    title,
    description,
    subDescription,
    icon,
    className,
}: PersonalInfoItem) => {
    return (
        <div className={`p-3 border-t border-l border-[#171B2E] ${className}`}>
            <h2
                className={clsx("text-[#AAAAAA] text-xs ", {
                    "-mt-1": subDescription,
                })}
            >
                {title}
            </h2>
            <div
                className={clsx("flex mt-1 gap-2  font-medium", {
                    "items-center": !subDescription,
                    "items-start": subDescription,
                })}
            >
                <div>
                    <img src={icon} alt="" />
                </div>
                <div className={clsx("relative", { "-mt-1": subDescription })}>
                    <p className="text-sm">{description}</p>
                    <p className="text-xs text-[#AAAAAA] font-normal absolute">
                        {subDescription}
                    </p>
                </div>
            </div>
        </div>
    );
};
