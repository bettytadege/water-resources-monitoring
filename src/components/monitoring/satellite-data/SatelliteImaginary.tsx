import img from "@/assets/images/map.png";
import { LuRefreshCcw } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { RxZoomIn } from "react-icons/rx";
import { MdOutlineFileDownload } from "react-icons/md";
import CardContainer from "@/components/common/CardContainer";
import SelectField from "@/components/common/SelectField";

const satelliteSelectOption = [
  { label: "Landsat-8", value: "landSat-8" },
  { label: "Satellite", value: "satellite" },
  { label: "Terrain", value: "terrain" },
];
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
           <SelectField item={satelliteSelectOption} defaultValue="landSat-8"/>
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
