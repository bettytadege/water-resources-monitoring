import CardContainer from "@/components/common/CardContainer"
import { LuLayers } from "react-icons/lu"
import waterhsedpng from '@//assets/images/landsat-satellite-imagery-of-ethiopian-watersheds-.png'
import { Button } from "@/components/ui/button"
import { RxZoomIn } from "react-icons/rx"
import { MdOutlineFileDownload } from "react-icons/md"

function WatershedVisualization() {
  return (
    <>
      <CardContainer className="flex flex-col gap-6">
        <div className="flex justify-between">
          <div >
            <div className="text-deep-teal flex items-center gap-2">
              <LuLayers />
              <p className=" font-semibold ">Watershed Visualization</p>
            </div>
            <p className="text-slate-purple text-sm">Interactive watershed boundaries and water bodies</p>
          </div>
          {/* select */}
        </div>
        <div className=" bg-muted h-[330px] relative">
          <div className="flex flex-col gap-2 absolute right-4 top-5 ">
            <Button className="bg-white/90 rounded-sm border py-2 px-1 text-deep-teal transition-all duration-150 hover:bg-primary-purple hover:text-white text-sm font-medium ">
              <RxZoomIn size={18} />
            </Button>
            <Button className="bg-white/90 border rounded-sm py-2 px-2 text-deep-teal hover:bg-primary-purple transition-all duration-150 hover:text-white  text-sm font-medium">
              <MdOutlineFileDownload />
            </Button>
          </div>
          {/* watershed data */}
          <div className="bg-white/90 rounded-lg backdrop-blur-sm text-deep-teal absolute bottom-4 text-sm p-3 left-4">
            <p className="text-sm font-medium mb-2 ">Watershed Data</p>
            <ul className="text-xs space-y-2">
              <li>Area: 176,000 km²</li>
              <li>Water Bodies: 1,247</li>
              <li>Avg Elevation: 2,000m</li>
            </ul>
          </div>
          <img src={waterhsedpng} alt="" className="object-cover rounded-lg w-full h-full" />
          
        </div>
      </CardContainer>
    </>
  )
}

export default WatershedVisualization