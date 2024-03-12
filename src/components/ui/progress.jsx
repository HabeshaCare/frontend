import React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

const CircularProgress = React.forwardRef(function CircularProgress(
  { className, value, ...props },
  ref
) {
  const progress = value || 0;
  const circumference = 2 * Math.PI * 7; // Adjusted radius to 7
  const offset = circumference - (progress / 100) * circumference;

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn("relative w-14 h-14", className)} // Adjust size as needed
      {...props}
    >
      <svg className="absolute" viewBox="0 0 16 16"> {/* Adjusted viewBox */}
        <circle
          cx="8"
          cy="8"
          r="7"
          fill="none"
          stroke="#ccc"
          strokeWidth="2"
        />
        <circle
          cx="8"
          cy="8"
          r="7"
          fill="none"
          stroke="#1F555D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 8 8)"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-center font-bold text-sm text-gray-800 dark:text-white">
        {value}%
      </div>
    </ProgressPrimitive.Root>
  );
});

CircularProgress.displayName = ProgressPrimitive.Root.displayName;

export { CircularProgress };
