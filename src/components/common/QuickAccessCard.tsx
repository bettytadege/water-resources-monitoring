import { ReactNode } from "react"

type QuickAccessCard = {
  icon: ReactNode,
  name: string,
}

function QuickAccessCard({icon:Icon,name}:QuickAccessCard) {
  return (
    <div className='border border-gray-300 flex flex-col items-center gap-2 justify-center bg-inherit h-20 font-medium w-48 rounded-md hover:bg-[#8B5CF6] group '>
            <Icon className="text-sky-blue" size={18} />
            <p className="text-deep-teal text-xs group-hover:text-white">{name}</p>
       
    </div>
  )
}

export default QuickAccessCard