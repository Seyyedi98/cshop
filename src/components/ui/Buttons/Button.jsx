/* eslint-disable react/prop-types */
function Button({ mt, children, color, animation, size }) {
  let backgroundColor, textColor, backgroundHoverColor, border, buttonSize;

  if (color === "white") {
    backgroundColor = "bg-white";
    backgroundHoverColor = "hover:bg-slate-50";
    textColor = "text-black";
  }

  if (color === "black") {
    backgroundColor = "bg-slate-900";
    backgroundHoverColor = "hover:bg-slate-800";
    textColor = "text-white";
  }
  if (color === "tranparent") {
    backgroundColor = "bg-transparent";
    backgroundHoverColor = "hover:bg-slate-100";
    border = "border-2 border-slate-100";
    textColor = "text-black";
  }

  if (size === "big") buttonSize = "px-9 py-5 text-base";
  if (size === "medium") buttonSize = "px-6 py-3.5 text-base font-medium";
  if (size === "small") buttonSize = "px-6 py-3.5 text-sm";

  return (
    <button
      className={`focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-${mt} shadow-[32px_30px_124px_-37px_rgba(0,0,0,0.47)] 
       ${animation} flex items-center gap-2 rounded-full transition-all
        ${backgroundHoverColor} ${backgroundColor} ${textColor} ${border} ${buttonSize}`}
    >
      {children}
    </button>
  );
}

export default Button;
