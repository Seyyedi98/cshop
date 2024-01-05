/* eslint-disable react/prop-types */
function Button({ mt, children, fill, animation }) {
  const backgroundColor = fill ? "bg-slate-900" : "bg-transparent";
  const backgroundHoverColor = fill
    ? "hover:bg-slate-800"
    : "hover:bg-slate-100";
  const border = fill ? "none" : "border-2 border-slate-100";
  const textColor = fill ? "text-white" : "text-black";

  return (
    <button
      className={`focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-${mt}
       ${animation} flex items-center gap-2 rounded-full transition-all
        ${backgroundHoverColor} ${backgroundColor} ${textColor} ${border} px-9 py-6 `}
    >
      {children}
    </button>
  );
}

export default Button;
