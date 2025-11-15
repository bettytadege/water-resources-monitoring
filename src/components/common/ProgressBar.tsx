import { Progress } from "../ui/progress"


function ProgressBar({width}:{width:number}) {
  return (
    <Progress value={width}   className={"bg-gray-300 w-full"}/>
  )
}

export default ProgressBar