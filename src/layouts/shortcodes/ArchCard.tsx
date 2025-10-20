import React from "react";

type Props = {
  title: string;
  content: string;
  icon?: string; // public path to svg e.g. /icons/react.svg
  iconAlt?: string;
  variant?: "default" | "green";
  cols?: "two" | "three";
};

const ArchCard = ({
  title,
  content,
  icon,
  iconAlt,
  variant = "default",
  cols = "three",
}: Props) => {
  const widthClass = cols === "two" ? "md:col-6 lg:col-6" : "md:col-6 lg:col-4";
  const isGreen = variant === "green";
  return (
    <div className={`flex ${widthClass}`}>
      <div
        className={
          isGreen
            ? "flex flex-col items-start rounded-xl bg-primary p-6 sm:rounded-2xl sm:p-8 w-full"
            : "flex flex-col items-start rounded-xl border border-border bg-white p-6 sm:rounded-2xl sm:p-8 w-full"
        }
      >
        <div
          className={`mb-4 flex w-full items-center gap-5 pb-4 ${isGreen ? "" : "border-b border-border"}`}
        >
          {icon ? (
            <div className="w-fit rounded-xl p-3 sm:rounded-2xl bg-primary shrink-0">
              <img src={icon} alt={iconAlt || title} className="h-7 w-7" />
            </div>
          ) : null}
          <h3 className="text-h5 font-medium text-text-dark">{title}</h3>
        </div>
        <p className="font-secondary text-h6 text-text leading-relaxed">
          {content}
        </p>
      </div>
    </div>
  );
};

export default ArchCard;
