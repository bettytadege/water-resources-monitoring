import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Features from "./components/feature/Features"



function App() {
  return (
    <div className=" w-full h-full bg-linear-to-r from-slate-50 to-cyan-50 p-6">
      <Routes>
        <Route path="/" element={ <Home/>}>
        <Route path="/" element={ <Features/> }/>
        </Route>
      </Routes>
     
    </div>
  )
}

export default App