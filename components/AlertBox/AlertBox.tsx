import { CircleAlert } from "lucide-react";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AlertBox: FC<Props> = ({ children }) => {
  return (
    <div className="flex rounded-lg bg-[#130e08] border-2 border-[#b88136] p-4 items-center space-x-4">
      <CircleAlert color="#b88136" />
      <div className="text-[#b88136]">{children}</div>
    </div>
  );
};

export default AlertBox;
