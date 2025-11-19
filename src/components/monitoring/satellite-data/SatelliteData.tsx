import SatelliteDataAnalysis from "./SatelliteDataAnalysis"
import SatelliteImaginary from "./SatelliteImaginary"
import WaterChangeDetection from "./WaterChangeDetection"


function SatelliteData() {
  return (
    <>
    <div className="space-y-5">
     <div className="grid lg:grid-cols-[1fr_35%] grid-cols-1 gap-5 w-full">     
          <SatelliteImaginary/>
          <SatelliteDataAnalysis />
        </div>
        <WaterChangeDetection/>
        </div>
    </>
  )
}

export default SatelliteData