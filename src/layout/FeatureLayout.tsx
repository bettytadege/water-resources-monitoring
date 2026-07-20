import { Outlet } from "react-router-dom"


function FeatureLayout() {
  return (
    <>
    <div className="">
        <Outlet/>
    </div>
    </>
  )
}

export default FeatureLayout