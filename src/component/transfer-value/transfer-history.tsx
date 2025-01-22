import { TransferHistoryItem } from "./transfer-history-item";

export type TransferHistory = { className?: string };
export const TransferHistory = ({ className }: TransferHistory) => {
    return (
        <div className={className}>
            <TransferHistoryItem />
            <TransferHistoryItem />
            <TransferHistoryItem />
            <TransferHistoryItem />
            <TransferHistoryItem isBottomBorder={false} />
        </div>
    );
};
