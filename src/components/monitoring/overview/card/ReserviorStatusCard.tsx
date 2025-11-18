import ProgressBar from "@/components/common/ProgressBar"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

type ReserviorStatusCardProps = {
    name: string
    status: "low" | "normal" | "high"
    level: number
}


function ReserviorStatusCard({ name, status, level }: ReserviorStatusCardProps) {
    return (
        <>
            <div className="bg-[#EEF8FB] rounded-xl hover:bg-[#ecf6fa] p-4">
                <div className="flex justify-between">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center justify-center rounded-lg p-2 size-8 bg-[#D8E7EB]">
                            <MapPin />
                        </div>
                        {/* <div className=""> */}
                        <p className="text-deep-teal text-lg font-semibold">{name}</p>
                        <Button className={`${status === 'low' ? 'bg-deep-teal' : status === 'normal' ? 'bg-primary-purple' : 'bg-dark-red'} text-white px-2 rounded-sm text-xs py-0.5`}>{status}</Button>
                        {/* </div> */}
                    </div>
                    <div className=" flex items-center gap-4" >
                        <span className="w-40"> <ProgressBar width={level} /></span>
                        <span className="text-deep-teal text-lg font-bold">{level}%</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReserviorStatusCard