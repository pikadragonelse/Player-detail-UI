import { ReactNode } from "react";

export type InfoSection = {
    title?: string;
    content?: ReactNode;
    isClearStyleOnMobile?: boolean;
};
export const InfoSection = ({
    title,
    content,
    isClearStyleOnMobile,
}: InfoSection) => {
    return (
        <div
            className={
                isClearStyleOnMobile
                    ? "bg-[#020C20] lg:rounded-lg"
                    : "bg-[#020C20] rounded-lg"
            }
        >
            <h1 className="uppercase font-medium w-fit m-auto lg:m-0">
                {title}
            </h1>
            <div className="">{content}</div>
        </div>
    );
};
