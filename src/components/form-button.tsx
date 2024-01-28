import React, { ReactNode } from "react";
import { Button, btnVariants } from "./ui/button";
import Spinner from "./spinner";
import { useFormStatus } from "react-dom";
import { cn } from "./utils";

const FormButton = (props: {
  children: ReactNode;
  className?: string;
  variant?: btnVariants;
}) => {
  const { children, className, variant } = props;
  const { pending } = useFormStatus();

  return (
    <Button
      className={cn("max-w-xs", className)}
      disabled={pending}
      variant={variant || "default"}
    >
      {pending ? <Spinner /> : children}
    </Button>
  );
};

export default FormButton;
