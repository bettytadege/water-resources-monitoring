
import { IoCheckmark } from "react-icons/io5";

type DataFlowCardProps = {
  name: string;
  status: string;
};

function DataFlowCard({ name, status }: DataFlowCardProps) {
  return (
    <>

      <div className="flex justify-between space-y-">
        <ul>
          <li className=" text-deep-teal">{name}</li>
        </ul>
        <button className={`${status === 'Active' || status === 'Passed'
          ? 'bg-[#D0FAE4] ' : 'bg-[#CEFAFE]'} text-[#006044] py-0.5 px-2 text-xs rounded-md flex items-center `}>{status === 'Passed' ?
            <IoCheckmark /> : ''} {status}</button>
      </div>

    </>
  )
}

export default DataFlowCard