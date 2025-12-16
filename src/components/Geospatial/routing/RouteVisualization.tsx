import CardContainer from "@/components/common/CardContainer"
import { LuRoute } from "react-icons/lu"
import { Button } from "@/components/ui/button"
import img from '@/assets/images/landsat-satellite-imagery-of-ethiopian-watersheds- (1).png'
import { Navigation } from "lucide-react"
import SelectField from "@/components/common/SelectField"
import InfoBlock from "@/components/common/InfoBlock"

const routeSelectOption = [
  { label: "Driving", value: "driving" },
  { label: "Walking", value: "walking" },
  { label: "Cycling", value: "cycling" },
];

function RouteVisualization() {
  return (
    <CardContainer className="flex flex-col gap-6">
      <div className="flex justify-between">
          <InfoBlock icon={LuRoute } title="Route Visualization"  description="Optimal routes for monitoring teams"/>
        {/* select */}
        <SelectField item={routeSelectOption} defaultValue="BlueNile" />

      </div>
      <div className=" bg-muted h-[330px] relative">
        <div className="flex flex-col gap-2 absolute right-4 top-5 ">
          <Button className="bg-white/90 rounded-sm border py-2 px-1 text-deep-teal transition-all duration-150 hover:bg-primary-purple hover:text-white text-sm font-medium ">
            <Navigation size={18} />
          </Button>

        </div>
        {/* route detail  */}
        <div className="bg-white/90 rounded-lg backdrop-blur-sm text-deep-teal absolute bottom-4 text-sm p-3 left-4">
          <p className="text-sm font-medium mb-2 "> Route Details</p>
          <ul className="text-xs space-y-1">
            <li>Distance: 347 km</li>
            <li>Duration: 4h 23m</li>
            <li>Waypoints: 3</li>
          </ul>
        </div>
        <img src={img} alt="" className="object-cover rounded-lg w-full h-full" />

      </div>
    </CardContainer>
  )
}

export default RouteVisualization