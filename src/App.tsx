import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Features from "./components/feature/Features"
import DataInegration from "./components/data-integration/DataInegration"
import Monitoring from "./pages/Monitoring"
import GeoSpatial from "./pages/GeoSpatial"
import AiForecasting from "./pages/AiForecasting"
import EarlyWarning from "./pages/EarlyWarning"
import SystemTesting from "./components/system-testing/SystemTesting"



function App() {
  return (
    <div className=" w-full h-full bg-linear-to-r from-slate-50 to-cyan-50 p-6">
      <Routes>
        <Route path="/" element={ <Home/>}>
        <Route path="/" element={ <Features/> }/>
        <Route path="/data-integration" element={ <DataInegration/> }/>
        <Route path="/system-testing" element={ <SystemTesting/> }/>
        </Route>
        <Route path="/monitoring" element={ <Monitoring/> }/>
        <Route path="/geospatial" element={ <GeoSpatial/> }/>
        <Route path="/ai-forecasting" element={ <AiForecasting/> }/>
        <Route path="/early-warning" element={ <EarlyWarning/> }/>
      </Routes>
     
    </div>
  )
}

export default App