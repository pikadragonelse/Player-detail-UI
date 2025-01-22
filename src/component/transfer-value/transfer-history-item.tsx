import clsx from "clsx";
import ChelseaIcon from "../../assets/icons/chelsea.png";

export type TransferHistoryItem = { isBottomBorder?: boolean };
export const TransferHistoryItem = ({
    isBottomBorder = true,
}: TransferHistoryItem) => {
    return (
        <div
            className={clsx("flex items-end py-2  border-[#171B2E]", {
                "border-b": isBottomBorder,
            })}
        >
            <div className="flex gap-2 items-center">
                <div className="w-9 h-9">
                    <img
                        src={ChelseaIcon}
                        alt="Chelsea icon"
                        className="object-fit"
                    />
                </div>
                <div className="">
                    <h3>Chelsea</h3>
                    <p className="mt-1 text-[#8D8E92] text-xs">30 Jun 2020</p>
                </div>
            </div>
            <div className="text-[#48FF5A] text-xs text-right w-fit ml-auto">
                <div>-</div>
                <div>End of loan</div>
            </div>
        </div>
    );
};
