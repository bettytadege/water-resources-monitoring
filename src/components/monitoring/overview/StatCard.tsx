import { LucideIcon } from "lucide-react"
import { IconType } from "react-icons"

type StatCardProps = {
  title: string
  value: number | string
  change: string
  icon:LucideIcon | IconType,
  textColor:string,
  iconColor:string,
  iconBgColor:string,
}


function StatCard({change,icon:Icon,iconBgColor,iconColor,textColor,title,value}:StatCardProps) {
  return (
    <>
    <div className="shadow-sm rounded-xl p-6 w-full hover:scale-105 hover:shadow-lg hover:duration-300 transition-all">
      <div className="flex flex-col gap-10">
        <div className="flex justify-between items-center">
          <p className="text-deep-teal text-sm">{title}</p>
          <span className="rounded-md size-8 flex items-center justify-center" style={{background:iconBgColor,color:iconColor}}><Icon className="w-4"/></span>
        </div>
        <div >
          <p style={{color:textColor}} className=" text-3xl font-bold tracking-wide">{value}</p>
          <p className="text-slate-purple text-xs">{change}</p>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default StatCard