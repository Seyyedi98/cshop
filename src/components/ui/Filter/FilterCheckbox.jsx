/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  addCatFilter,
  removeCatFilter,
  removeColorFilter,
  addColorFilter,
} from "../../../features/slices/filterSlice";

function FilterCheckbox({ filter, title }) {
  const catFilter = useSelector((state) => state.filter.categories);
  const colorFilter = useSelector((state) => state.filter.colors);
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(
    catFilter.includes(filter) || colorFilter.includes(filter),
  );

  const handleAddCatFilter = (newCategory) => {
    if (title === "Categories") {
      if (!isChecked) dispatch(addCatFilter(newCategory));
      if (isChecked) dispatch(removeCatFilter(newCategory));
    }
    if (title === "Colors") {
      if (!isChecked) dispatch(addColorFilter(newCategory));
      if (isChecked) dispatch(removeColorFilter(newCategory));
    }
  };

  return (
    <div className="flex items-center gap-3">
      <label className="relative flex cursor-pointer items-center rounded-full ">
        <input
          checked={isChecked}
          onChange={() => {
            setIsChecked(!isChecked);
            handleAddCatFilter(filter);
          }}
          type="checkbox"
          id={filter}
          className="peer relative h-5 w-5 
           cursor-pointer appearance-none rounded-[4px] border-2 border-blue-200 outline-none
            transition-all before:absolute before:left-2/4 before:top-2/4 before:block 
              before:h-12 before:w-12 checked:border-sky-500 checked:bg-sky-500 focus:ring-2
              focus:ring-sky-500 focus:ring-offset-2"
        />
        <span className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 cursor-pointer text-white opacity-0 transition-opacity peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </label>
      <label
        htmlFor={filter}
        className="cursor-pointer select-none text-sm font-normal text-slate-700"
      >
        {filter}
      </label>
    </div>
  );
}

export default FilterCheckbox;
