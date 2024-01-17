/* eslint-disable no-unused-vars */
import { useState } from "react";

/* eslint-disable react/prop-types */
function NavButton({ children, showMenu }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="cursor-pointer rounded-full p-2 text-2xl hover:bg-slate-100 md:p-3 md:text-xl"
      onClick={() => setIsOpen(!isOpen)}
    >
      {children}
      {/* {showMenu && isOpen ? console.log("true") : console.log("false")} */}
    </div>
  );
}

export default NavButton;
