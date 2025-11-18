import { MapPin } from "lucide-react"


function SensorDetail() {
  return (
     <div className="border shadow bg-ice-blue rounded-xl p-6  w-full ">
        <div>
          <p className="text-deep-teal font-semibold">Sensor Details</p>
          <span className="text-slate-purple text-sm">Click a sensor on the map</span>
        </div>
        <div className="text-slate-purple flex items-center py-8 flex-col gap-4">
          <MapPin size={50}/>
          <p>Select a sensor on the map to view details</p>
        </div>
    </div>
  )
}

export default SensorDetail