import ActionBar from "@/components/common/ActionBar"
import { useState } from "react";
import { Outlet } from "react-router-dom";

const actionBarElements = [
  { id: "1", name: "Watersheds", route: "/geospatial" },
  { id: "2", name: " Routing", route: "/geospatial/routing" },
  { id: "3", name: " Geocoding", route: "/geospatial/geocoding" },
  { id: "4", name: "Aquifers", route: "/geospatial/aquifers" },
  { id: "5", name: "Intrgration", route: "/geospatial/integration" },
];
function GeoSpatial() {
    const [activeId, setActiveId] = useState("1");
  return (
    <>
    <div className="mx-24 my-8 space-y-4">
      <div className="text-slate-purple text-center">
      <h1 className="text-3xl font-bold  ">
          Geospatial API Infrastructure
        </h1>
        <p>
          AmbaLay Maps APIs for hydrological mapping, routing, and system integration
        </p>
        </div>
       <div className="bg-[#F7F9FB] w-full rounded-lg  h-10 py-1 flex flex-row justify-around  ">
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
          
          <Outlet/>
       
    </div>
    </>
  )
}

export default GeoSpatial