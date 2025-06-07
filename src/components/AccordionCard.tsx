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
  console.log(`${title} - isOpen:`, isOpen); // ✅ Put it here


  return (
    <div
      className={clsx(
        "flex flex-col items-center text-center p-6 bg-white text-[#2a2a3a] shadow-sm rounded-lg transition-all cursor-pointer hover:shadow-md hover:scale-[1.02]",
        isOpen && "border-2 border-gold"
      )}
      onClick={onToggle}
    >
      <div
        className={clsx(
          "h-14 w-14 bg-[#f5f1ea] rounded-full flex items-center justify-center mb-4 transition-colors",
          isOpen ? "text-gold" : "text-gray-500"
        )}
      >
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-lg text-clay">{short}</p>

      {/* Only show if isOpen is true */}
      {isOpen && (
        <div className="mt-4 text-sm text-gray-700 leading-relaxed">
          {details}
        </div>
      )}
    </div>
  );
};

export default AccordionCard;
