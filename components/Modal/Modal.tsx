import { FC, ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { DialogProps } from "@radix-ui/react-dialog";

interface Props extends DialogProps {
  children: ReactNode;
  trigger: ReactNode;
  title: string;
  description?: string;
}

const Modal: FC<Props> = ({
  children,
  trigger,
  title,
  description,
  ...props
}) => {
  return (
    <Dialog {...props}>
      <form>
        <DialogTrigger>{trigger}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>
          <div className="h-full">{children}</div>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default Modal;
