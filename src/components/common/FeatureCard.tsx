import { CircleCheckBig } from "lucide-react"
import { ReactNode } from "react"
import { Button } from "../ui/button"
import ProgressBar from "./ProgressBar"
import { useNavigate } from "react-router-dom"

type FeatureCardProps = {
  icon: ReactNode,
  name: string,
  description: string,
  status: string,
  upTime: number,
  lastUpdate: string
}

function FeatureCard({ icon: Icon, name, description, status, upTime, lastUpdate }: FeatureCardProps) {
  const navigate=useNavigate()
const handleClick = () => {
  switch (name) {
    case "Real-Time Monitoring":
      navigate("/monitoring");
      break;
    case "Geospatial APIs":
      navigate("/geospatial");
      break;
    case "AI Forecasting":
      navigate("/ai-forecasting");
      break;
    case "Early Warning System":
      navigate("/early-warning");
      break;
    case "Community Platform":
      navigate("/community");
      break;
    case "Administrative Dashboard":
      navigate("/admin-dashboard");
      break;
    default:
      console.warn('');
  }
};

  return (
    <>
      <div className="border  shadow rounded-xl p-6 h-auto w-full bg-ice-blue flex flex-col  gap-6 hover:shadow-lg cursor-default">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-3 font-semibold text-lg text-deep-teal">
            <Icon className="text-sky-blue" size={18} />
            {name}</span>
          <CircleCheckBig className="text-green-600" size={18} />
        </div>
        <div className="text-sm text-slate-purple">
          <p>{description}</p>
        </div>
        <div className="flex justify-between font-semibold">
          <p className="text-deep-teal font-semibold">Status:</p>
          <span className="bg-[#D0FAE5] py-0.5 px-3 font-normal text-xs text-center text-slate-purple rounded-md">{status}</span>
        </div>
         <div className="flex justify-between text-sm text-deep-teal">
        <p>Uptime</p>
        <span className="font-medium">{upTime}%</span>
      </div>
      {/* pogressbar */}
      <ProgressBar width={upTime}/>
      <div className="flex justify-between  text-sm">
        <p className="text-slate-purple">Last updated:</p>
        <span className="text-deep-teal">{lastUpdate}</span>
      </div>
      <Button onClick={handleClick} className="bg-inherit border shadow hover:bg-[#8B5CF6] hover:text-white text-deep-teal">
      Access System
      </Button>
      </div>
     
    </>
  )
}

export default FeatureCard