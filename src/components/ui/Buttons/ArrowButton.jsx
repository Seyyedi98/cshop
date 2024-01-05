import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";

/* eslint-disable react/prop-types */
function ArrowButton({ direction, action }) {
  return (
    <button
      onClick={action}
      className="rounded-full p-3 text-2xl outline-none hover:outline-2 hover:outline-slate-400"
    >
      {direction === "right" && <RiArrowRightLine />}
      {direction === "left" && <RiArrowLeftLine />}
    </button>
  );
}

export default ArrowButton;
