import CardContainer from "@/components/common/CardContainer"
import InfoBlock from "@/components/common/InfoBlock"
import { Search } from "lucide-react"
import img from '@/assets/images/map.png'

function LocationSearch() {
  return (
    <CardContainer className="flex flex-col gap-6">
      <div className="flex justify-between">
          <InfoBlock icon={Search } title="Location Search"  description="Search and visualize Ethiopian locations"/>
      </div>
      <div className=" bg-muted h-[330px] relative">
        {/* search results */}
        <div className="bg-white/90 rounded-lg backdrop-blur-sm text-deep-teal absolute bottom-4 text-sm p-3 left-4">
          <p className="text-sm font-medium mb-2 "> Search Results</p>
          <ul className="text-xs space-y-1">
            <li className="flex items-center gap-2" ><div className="bg-red-600 h-1.5 w-1.5 rounded-full"/>Lake Tana</li>
            <li  className="flex items-center gap-2"><div className="bg-green-600 h-1.5 w-1.5 rounded-full"/> Tekeze Dam</li>
            <li  className="flex items-center gap-2"> <div className="bg-blue-600 h-1.5 w-1.5 rounded-full"/>  Awash River</li>
          </ul>
        </div>
        <img src={img} alt="" className="object-cover rounded-lg w-full h-full" />

      </div>
    </CardContainer>
  )
}

export default LocationSearch