import React from "react";
import clsx from "clsx";

const AccordionCard = ({
  icon: Icon,
  title,
  short,
  details,
  isOpen,
  onToggle,
}: {
  icon: any;
  title: string;
  short: string;
  details: string;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <div
      onClick={onToggle}
      className={clsx(
        "flex flex-col items-center text-center px-6 py-5 bg-white text-[#2a2a3a] rounded-lg shadow-sm cursor-pointer transition-colors duration-300 hover:shadow-md",
        isOpen
          ? "border-2 border-gold"
          : "border border-transparent"
      )}
    >
      <div
        className={clsx(
          "h-14 w-14 bg-[#f5f1ea] rounded-full flex items-center justify-center mb-4 transition-colors duration-300",
          isOpen ? "text-gold" : "text-gray-500"
        )}
      >
        <Icon className="h-7 w-7" />
      </div>

      <h3 className="text-xl font-semibold mb-1">{title}</h3>

      <p className="text-lg text-clay">{short}</p>

      {/* Animated Details */}
      <div
        className={clsx(
          "overflow-hidden transition-all duration-500 ease-in-out",
          isOpen
            ? "max-h-96 opacity-100 mt-4"
            : "max-h-0 opacity-0 mt-0"
        )}
      >
        <p className="text-base text-gray-700 leading-relaxed">
          {details}
        </p>
      </div>
    </div>
  );
};

export default AccordionCard;
