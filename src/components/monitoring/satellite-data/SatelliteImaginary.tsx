import img from "@/assets/images/map.png";
import { LuRefreshCcw } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { RxZoomIn } from "react-icons/rx";
import { MdOutlineFileDownload } from "react-icons/md";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import CardContainer from "@/components/common/CardContainer";

function SatelliteImaginary() {
  return (
   
      <CardContainer>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-deep-teal font-semibold">Satellite Imagery</p>
          <span className="text-slate-purple text-sm">
            Real-time satellite data from multiple sources
          </span>
        </div>

        <div className="flex gap-3">
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

          <div className="bg-white border border-gray-300 rounded-md hover:text-white hover:bg-primary-purple w-12  flex justify-center items-center">
            <LuRefreshCcw />
          </div>
        </div>
      </div>

      <div className="w-full h-[500px]">
        <img
          src={img}
          alt="Sensor Map"
          className="rounded-md w-full h-full object-cover"
        />
      </div>

      <div className="flex justify-between">
        <div></div>

        <div className="flex gap-3">
          <Button className="bg-white border py-1.5 px-3 text-deep-teal transition-all duration-150 hover:bg-primary-purple hover:text-white text-sm font-medium rounded-md">
            <RxZoomIn size={18} /> Zoom
          </Button>
          <Button className="bg-white border py-1.5 px-3 text-deep-teal hover:bg-primary-purple transition-all duration-150 hover:text-white rounded-md text-sm font-medium">
            <MdOutlineFileDownload /> Export
          </Button>
        </div>
      </div>
      </CardContainer>
    
  );
}

export default SatelliteImaginary;
