import { useState } from "react"
import LocationSearch from "./LocationSearch"
import ApiResponse from "../watersheds/ApiResponse"
import GeoCodingApi from "./GeoCodingApi"


function Geocoding() {
    const[show ,setShow]=useState<boolean>(false)
  return (
 <div className="space-y-12">
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 w-full">     
          <LocationSearch/>
          <GeoCodingApi setShow={setShow} />
    </div>
    {show && <ApiResponse />}
    </div>
  )
}

export default Geocoding