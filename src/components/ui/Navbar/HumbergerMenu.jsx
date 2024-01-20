/* eslint-disable react/prop-types */
function HumbergerMenu({ isOpen, toggleMenu }) {
  return (
    <div className="h-6 w-6">
      <button
        className={`hamburger-menu flex flex-col gap-1 transition duration-300 ease-in-out focus:outline-none `}
        onClick={toggleMenu}
      >
        <span
          className={`mb-1 block h-[2.5px] w-8 bg-slate-700 transition duration-300 ease-in-out ${
            isOpen ? "translate-y-[11px] rotate-45 transform" : ""
          }`}
        ></span>
        <span
          className={`mb-1 block h-[2.5px] w-8 bg-slate-700 transition duration-300 ease-in-out ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block h-[2.5px]  w-8 bg-slate-700 transition duration-300 ease-in-out ${
            isOpen ? "-translate-y-[11px] -rotate-45 transform" : ""
          }`}
        ></span>
      </button>
    </div>
  );
}

export default HumbergerMenu;
