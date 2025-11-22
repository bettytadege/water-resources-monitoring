import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Features from "./components/feature/Features"
import DataInegration from "./components/data-integration/DataInegration"
import Monitoring from "./pages/Monitoring"
import GeoSpatial from "./pages/GeoSpatial"
import EarlyWarning from "./pages/EarlyWarning"
import SystemTesting from "./components/system-testing/SystemTesting"
import WaterLevelDashboard from "./components/monitoring/overview/WaterLevelDashboard"
import SensorNetwork from "./components/monitoring/sensor-network/SensorNetwork"
import AiForecasting from "./components/monitoring/ai-forecasting/AiForecasting"
import AiForecastingDashboard from "./pages/AiForecastingDashboard"
import SatelliteData from "./components/monitoring/satellite-data/SatelliteData"
import Watersheds from "./components/Geospatial/watersheds/Watersheds"



function App() {
  return (
    <div className=" w-full h-full ">
      <Routes>
        {/* home */}
        <Route path="/" element={ <Home/>}>
        <Route path="/" element={ <Features/> }/>
        <Route path="/data-integration" element={ <DataInegration/> }/>
        <Route path="/system-testing" element={ <SystemTesting/> }/>
        </Route>
        {/* monitoring route */}
        <Route path="/monitoring" element={ <Monitoring/> }>
        <Route path="" element={ <WaterLevelDashboard/> }/>
        <Route path="sensor-network" element={ <SensorNetwork/> }/>
        <Route path="ai-forecasting" element={ <AiForecasting/> }/>
        <Route path="satellite-data" element={ <SatelliteData/> }/>
        </Route>
        {/* geospatial route */}
        <Route path="/geospatial" element={ <GeoSpatial/> }>
        <Route path="" element={ <Watersheds/> }/>
        </Route>
        {/* ai forecasting route */}
        <Route path="/ai-forecasting" element={ <AiForecastingDashboard/> }/>
        {/* early warning route */}
        <Route path="/early-warning" element={ <EarlyWarning/> }/>
      </Routes>
     
    </div>
  )
}

export default App