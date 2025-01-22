import { Header } from "./component/header";
import { InfoSection } from "./component/info-section";
import { MatchList } from "./component/match/match-list";
import { PersonalInfo } from "./component/personal-info/personal-info";
import { TransferHistory } from "./component/transfer-value/transfer-history";
import { TransferValue } from "./component/transfer-value/transfer-value";

function App() {
    return (
        <main className="h-full">
            <Header />
            <div className="bg-[#01040D] flex flex-col gap-6 pt-4 lg:p-8 lg:pt-1 overflow-auto">
                <InfoSection content={<PersonalInfo />} isClearStyleOnMobile />
                <div className="lg:flex ">
                    <div className="lg:w-1/2">
                        <InfoSection
                            title="Transfer value"
                            content={<TransferValue />}
                            className="lg:border-[#171B2E] lg:border-r rounded-tr-none rounded-br-none"
                            isPadding
                        />
                    </div>

                    <div className="flex items-center flex-1 px-4 bg-[#020C20] rounded-tr-lg rounded-br-lg">
                        <TransferHistory className="flex-1" />
                    </div>
                </div>

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
