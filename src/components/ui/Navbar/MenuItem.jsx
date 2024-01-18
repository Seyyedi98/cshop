import { RiArrowDownSLine } from "react-icons/ri";

/* eslint-disable react/prop-types */
function MenuItem({ title, dropdown }) {
  return (
<<<<<<< HEAD
    <li
      className="flex cursor-pointer items-center gap-2 rounded-full px-1 py-4 text-3xl 
     font-semibold hover:bg-slate-100 md:px-2 md:py-2 md:text-sm md:font-medium lg:px-4 "
    >
=======
<<<<<<< HEAD
    <li
      className="flex cursor-pointer items-center gap-2 rounded-full px-1 py-4 text-3xl 
     font-semibold hover:bg-slate-100 md:px-2 md:py-2 md:text-sm md:font-medium lg:px-4"
    >
=======
    <li className="flex cursor-pointer items-center gap-2 rounded-full px-1 py-2 text-xl font-semibold hover:bg-slate-100 md:px-2 md:text-sm md:font-medium lg:px-4">
>>>>>>> 3076b42fc70b1db2c088781b9eb7acfd31d1c123
>>>>>>> d3ee04a8b29574a1932316b994d2d9aeba29584a
      {title}
      {dropdown && <RiArrowDownSLine />}
    </li>
  );
}

export default MenuItem;
