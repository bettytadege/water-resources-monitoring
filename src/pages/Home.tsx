import ActionBar from "@/components/common/ActionBar";
import Footer from "@/components/footer/Footer";
import SystemOverview from "@/components/system-overview/SystemOverview";
import { useState } from "react";
import { Outlet } from "react-router-dom";


const actionBarElements = [
  { id: "1", name: "System Status", route: "/" },
  { id: "2", name: "Data Integration", route: "/data-integration" },
  { id: "3", name: "System Testing", route: "/system-testing" },
];

function Dashboard() {
  const [activeId, setActiveId] = useState("1");

  return (
    <div className="flex justify-center py-8 px-20 flex-col gap-14 w-full  bg-linear-to-r from-slate-50 to-cyan-50 ">
      <div className="text-center max-w-4xl mx-auto space-y-3">
        <h1 className="text-4xl font-bold text-[#0F172B]">
          Ethiopian Water Monitoring Center
        </h1>
        <p className="text-xl text-slate-600">
          Comprehensive water resource management system integrating real-time
          monitoring, AI forecasting, and community engagement for sustainable
          water security
        </p>
      </div>
      <div>
        <SystemOverview/>
      </div>
      <div className="bg-[#F1F5F9] w-full rounded-lg  h-10 py-1 flex flex-row justify-around  ">
        {actionBarElements.map((item) => (
          <ActionBar
            key={item.id}
            name={item.name}
            route={item.route}
            id={item.id}
            isActive={activeId === item.id}
            onActivate={() => setActiveId(item.id)}
          />
        ))}
      </div>
      <div className="">
        <Outlet/>
      </div>
      <Footer/>
    </div>
  );
}

export default Dashboard;
