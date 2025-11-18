import Card from "@/components/common/Card"

const staticsData=[
  
  {
    "title": "Online Sensors",
    "value": 337,
    "textColor": "#007A55",
    "bgColor": "#ECFDF5"
  },
  {
    "title": "Offline Sensors",
    "value": 5,
    "textColor": "#C10007",
    "bgColor": "#FEF2F2"
  },
  {
    "title": "Network Uptime",
    "value": "98.5%",
    "textColor": "#1447E6",
    "bgColor": "#EFF6FF"
  },
  {
    "title": "Daily Readings",
    "value": "1.2M",
    "textColor": "#007595",
    "bgColor": "#ECFEFF"
  }
]


function SensorNetworkStatics() {
  return (
    <div className="bg-ice-blue rounded-xl border shadow p-6 space-y-5">
         <div>
          <p className="text-deep-teal font-semibold">Sensor Network Statistics</p>
          <span className="text-slate-purple text-sm">Overall network health and performance metrics</span>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        {staticsData.map((item,key)=>(
            <Card key={key} value={item.value} bgColor={item.bgColor} title={item.title} textColor={item.textColor}/>
        ))}
     </div>
    </div>
  )
}

export default SensorNetworkStatics