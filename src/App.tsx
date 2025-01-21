import { Header } from "./component/header";
import { InfoSection } from "./component/info-section";
import { PersonalInfo } from "./component/personal-info/personal-info";

function App() {
    return (
        <main className="h-full">
            <Header />
            <div className="bg-[#01040D] h-full flex flex-col gap-6 pt-4 lg:p-8 lg:pt-1">
                <InfoSection content={<PersonalInfo />} isClearStyleOnMobile />
                <InfoSection title="Transfer value" />
                <InfoSection title="Matches" />
            </div>
        </main>
    );
}

export default App;
