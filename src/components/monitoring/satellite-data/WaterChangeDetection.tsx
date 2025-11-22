import Card from "@/components/common/Card"
import CardContainer from "@/components/common/CardContainer"
const changeDetectionData=
[
  {
    "title": "New Water Bodies Detected",
    "value": "+47",
    "textColor": "#007A55",
    "bgColor": "#ECFDF5"
  },
  {
    "title": "Average Water Level Increase",
    "value": "12.3%",
    "textColor": "#C10007",
    "bgColor": "#FEF2F2"
  },
  {
    "title": "Detection Accuracy",
    "value": "98.7%",
    "textColor": "#007595",
    "bgColor": "#ECFEFF"
  }
]



function WaterChangeDetection() {
  return (
    <CardContainer>
         <div>
          <p className="text-deep-teal font-semibold">Water Body Change Detection</p>
          <span className="text-slate-purple text-sm">Temporal analysis of water body changes over time</span>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-4">
        {changeDetectionData.map((item,key)=>(
            <Card key={key} value={item.value} bgColor={item.bgColor} title={item.title} textColor={item.textColor}/>
        ))}
     </div>
     </CardContainer>
  
  )
}

export default WaterChangeDetection