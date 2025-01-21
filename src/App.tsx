import { Header } from "./component/header";
import { InfoSection } from "./component/info-section";
import { MatchList } from "./component/match/match-list";
import { PersonalInfo } from "./component/personal-info/personal-info";
import { TransferValue } from "./component/transfer-value/transfer-value";

function App() {
    return (
        <main className="h-full">
            <Header />
            <div className="bg-[#01040D] flex flex-col gap-6 pt-4 lg:p-8 lg:pt-1 overflow-auto">
                <InfoSection content={<PersonalInfo />} isClearStyleOnMobile />
                <InfoSection
                    title="Transfer value"
                    content={<TransferValue />}
                    isPadding
                />
                <InfoSection
                    title="Matches"
                    content={<MatchList />}
                    isPadding
                />
            </div>
        </main>
    );
}

export default App;
