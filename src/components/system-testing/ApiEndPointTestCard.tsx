import DataFlowCard from "../common/DataFlowCard";

 const apiEndPoint = [
  { "name": "/api/geospatial/*", "status": "Passed" },
  { "name": "/api/ai/*", "status": "Passed" },
  { "name": "/api/alerts/*", "status": "Passed" },
  { "name": "/api/community/*", "status": "Passed" },
  { "name": "/api/admin/*", "status": "Passed" },

  ];

function ApiEndPointTestCard() {
  return (
 <div className="border bg-inherit w-full rounded-xl p-6 space-y-7 shadow">
        <h1 className="text-deep-teal text-xl font-semibold">Data Process</h1>
        <div className="flex flex-col gap-3">
        {apiEndPoint.map((item,key)=>(
         <DataFlowCard name={item.name} status={item.status} key={key}/>
        ))}
       </div>
       </div>
  )
}

export default ApiEndPointTestCard