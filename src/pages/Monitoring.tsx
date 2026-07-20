import ActionBar from "@/components/common/ActionBar"
import Header from "@/components/monitoring/Header"
import WaterLevelAlertCard from "@/components/monitoring/WaterLevelAlertCard"
import { Outlet, useLocation } from "react-router-dom";

const actionBarElements = [
  { id: "1", name: "Overview", route: "/monitoring" },
  { id: "2", name: "Satellite Data", route: "/monitoring/satellite-data" },
  { id: "3", name: "Sensor Network", route: "/monitoring/sensor-network" },
  { id: "4", name: "Ai Forecasting", route: "/monitoring/ai-forecasting" },
];
function Monitoring() {
 
   const location = useLocation();
  console.log('current location', location);
 let activeId ='1'
 const result= actionBarElements.find((item) => location.pathname === item.route);
   if(result){
    activeId=result.id
   }
  return (
    <>
      <div className="bg-white">
        <div className="sticky top-0">
          <Header />
        </div>
        <div className="m-6 flex-col flex gap-5">
          <WaterLevelAlertCard />
          <div className="bg-[#F7F9FB] w-full rounded-lg  h-10 py-1 flex flex-row justify-around  ">
            {actionBarElements.map((item) => (
              <ActionBar
                key={item.id}
                name={item.name}
                route={item.route}
                id={item.id}
                isActive={activeId === item.id}
                
              />
            ))}
          </div>

        </div>
        <div className="m-6">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Monitoring