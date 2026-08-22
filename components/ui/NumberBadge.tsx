import { cn } from "@/lib/utils";

type NumberBadgeProps = {
  value: string;
  size?: "compact" | "default";
  className?: string;
};

export function NumberBadge({
  value,
  size = "default",
  className,
}: NumberBadgeProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative z-10 grid shrink-0 place-items-center rounded-full border border-base-cyan/55 bg-base-carbon font-mono font-medium text-base-cyan shadow-[0_0_18px_hsl(var(--signal-cyan)/0.16)]",
        size === "compact"
          ? "h-8 w-8 text-[0.625rem]"
          : "h-10 w-10 text-[0.625rem] sm:h-12 sm:w-12 sm:text-[0.6875rem]",
        className,
      )}
    >
      {value}
    </span>
  );
}
