/* eslint-disable no-unused-vars */
import { useState } from "react";

/* eslint-disable react/prop-types */
function NavButton({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className=" rounded-full px-1 py-3 text-xl hover:bg-slate-100 sm:px-2 md:p-3 md:text-xl"
      onClick={() => setIsOpen(!isOpen)}
    >
      {children}
      {/* {showMenu && isOpen ? console.log("true") : console.log("false")} */}
    </div>
  );
}

export default NavButton;
