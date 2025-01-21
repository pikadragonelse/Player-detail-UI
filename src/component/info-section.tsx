import clsx from "clsx";
import { ReactNode } from "react";

export type InfoSection = {
    title?: string;
    content?: ReactNode;
    isClearStyleOnMobile?: boolean;
    isPadding?: boolean;
};
export const InfoSection = ({
    title,
    content,
    isClearStyleOnMobile,
    isPadding,
}: InfoSection) => {
    return (
        <div
            className={clsx({
                "bg-[#020C20] lg:rounded-lg": isClearStyleOnMobile,
                "bg-[#020C20] rounded-lg": !isClearStyleOnMobile,
                "p-4": isPadding,
            })}
        >
            <h1
                className={clsx(
                    "uppercase font-medium w-fit m-auto lg:m-0 pb-4",
                    { "pt-4 pl-4": !isPadding }
                )}
            >
                {title}
            </h1>
            <div className="">{content}</div>
        </div>
    );
};
