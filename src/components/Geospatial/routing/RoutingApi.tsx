import CardContainer from "@/components/common/CardContainer";
import InfoBlock from "@/components/common/InfoBlock";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { LuRoute } from "react-icons/lu";

type RoutingApiProps = {
  setShow: (value: boolean) => void;
};

function RoutingApi({ setShow }: RoutingApiProps) {
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
      className={`relative transition-all duration-300 }`}>
      {isLoading && <div className="bg-white/20  z-10 rounded-xl absolute inset-0 w-full h-full"></div>}
      <InfoBlock icon={LuRoute} title="Routing API" description=" Calculate optimal routes for monitoring teams and field operations" />
      {/* Buttons */}
      <div className="flex-col flex gap-3 w-full mt-4">
        <Button
          onClick={handleClick}
          className="py-2 text-sm text-white font-medium hover:bg-[#1a5c75] bg-deep-teal border duration-150 transition-all"
        >
          Calculate Route (Addis Ababa <IoIosArrowRoundForward /> Lake Tana)
        </Button>

        <Button
          onClick={handleClick}
          className="py-2 text-sm text-deep-teal font-medium hover:bg-primary-purple duration-150 transition-all hover:text-white bg-white border"
        >
          Multi-Dam Route
        </Button>

        <Button
          onClick={handleClick}
          className="py-2 text-sm text-deep-teal font-medium hover:bg-primary-purple duration-150 transition-all hover:text-white bg-white border"
        >
          Optimized Route
        </Button>
      </div>

      {/* API Endpoints */}
      <div className="text-deep-teal space-y-3 mt-5">
        <p className="text-sm">API Endpoints:</p>

        <ul className="bg-[#F1F5F9] p-3 text-sm rounded-md space-y-1 font-mono">
          <li>POST /api/geospatial/routings</li>
          <li className="text-slate-purple">
            Body: origin, destination, waypoints, profile
          </li>
        </ul>
      </div>

    </CardContainer>
  );
}

export default RoutingApi;
