import { TransferChart } from "./transfer-chart";
import { TransferHistory } from "./transfer-history";

export const TransferValue = () => {
    return (
        <div className="lg:flex">
            <div className="mb-8 border-[#171B2E] lg:border-r lg:mb-0 lg:w-1/2">
                <div className="w-full h-48 rounded-md p-3 border border-[#09379447] bg-gradient-to-br from-[#0A1F5566] via-[#102C7366] to-[#0C1A4C66] lg:w-96">
                    <TransferChart />
                </div>
                <div className="pl-1 mt-4">
                    <div className="flex gap-2 items-center mb-2">
                        <div className="">
                            <div className="border-t-2 border-dashed border-[#DCA407] w-8" />
                        </div>
                        <div className="text-[#8D8E92] text-xs">
                            Current player value
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className="">
                            <div className="border-t-2 border-solid border-[#007bff] w-8" />
                        </div>
                        <div className="text-[#8D8E92] text-xs">
                            Transfer fee
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1 px-4">
                <TransferHistory />
            </div>
        </div>
    );
};
