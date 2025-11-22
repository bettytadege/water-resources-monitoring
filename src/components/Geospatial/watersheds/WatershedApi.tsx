import CardContainer from "@/components/common/CardContainer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { LuLayers } from "react-icons/lu";

type WaterApiProps = {
  setShow: (value: boolean) => void;
};

function WatershedApi({ setShow }: WaterApiProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setShow(true);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <CardContainer
      className={`relative transition-all duration-300 }`}
    >
      {isLoading &&  <div className="bg-white/20  z-10 rounded-xl absolute inset-0 w-full h-full"></div> }    
        <div>
          <div className="text-deep-teal flex items-center gap-2">
            <LuLayers />
            <p className="font-semibold">Watershed API</p>
          </div>
          <p className="text-slate-purple text-sm">
            Access watershed boundaries, water bodies, and hydrological data
          </p>
        </div>

        {/* Buttons */}
        <div className="flex-col flex gap-3 w-full mt-4">
          <Button
            onClick={handleClick}
            className="py-2 text-sm text-white font-medium hover:bg-[#1a5c75] bg-deep-teal border duration-150 transition-all"
          >
            Get All Watersheds
          </Button>

          <Button
            onClick={handleClick}
            className="py-2 text-sm text-deep-teal font-medium hover:bg-primary-purple duration-150 transition-all hover:text-white bg-white border"
          >
            Get Geo JSON Format
          </Button>

          <Button
            onClick={handleClick}
            className="py-2 text-sm text-deep-teal font-medium hover:bg-primary-purple duration-150 transition-all hover:text-white bg-white border"
          >
            Filter by Region
          </Button>
        </div>

        {/* API Endpoints */}
        <div className="text-deep-teal space-y-3 mt-5">
          <p className="text-sm">API Endpoints:</p>

          <ul className="bg-[#F1F5F9] p-3 text-sm rounded-md space-y-1 font-mono">
            <li>GET /api/geospatial/watersheds</li>
            <li>POST /api/geospatial/watersheds</li>
            <li className="text-slate-purple">
              Parameters: region, minArea, format
            </li>
          </ul>
        </div>
     
    </CardContainer>
  );
}

export default WatershedApi;
