
import { systemOverviewData } from "@/data/dummyData"
import SystemCard from "../common/SystemCard"


function SystemOverview() {
    return (
        <>
            <div className="grid  gap-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                {systemOverviewData.map((data) => (
                    <SystemCard borderColor={data.borderColor} value={data.value} title={data.title} subtitle={data?.subtitle} key={data.id} icon={data.icon} statusColor={data.statusColor} />
                ))}

            </div>

        </>
    )
}

export default SystemOverview