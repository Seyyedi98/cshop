/* eslint-disable no-unused-vars */
import FilterCheckbox from "./FilterCheckbox";
import FilterRadio from "./FilterRadio";

/* eslint-disable react/prop-types */
function FilterField({ title, filters, type }) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="mb-2.5  font-semibold">{title}</h4>
      {type === "checkbox" ? (
        <div className="flex flex-col gap-4">
          {filters.map((filter, index) => (
            <FilterCheckbox key={index} filter={filter} title={title} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {filters.map((filter, index) => (
            <FilterRadio key={index} filter={filter} />
          ))}
        </div>
      )}
    </div>
  );
}

export default FilterField;
