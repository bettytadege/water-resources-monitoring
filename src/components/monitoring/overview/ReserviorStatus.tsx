import ReserviorStatusCard from "./card/ReserviorStatusCard"

const reserviorStatusData=[
  {
    "name": "Ekeze Dam",
    "status": "normal",
    "level": 85
  },
  {
    "name": "Gilgel Gibe III",
    "status": "high",
    "level": 92
  },
  {
    "name": "Koka Dam",
    "status": "low",
    "level": 45
  },
  {
    "name": "Fincha Dam",
    "status": "normal",
    "level":78
  }
]


function ReserviorStatus() {
    return (
        <>
            <div className="bg-ice-blue rounded-xl border p-5 space-y-10 shadow-lg">
                <div className="">
                    <p className="text-deep-teal font-semibold text-xl">Major Reservoirs Status </p>
                    <span className="text-slate-purple text-sm">Current capacity levels of major dams and reservoirs</span>
                </div>
                <div className="flex flex-col gap-5">
                    {reserviorStatusData.map((data,key)=>(
                        <ReserviorStatusCard level={data.level} name={data.name} status={data.status} key={key}/>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ReserviorStatus