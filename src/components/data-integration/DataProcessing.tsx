import DataFlowCard from "../common/DataFlowCard";

 const dataProcessing = [
    { name: "AI Model Processing", status: "Running" },
    { name: "Geospatial Analysis", status: "Running" },
    { name: "Alert Generation", status: "Running" },
    { name: "Report Compilation", status: "Running" },
  ];

function DataProcessing() {
  return (
    <div className="border bg-inherit w-full rounded-xl p-6 space-y-7 shadow">
        <h1 className="text-deep-teal text-xl font-semibold">Data Process</h1>
         
                <div className="flex flex-col gap-3">
        {dataProcessing.map((item,key)=>(
         <DataFlowCard name={item.name} status={item.status} key={key}/>
        ))}
       </div>
    </div>
  )
}

export default DataProcessing