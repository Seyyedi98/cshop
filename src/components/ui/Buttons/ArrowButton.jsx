import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";

/* eslint-disable react/prop-types */
function ArrowButton({ direction, action, color, offset, outlineColor }) {
  return (
    <button
      onClick={action}
      style={{ color: `${color}` }}
      className={`rounded-full p-1  text-2xl outline-none hover:outline-2 hover:outline-slate-400 ${
        offset === "close" ? "outline-offset-4" : "outline-offset-8"
      } ${
        outlineColor === "dark"
          ? "hover:outline-slate-400"
          : "hover:outline-slate-200"
      }`}
    >
      {direction === "right" && <RiArrowRightLine />}
      {direction === "left" && <RiArrowLeftLine />}
    </button>
  );
}

export default ArrowButton;
