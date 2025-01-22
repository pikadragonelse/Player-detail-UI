import { TransferChart } from "./transfer-chart";

export const TransferValue = () => {
    return (
        <div className="mb-8 lg:mb-0">
            <div className="w-full h-48 rounded-md p-3 border border-[#09379447] bg-gradient-to-br from-[#0A1F5566] via-[#102C7366] to-[#0C1A4C66] lg:w-96">
                <TransferChart />
            </div>
            <div className="pl-1 mt-4">
                <div className="flex justify-between">
                    <div className="flex gap-2 items-center mb-2">
                        <div className="">
                            <div className="border-t-2 border-dashed border-[#DCA407] w-8" />
                        </div>
                        <div className="text-[#8D8E92] text-xs">
                            Current player value
                        </div>
                    </div>
                    <div className="text-[#8D8E92] text-xs font-semibold">
                        11.6M $
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex gap-2 items-center">
                        <div className="">
                            <div className="border-t-2 border-solid border-[#007bff] w-8" />
                        </div>
                        <div className="text-[#8D8E92] text-xs">
                            Transfer fee
                        </div>
                    </div>
                    <div className="text-[#8D8E92] text-xs font-semibold">
                        (Highest) 66M
                    </div>
                </div>
            </div>
        </div>
    );
};
