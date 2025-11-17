// components/sections/SectionTitle.tsx
import * as React from "react";

type SectionTitleProps = {
  kicker?: string;
  title: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionTitle({
  kicker,
  title,
  align = "center",
  className,
}: SectionTitleProps) {
  const alignClass =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-2 ${alignClass} ${className ?? ""}`}>
      {kicker && (
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-base-text/60">
          {kicker}
        </p>
      )}
      <h2 className="text-2xl md:text-3xl font-semibold text-base-heading">
        {title}
      </h2>
    </div>
  );
}
