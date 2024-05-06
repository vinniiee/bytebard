import React, { ReactNode } from "react";
import { Button } from "./ui/button";
import Spinner from "./spinner";
import { useFormStatus } from "react-dom";
import { cn } from "./utils";

const FormButton = (props: {
  children: ReactNode;
  className?: string;
}) => {
  const { children, className } = props;
  const { pending } = useFormStatus();

  return (
    <Button
      className={cn("max-w-xs", className)}
      disabled={pending}
    >
      {pending ? <Spinner /> : children}
    </Button>
  );
};

export default FormButton;
