import { Card } from "@/components/ui/card";
import { Circle, CircleCheck } from "lucide-react";
import { cloneElement, FC, ReactElement, ReactNode } from "react";
import { useController, useFormContext } from "react-hook-form";

interface Props {
  label: string;
  icon?: ReactNode;
  description?: string;
  name: string;
  value: string;
}

const Radio: FC<Props> = ({ name, label, value, icon, description }) => {
  const { control } = useFormContext();
  const { field } = useController({ name, control });

  const checked = field.value === value;

  return (
    <Card
      onClick={() => field.onChange(value)}
      className={`cursor-pointer border-2 py-0 pb-4 pl-4 ${
        checked ? "border-primary" : "border-muted"
      }`}
    >
      <div className="flex flex-col  space-x-2 items-start justify-end select-none">
        <div className="flex w-full justify-end pt-3 pr-4">
          {checked ? (
            <Circle size={16} fill="var(--primary)" />
          ) : (
            <Circle size={16} />
          )}
        </div>
        <input
          className="appearance-none"
          type="radio"
          {...field}
          value={value}
          checked={checked}
          onChange={() => field.onChange(value)}
        />
        {/* @ts-expect-error too lazy to fix */}
        {icon && <div>{cloneElement(icon as ReactElement, { size: 40 })}</div>}
        <div className="mt-2 font-medium">{label}</div>
        <div className="opacity-50 text-sm font-light mr-4">{description}</div>
      </div>
    </Card>
  );
};

export default Radio;
