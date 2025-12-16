/* eslint-disable @typescript-eslint/no-explicit-any */
import CardContainer from "@/components/common/CardContainer"
import InfoBlock from "@/components/common/InfoBlock"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react"
import { useState } from "react";


function GeoCodingApi({setShow}:{setShow:(val:boolean)=>void}) {
      const [isLoading, setIsLoading] = useState(false);
      const[search,setSearch]=useState()

      console.log('serach',search)
    
      const handleClick = () => {
        setShow(true);
        setIsLoading(true);
    
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      };
  return (
      <CardContainer className="flex flex-col gap-6">
        {isLoading && <div className="bg-white/20  z-10 rounded-xl absolute inset-0 w-full h-full"></div>}
      <div className="flex justify-between">
          <InfoBlock icon={Search } title="Geocoding API"  description="Search locations and convert between addresses and coordinates"/>
      </div>
      {/* search bar */}
      <div className="flex gap-4">
        <Input value={search} onChange={(e:any)=>setSearch(e.target.value)} className="py-4 shadow border-0 w-full  focus-visible:ring-ring/50 focus:border-deep-teal focus:border focus:ring-blue-500" placeholder="Search for a location..."/>
        <Button disabled={!search} className="bg-deep-teal rounded-sm">Search</Button>
      </div>
      {/* buttons */}
     <div className="flex-col flex gap-3 w-full mt-4">
            <Button
              onClick={handleClick}
              className="py-2 text-sm bg-white shadow-xs rounded-md hover:text-white  text-deep-teal font-medium border hover:bg-primary-purple duration-150 transition-all"
            >
              Search "Lake Tana"
            </Button>
    
            <Button
              onClick={handleClick}
              className="py-2 text-sm text-deep-teal shadow-xs rounded-md  font-medium hover:bg-primary-purple duration-150 transition-all hover:text-white bg-white border"
            >
              Search "Tekeze Dam"
            </Button>
    
            <Button
              onClick={handleClick}
              className="py-2 text-sm text-deep-teal shadow-xs rounded-md  font-medium hover:bg-primary-purple duration-150 transition-all hover:text-white bg-white border"
            >
              Reverse Geocode Addis Ababa
            </Button>
          </div>
      </CardContainer>
  )
}

export default GeoCodingApi