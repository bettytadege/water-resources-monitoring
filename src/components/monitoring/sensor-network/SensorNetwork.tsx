import QualityStatusCard from "./card/QualityStatusCard"
import Map from "./Map"
import SensorDetail from "./SensorDetail"
import SensorNetworkStatics from "./SensorNetworkStatics"

const qualityStatusData = [
  {
    "label": "Temperature",
    "value": 24,
    "unit": "°C",
    "status": "normal"
  },
  {
    "label": "pH Level",
    "value": 7.2,
    "unit": "pH",
    "status": "normal"
  },
  {
    "label": "Turbidity",
    "value": 3.5,
    "unit": "NTU",
    "status": "warning"
  },
  {
    "label": "Dissolved Oxygen",
    "value": 8.1,
    "unit": "mg/L",
    "status": "normal"
  }
] as const


function SensorNetwork() {
  return (
    <>
      <div className="w-full space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5">
          {qualityStatusData.map((status, key) => (
            <QualityStatusCard label={status.label} status={status.status} unit={status.unit} value={status.value} key={key} />
          ))}
        </div>
        <div className="grid lg:grid-cols-[1fr_35%] grid-cols-1 gap-5 w-full">
         
          <Map />
          <SensorDetail />
        </div>
        <SensorNetworkStatics/>
      </div>
    </>
  )
}

export default SensorNetwork