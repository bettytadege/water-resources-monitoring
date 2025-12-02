import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

type InfoBlockProps = {
  icon: IconType | LucideIcon;
  title: string;
  description: string;
};
function InfoBlock({ icon: Icon, title, description }:InfoBlockProps) {
  return (
    <div >
             <div className="text-deep-teal flex items-center gap-2">
               
               <Icon size={20}/>
               <p className=" font-semibold ">{title}</p>
             </div>
             <p className="text-slate-purple text-sm">
               {description}</p>
           </div>
  )
}

export default InfoBlock