import { useState } from "react"
import RouteVisualization from "./RouteVisualization"
import RoutingApi from "./RoutingApi"
import ApiResponse from "../watersheds/ApiResponse"

function Routing() {
 const[show ,setShow]=useState<boolean>(false)
  return (
    <div className="space-y-12">
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 w-full">     
          <RouteVisualization/>
          <RoutingApi setShow={setShow} />
    </div>
    {show && <ApiResponse />}
    </div>
  )
}
      
export default Routing