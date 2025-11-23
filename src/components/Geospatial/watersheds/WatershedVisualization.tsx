import CardContainer from "@/components/common/CardContainer"
import { LuLayers } from "react-icons/lu"
import waterhsedpng from '@//assets/images/landsat-satellite-imagery-of-ethiopian-watersheds-.png'
import { Button } from "@/components/ui/button"
import { RxZoomIn } from "react-icons/rx"
import { MdOutlineFileDownload } from "react-icons/md"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

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
          <Select defaultValue="landsat-8">
            <SelectTrigger className="w-[120px] h-8 border bg-inherit text-slate-purple flex justify-between items-center px-2 rounded">
              <SelectValue placeholder="Select layer" />
            </SelectTrigger>
            <SelectContent className="w-[120px] mt-2 text-slate-purple text-sm bg-white rounded-md">
              <SelectGroup>
                <SelectItem
                  value="landsat-8"
                  className="py-2 px-3 rounded data-highlighted:bg-primary-purple data-highlighted:text-white">
                  Landsat-8
                </SelectItem>
                <SelectItem
                  value="satellite"
                  className="py-2 px-3 rounded data-highlighted:bg-primary-purple data-highlighted:text-white"
                >
                  Satellite
                </SelectItem>
                <SelectItem
                  value="terrain"
                  className="py-2 px-3 rounded data-highlighted:bg-primary-purple data-highlighted:text-white"
                >
                  Terrain
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
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