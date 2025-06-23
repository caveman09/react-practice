import * as React from "react"
import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"

const inputVariants = cva(
  "flex h-9 w-full bg-transparent px-3 py-1 text-base shadow-sm transition-colors " +
  "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-stone-950 " +
  "placeholder:text-stone-500 focus-visible:outline-none " +
  "disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-stone-800 dark:file:text-stone-50 dark:placeholder:text-stone-400 dark:focus-visible:ring-stone-300",
  {
    variants: {
      variant: {
        default: "border border-stone-300 focus-visible:ring-2 focus-visible:ring-stone-950 dark:border-stone-800 dark:focus-visible:ring-stone-300",
        underline: "border-b border-stone-300 dark:border-stone-800",
      }
    },
    defaultVariants: {
      variant: "default",
    }
  }
)

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
  LeftIcon?: React.ReactNode;
  RightIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, LeftIcon, RightIcon, variant, ...props }, ref) => {
    return (
      <>
        {LeftIcon && <span className="my-auto px-2">{LeftIcon}</span>}
        <input
          type={type}
          className={cn(
            inputVariants({ variant }),
            className
          )}
          ref={ref}
          {...props}
        />
        {RightIcon && <span className="my-auto">{RightIcon}</span>}
      </>
    )
  }
)
Input.displayName = "Input"

export { Input }
