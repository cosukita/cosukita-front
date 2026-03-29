import * as React from "react";

import { cn } from "@/common/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "placeholder:text-muted focus-visible:border-ring disabled:bg-input/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 h-8 w-full min-w-0 border-2 border-neutral-950 bg-white px-2.5 py-1 text-base text-neutral-950 transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-white file:text-sm file:font-medium file:text-neutral-950 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-3 md:text-sm",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
