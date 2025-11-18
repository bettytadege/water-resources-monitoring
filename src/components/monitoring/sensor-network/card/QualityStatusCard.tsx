import { Button } from "@/components/ui/button"

 type QualityStatus = "normal" | "warning"
type QualityStatusCardProps = {
  label: string
  value: string | number
  unit: string
  status: QualityStatus
}


function QualityStatusCard({label,status,unit,value}:QualityStatusCardProps) {
  return (
    <div className="flex p-6  flex-col gap-6 border rounded-xl bg-ice-blue shadow">
        <p className="text-slate-purple text-sm font-medium">{label}</p>
        <div className="space-y-2">
             <p  className=" text-2xl font-bold text-deep-teal ">{value} {unit}</p>
             <Button className={`${status === 'normal' ? 'bg-primary-purple' : 'bg-dark-red'} rounded-md py-0.5 px-2 text-xs`}>{status}</Button>
        </div>
    </div>
  )
}

export default QualityStatusCard