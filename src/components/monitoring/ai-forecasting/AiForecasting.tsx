import { LuChartColumn } from "react-icons/lu"


function AiForecasting() {
  return (
    <div className="bg-ice-blue rounded-xl p-7 shadow h-screen flex flex-col gap-6">
        <div>
          <p className="text-deep-teal font-semibold">AI-Powered Forecasting</p>
          <span className="text-slate-purple text-sm">Machine learning models for flood and drought prediction</span>
        </div>
        <div className="bg-[#F1F5F9] rounded-md flex flex-col items-center justify-center gap-3 flex-1 text-slate-purple h-auto">
           
             <LuChartColumn size={50} />
             <p>AI forecasting models in development</p>
             <p className="text-sm">Will provide predictive analytics for water resource management</p>
            
        </div>
    </div>
  )
}

export default AiForecasting