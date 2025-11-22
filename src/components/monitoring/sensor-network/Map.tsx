import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import img from "@/assets/images/map.png";
import CardContainer from "@/components/common/CardContainer";


function Map() {
  return (
   <CardContainer>
     
      <div className="flex justify-between items-center">
        <div>
          <p className="text-deep-teal font-semibold">Sensor Network Map</p>
          <span className="text-slate-purple text-sm">Real-time sensor locations across Ethiopia</span>
        </div>
        <Select defaultValue="hybrid">
          <SelectTrigger className="w-[120px] h-8 border shadow bg-inherit text-black flex justify-between items-center px-2 rounded">
            <SelectValue />   
          </SelectTrigger>
          <SelectContent className="w-[120px] mt-1 text-sm bg-white rounded-md">
            <SelectGroup>
              <SelectItem
                value="hybrid"
                className="py-2 px-3 rounded data-highlighted:bg-primary-purple data-highlighted:text-white"
              >
                Hybrid
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
      <div className="w-full h-[500px]">
        <img src={img} alt="Sensor Map" className="rounded-md w-full h-full object-cover" />
      </div>
   </CardContainer>
  );
}

export default Map;
