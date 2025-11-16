
import { PiWarningBold } from "react-icons/pi"

function WaterLevelAlertCard() {
    return (
        <>
            <div className="border border-[#e7c3cc] bg-[#FCF3F5] rounded-md p-3 ">
                <div className="flex gap-4 items-start">
                    <PiWarningBold className="text-[#BE123c] w-4" fontWeight={600} />
                    <div>
                        <p className="text-sm text-[#BE123c] font-semibold tracking-tight">Water Level Alert</p>
                        <p className="text-sm text-slate-purple">Koka Dam water level is below normal threshold. Monitoring team has been notified.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WaterLevelAlertCard