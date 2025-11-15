import { ReactNode } from "react"
import { useNavigate } from "react-router-dom"

type QuickAccessCard = {
  icon: ReactNode,
  name: string,
  route: string,
}

function QuickAccessCard({ icon: Icon, name, route }: QuickAccessCard) {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate(route)} className='border border-gray-300 flex flex-col items-center gap-2 justify-center bg-inherit h-20 font-medium w-full rounded-md hover:bg-[#8B5CF6] group '>
      <Icon className="text-sky-blue" size={18} />
      <p className="text-deep-teal text-xs group-hover:text-white">{name}</p>

    </div>
  )
}

export default QuickAccessCard