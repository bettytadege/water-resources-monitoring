import { useState } from "react"
import WatershedApi from "./WatershedApi"
import WatershedVisualization from "./WatershedVisualization"
import ApiResponse from "./ApiResponse"


function Watersheds() {
  const[show ,setShow]=useState<boolean>(false)
  console.log('button clicked',show)
  return (
    <>
    <div className="space-y-12">
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 w-full">     
          <WatershedVisualization/>
          <WatershedApi setShow={setShow} />
    </div>
    {show && <ApiResponse />}
    </div>
    </>
  )
}

export default Watersheds