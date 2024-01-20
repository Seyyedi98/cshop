/* eslint-disable react/prop-types */
function Button({ mt, children, color, animation, size, full }) {
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

  if (size === "big")
    buttonSize =
      "px-3 py-2 sm:px-4 sm:py-3 md:px-9 md:py-5 text-xs sm:text-sm md:text-base";
  if (size === "medium")
    buttonSize = "px-4 py-2.5 md:px-6 md:py-3.5 text-base font-medium";
  if (size === "small") buttonSize = "px-6 py-3.5 text-sm ";

  return (
    <button
      className={`focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-${
        mt / 2
      } md:mt-${mt} text-center shadow-[32px_30px_124px_-37px_rgba(0,0,0,0.47)]
       ${animation} flex items-center justify-center gap-2 rounded-full transition-all 
        ${backgroundHoverColor} ${backgroundColor} ${textColor} ${border} ${buttonSize} ${
          full && "w-full"
        }`}
    >
      {children}
    </button>
  );
}

export default Button;
