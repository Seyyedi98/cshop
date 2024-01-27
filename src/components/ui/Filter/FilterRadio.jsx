/* eslint-disable react/prop-types */
function FilterRadio({ filter }) {
  return (
    <div className="flex items-center gap-2">
      <label
        className="relative flex cursor-pointer items-center rounded-full"
        htmlFor="html"
      >
        <input
          name="type"
          type="radio"
          className="peer relative
             h-5 w-5 cursor-pointer appearance-none rounded-full border-2 border-blue-200
              text-sky-500 transition-all checked:border-sky-500
                   hover:before:opacity-10"
          id={filter}
        />
        <span
          className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 
          -translate-y-2/4 text-sky-500 opacity-0 transition-opacity peer-checked:opacity-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <circle data-name="ellipse" cx="8" cy="8" r="7"></circle>
          </svg>
        </span>
      </label>
      <label
        className="cursor-pointer select-none text-sm font-normal text-slate-700"
        htmlFor={filter}
      >
        {filter}
      </label>
    </div>
  );
}

export default FilterRadio;
