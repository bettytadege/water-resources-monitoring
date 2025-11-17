import { Progress } from "../ui/progress"

function ProgressBar({ width }: { width: number }) {
  return (
    <Progress
      value={width}
      className="w-full bg-gray-300"
      color="#164E63"
      
    />
  )
}

export default ProgressBar
