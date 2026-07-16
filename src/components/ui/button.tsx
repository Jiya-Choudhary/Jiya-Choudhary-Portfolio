import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:-translate-y-0.5 active:translate-y-0 active:scale-95",
  {
    variants: {
      variant: {
        default:
          "bg-linear-to-r from-primary to-primary/90 text-primary-foreground shadow-md shadow-primary/15 hover:shadow-lg hover:shadow-primary/25 hover:brightness-105",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-border/80 bg-background/40 backdrop-blur-xs shadow-xs hover:bg-primary/5 hover:border-primary/30 hover:text-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-primary/5 hover:text-foreground rounded-full",
        link: "text-primary underline-offset-4 hover:underline hover:translate-y-0 hover:scale-100",
      },
      size: {
        default: "h-9 rounded-full px-5 py-2",
        sm: "h-8 rounded-full px-4 text-xs",
        lg: "h-10 rounded-full px-8",
        icon: "h-9 w-9 rounded-full p-0 flex items-center justify-center",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
