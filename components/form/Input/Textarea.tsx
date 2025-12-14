import { ComponentPropsWithoutRef, FC } from "react";
import { Textarea as ShadCnTextarea } from "../../ui/textarea";
import { useController } from "react-hook-form";
import { Label } from "@/components/ui/label";

interface Props extends ComponentPropsWithoutRef<"textarea"> {
  name: string;
  label: string;
}

const Textarea: FC<Props> = ({ name, label, required, ...props }) => {
  const { field } = useController({ name });
  return (
    <div className="flex flex-col space-y-2">
      <Label>{`${label}${required ? "*" : ""}`}</Label>
      <ShadCnTextarea {...props} {...field} />
    </div>
  );
};

export default Textarea;
