import Fire from "@/assets/svg/Fire"
import { Button } from "../ui/button"
import { BsActivity } from "react-icons/bs"
import { Satellite } from "lucide-react"


function Header() {
  return (
    <>
    <div className="space-y-6 bg-white/20 backdrop-blur-md ">
    <div className="flex justify-between items-center px-6 py-4">
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
        <div className="flex gap-5 items-center">
            <div className="">
            <Button className="bg-inherit border hover:bg-inherit py-0.5 border-deep-teal text-deep-teal"><BsActivity />Live Data</Button></div>
            <Button  className="bg-inherit border hover:bg-deep-teal py-2 hover:text-white  text-slate-purple"><Satellite/>Satellite View</Button>
        </div>
    </div>
      <hr className="w-full border-neutral-300 " />
     </div>
     </>
  )
}

export default Header