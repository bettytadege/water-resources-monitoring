import Card from "../common/Card"
import CardContainer from "../common/CardContainer"

const summaryData=[
   
  {
    title: "Tests Passed",
    value: "47/47",
    textColor: "#007A55",
    bgColor: "#ECFDF5"
  },
  {
    title: "Tests Failed",
    value: "0",
    textColor: "#C10007",
    bgColor: "#FEF2F2"
  },
  {
    title: " Coverage",
    value: "1.8s",
    textColor: "#007595",
    bgColor: "#ECFEFF"
  },
  {
    title: "Avg Response",
    value: "100%",
    textColor: "#1447E6",
    bgColor: "#EFF6FF"
  },
]
function ResultSummary() {
  return (
  //  <div className="bg-ice-blue border w-full rounded-xl p-8 space-y-5 shadow-sm ">
    <CardContainer className="shadow-sm p-8 ">
     <p className="text-deep-teal font-semibold text-lg">Test Results Summary</p>
     <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        {summaryData.map((item,key)=>(
            <Card key={key} value={item.value} bgColor={item.bgColor} title={item.title} textColor={item.textColor}/>
        ))}
     </div>
   </CardContainer>
  )
}

export default ResultSummary