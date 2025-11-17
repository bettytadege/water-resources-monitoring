import Fire from "@/assets/svg/Fire"
import { Button } from "../ui/button"
import { BsActivity } from "react-icons/bs"
import { Satellite } from "lucide-react"


function Header() {
  return (
    <>
    <div className="flex justify-between items-center bg-white/20 backdrop-blur-md ">
        <div className="flex items-center gap-4">
            <div className="bg-[#E7EDEF] rounded-md size-12 flex items-center justify-center">
                <Fire />
            </div>
            <div className="text-slate-purple">
                <p className="text-3xl font-bold">AmbaLay Water Monitoring</p>
                <span className="text-sm">Ethiopian Space Science & Geospatial Institute</span>
            </div>
        </div>
        {/* buttons */}
        <div className="flex gap-5">
            <Button className="bg-inherit border hover:bg-inherit  border-deep-teal text-deep-teal"><BsActivity />Live Data</Button>
            <Button  className="bg-inherit border hover:bg-deep-teal hover:text-white  text-slate-purple"><Satellite/>Satellite View</Button>
        </div>
    </div>
     
     </>
  )
}

export default Header