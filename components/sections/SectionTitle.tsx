// components/sections/SectionTitle.tsx
import * as React from "react";

type SectionTitleProps = {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionTitle({
  kicker,
  title,
  description,
  align = "center",
  className,
}: SectionTitleProps) {
  const alignClass =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignClass} ${className ?? ""}`}>
      {kicker && (
        <p className="operational-label">
          {kicker}
        </p>
      )}
      <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.045em] text-base-heading sm:text-4xl lg:text-[2.8rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-3xl text-pretty leading-7 text-base-text/68">
          {description}
        </p>
      )}
    </div>
  );
}
