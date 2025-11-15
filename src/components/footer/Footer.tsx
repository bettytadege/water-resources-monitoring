import QuickAccessCard from "../common/QuickAccessCard"
import { Activity, Brain, Map, Shield, TriangleAlert, UsersRound } from "lucide-react";

const link = [
    { "name": "Real-Time Monitoring", "icon": Activity ,route:'/monitoring' },
    { "name": "Geospatial APIs", "icon": Map,route:'/geospatial' },
    { "name": "AI Forecasting", "icon": Brain ,route:'ai-forecasting'},
    { "name": "Early Warning System", "icon": TriangleAlert,route:'early-warning' },
    { "name": "Community Platform", "icon": UsersRound,route:'/community' },
    { "name": "Administrative Dashboard", "icon": Shield ,route:'/admin'}
]

function Footer() {
    return (
        <div className="bg-ice-blue border rounded-xl w-full p-6 flex flex-col gap-6 shadow-sm">
            <div className="space-y-1">
            <p className="text-deep-teal font-semibold ">Quick Access to All Systems</p>
            <p className="text-sm text-slate-purple">Direct navigation to all components of the water monitoring system</p>
            </div>
            <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-4 ">
                {link.map((link,key) => (
                    <QuickAccessCard icon={link.icon} name={link.name} route={link.route} key={key}/>
                ))}
            </div>
        </div>
    )
}

export default Footer