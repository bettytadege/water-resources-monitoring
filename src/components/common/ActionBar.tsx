import { useNavigate } from "react-router-dom";

type ActionBarProps = {
  id: string;
  name: string;
  route: string;
  isActive: boolean;
  onActivate: () => void;
};

function ActionBar({  name, route, isActive, onActivate }: ActionBarProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    onActivate();
    navigate(route);
  };

  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer text-sm text-center transition-all duration-150 px-38 py-1 md:text-base rounded-sm border w-ful
      ${isActive ? "bg-white shadow border-slate-300 " : "bg-transparent border-transparent text-deep-teal"}
      `}>
      {name}
    </div>
  );
}

export default ActionBar;
