import { cn } from "@/lib/utils";
import React, {
  cloneElement,
  ComponentPropsWithoutRef,
  FC,
  ReactNode,
} from "react";

interface Props extends ComponentPropsWithoutRef<"div"> {
  icon: ReactNode;
}

const IconButton: FC<Props> = ({ icon, ...props }) => {
  return (
    <div className={cn("cursor-pointer", props.className)} {...props}>
      {cloneElement(
        icon as React.DetailedReactHTMLElement<
          React.HTMLAttributes<HTMLElement>,
          HTMLElement
        >
      )}
    </div>
  );
};

export default IconButton;
