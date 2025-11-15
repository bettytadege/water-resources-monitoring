import Card from "../common/Card"

const metricsData=[
  {
    "title": "Average Response Time",
    "value": "2.3s",
    "textColor": "#007A55",
    "bgColor": "#ECFDF5"
  },
  {
    "title": "Data Accuracy",
    "value": "99.8%",
    "textColor": " #007595",
    "bgColor": "#ECFEFF"
  },
  {
    "title": "Daily Data Points",
    "value": "1.2M",
    "textColor": "#1447E6",
    "bgColor": "#EFF6FF"
  }
]

function HealthMetrics() {
  return (
    <>
   <div className="bg-ice-blue border w-full rounded-xl p-8 space-y-5 shadow-sm ">
     <p className="text-deep-teal font-semibold text-lg">Integration Health Metrics</p>
     <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        {metricsData.map((item,key)=>(
            <Card key={key} value={item.value} bgColor={item.bgColor} title={item.title} textColor={item.textColor}/>
        ))}
     </div>
    </div>
    </>
  )
}

export default HealthMetrics