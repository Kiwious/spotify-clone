import React, { ComponentPropsWithoutRef, FC } from "react";
import { Input as ShadCnInput } from "../../ui/input";
import { useController } from "react-hook-form";
import { Label } from "@/components/ui/label";

interface Props extends ComponentPropsWithoutRef<"input"> {
  name: string;
  label?: string;
}

const Input: FC<Props> = ({ name, label, required, ...props }) => {
  const { field } = useController({ name });
  return (
    <div className="flex flex-col space-y-2">
      {label && <Label>{`${label}${required ? "*" : ""}`}</Label>}
      <ShadCnInput {...props} {...field} />
    </div>
  );
};

export default Input;
