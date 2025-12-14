"use client";

import { useController, useFormContext } from "react-hook-form";
import { Switch as ShadCnSwitch } from "@/components/ui/switch";
import { FC } from "react";

interface Props {
  name: string;
}

const Switch: FC<Props> = ({ name }) => {
  const { control } = useFormContext();
  const {
    field: { value, onChange, ref, disabled },
  } = useController({
    name,
    control,
  });

  return (
    <ShadCnSwitch
      checked={value}
      onCheckedChange={onChange}
      disabled={disabled}
      ref={ref}
      id={name}
    />
  );
};

export default Switch;
