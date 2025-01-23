import { MatchItem } from "./match-item";
import MatchesData from "../../data/matchList.json";
export const MatchList = () => {
    const eventData = MatchesData.data.events;
    return (
        <div className="flex flex-col gap-4 max-h-[650px] overflow-auto scroll-container">
            {eventData.map((event) => (
                <MatchItem event={event} />
            ))}
        </div>
    );
};
