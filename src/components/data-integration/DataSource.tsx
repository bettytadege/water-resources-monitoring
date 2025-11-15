import DataFlowCard from "../common/DataFlowCard";

const dataSources = [
    { name: "Satellite Imagery", status: "Active" },
    { name: "Sensor Networks",  status: "Active" },
    { name: "Weather Stations", status: "Active" },
    { name: "Community Reports", status: "Active" },
];

function DataSource() {
    return (
        <>
            <div className="border bg-inherit w-full rounded-xl p-6 space-y-7 shadow">
                <h1 className="text-deep-teal text-xl font-semibold">Data Sources</h1>
                <div className="flex flex-col gap-3">
                {dataSources.map((item, key) => (
                    <DataFlowCard name={item.name} status={item.status} key={key} />
                ))}
                </div>
            </div>
        </>
    )
}

export default DataSource