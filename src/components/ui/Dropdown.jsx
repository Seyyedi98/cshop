/* eslint-disable react/prop-types */
import { useState } from "react";
import { RiAddLine, RiSubtractLine } from "react-icons/ri";

function Dropdown({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between rounded-lg bg-slate-100 px-4 py-2 font-medium"
      >
        <span>{title}</span>
        <button>{isOpen ? <RiSubtractLine /> : <RiAddLine />}</button>
      </div>
      {isOpen && (
        <p className="mb-2 p-5 pt-3 text-sm leading-6 text-slate-600 last:pb-0">
          {text}
        </p>
      )}
    </div>
  );
}

export default Dropdown;
