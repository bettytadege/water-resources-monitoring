import DataFlowCard from "../common/DataFlowCard"
const integrationTesting=[
  { "name": "Cross-system Data Flow", "status": "Passed" },
  { "name": "Alert Propagation", "status": "Passed" },
  { "name": "AI Model Integration", "status": "Passed" },
  { "name": "Geospatial Routing", "status": "Passed" },
  { "name": "Community Reporting", "status": "Passed" }
]

function IntegrationTestCard() {
  return (
   <div className="border bg-inherit w-full rounded-xl p-6 space-y-7 shadow">
        <h1 className="text-deep-teal text-xl font-semibold">Data Process</h1>
        <div className="flex flex-col gap-3">
        {integrationTesting.map((item,key)=>(
         <DataFlowCard name={item.name} status={item.status} key={key}/>
        ))}
       </div>
       </div>
  )
}

export default IntegrationTestCard