import DataProcessing from "./DataProcessing"
import DataSource from "./DataSource"
import HealthMetrics from "./HealthMetrics"


function DataInegration() {
  return (
    <div className="bg-ice-blue border w-full rounded-xl p-8 space-y-5 shadow-sm">
        <div className="space-y-1">
            <p className="text-deep-teal font-semibold ">Cross-System Data Flow</p>
            <p className="text-sm text-slate-purple">Real-time data integration between all water monitoring systems</p>
            </div>
            <div className=" grid gap-4 w-full md:grid-cols-2 grid-cols-1 ">
             <DataSource/>
             <DataProcessing/>
            </div>
            <HealthMetrics/>
    </div>
  )
}

export default DataInegration