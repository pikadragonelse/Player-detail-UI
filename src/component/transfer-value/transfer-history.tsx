import { TransferHistoryItem } from "./transfer-history-item";

export const TransferHistory = () => {
    return (
        <div>
            <TransferHistoryItem />
            <TransferHistoryItem />
            <TransferHistoryItem />
            <TransferHistoryItem />
            <TransferHistoryItem isBottomBorder={false} />
        </div>
    );
};
