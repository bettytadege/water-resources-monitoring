import { Button } from "../ui/button"
import ApiEndPointTestCard from "./ApiEndPointTestCard"
import IntegrationTestCard from "./IntegrationTestCard"
import ResultSummary from "./ResultSummary"


function SystemTesting() {
    return (
        <>
            <div className="bg-ice-blue border w-full rounded-xl p-8 space-y-5 shadow-sm flex flex-col gap-4">
                <div className="space-y-1">
                    <p className="text-deep-teal font-semibold ">System Integration Testing</p>
                    <p className="text-sm text-slate-purple">Comprehensive testing suite for all water monitoring systems</p>
                </div>
                <div className=" grid gap-4 w-full md:grid-cols-2 grid-cols-1 ">
                    <ApiEndPointTestCard />
                    <IntegrationTestCard />
                </div>
                <div className="flex gap-4 w-full">
                    <Button className="bg-deep-teal hover:bg-[#165a73] text-white flex-1">Run Full Test Suite</Button>
                    <Button className="bg-inherit border shadow text-slate-purple flex-1 hover:bg-[#8B5CF6] hover:text-white duration-100 transition-all">Generate Test Report</Button>
                </div>
                <ResultSummary />
            </div>
        </>
    )
}

export default SystemTesting