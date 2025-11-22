
import {  Thermometer, Activity, Cloud } from "lucide-react";
import { FaWater } from "react-icons/fa";
import StatCard from "./card/StatCard";
import RegionalDistribution from "./RegionalDistribution";
import WaterLevelTrend from "./WaterLevelTrend";
import ReserviorStatus from "./ReserviorStatus";

const statsData = [
  {
    title: "Total Water Bodies",
    value: 1247,
    change: "+12% from last month",
    icon:  FaWater,           
    textColor: "#164E63",      
    iconColor: "#164E63",      
    iconBgColor: "#E7EDEF"     
  },
  {
    title: "Active Sensors",
    value: 342,
    change: "98.5% operational",
    icon: Activity,
    textColor: "#8B5CF6",
    iconColor: "#8B5CF6",      
    iconBgColor: "#F3EEFE"     
  },
  {
    title: "Avg Temperature",
    value: "24.2°C",
    change: "+1.2°C from yesterday",
    icon: Thermometer,
    textColor: "#164E63",
    iconColor: "#BE123c",      
    iconBgColor: "#FDEBEE"     
  },
  {
    title: "Rainfall Today",
    value: "15.7mm",
    change: "Above average",
    icon: Cloud,
    textColor: "#FBBF24",
    iconColor: "#FBBF24",      
    iconBgColor: "#FEF8E9"     
  }
];


function WaterLevelDashboard() {
  return (
    <>
    <div className="w-full space-y-8">
    <div className="grid lg:grid-cols-4 gap-6 md:grid-cols-2 grid-cols-1">
        {statsData.map((data,key)=>(
            <StatCard change={data.change} icon={data.icon} iconBgColor={data.iconBgColor} key={key} textColor={data.textColor} iconColor={data.iconColor} value={data.value} title={data.title}/>
        ))}
    </div>
    <div className="flex gap-5">
         <WaterLevelTrend />
        <RegionalDistribution/>
    </div>
    <ReserviorStatus/>
    </div>
    
    </>
  )
}

export default WaterLevelDashboard