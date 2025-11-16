/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react"

type SystemCardProps = {
    id?: number,
    title: string,
    value: any,
    icon: LucideIcon | IconType,
    borderColor: string,
    statusColor?: string,
    subtitle?: string
}

function SystemCard({ icon: Icon, title, value, borderColor, statusColor, subtitle }: SystemCardProps) {
    console.log('border colorrrr',borderColor)
    return (
        <div
            className={`bg-ice-blue flex flex-col gap-6 w-full h-[153px] py-6 px-7 shadow border rounded-xl border-l-4 b `}
            style={{ borderLeftColor: borderColor }}
        >
            <div className="flex justify-between">
                <p className="text-deep-teal font-medium text-sm">{title}</p>
                <span style={{ color: borderColor }}>
                    <Icon size={19} />
                </span>
            </div>
            <div className="space-y-1">
                <p style={{ color: statusColor }} className={`text-2xl font-bold `}>{value}</p>
                <p className="text-xs text-[#475569]">{subtitle}</p>
            </div>
        </div>
    )
}

export default SystemCard