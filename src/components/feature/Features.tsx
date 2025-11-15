import { featureData } from "@/data/dummyData"
import FeatureCard from "../common/FeatureCard"


function Features() {
  return (
    <>
    <div className=" w-full flex ">
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 w-full ">
      {featureData.map((data,key)=>(
      <FeatureCard 
      icon={data.icon} 
      key={key}
      description={data.description} 
      lastUpdate={data.lastUpdated}  
      status={data.status} 
      name={data.title}
      upTime={data.uptime}/>
      ))}
      </div>
    </div>
    </>
  )
}

export default Features