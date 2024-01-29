/* eslint-disable no-unused-vars */
import FilterField from "./FilterField";

function Filter() {
  return (
    <div>
      <FilterField
        title="Categories"
        type="checkbox"
        filters={["Backpacks", "Travel Bags", "Accessories", "Men", "Women"]}
      />

      <hr className="my-8 border-slate-200 " />
      <FilterField
        title="Colors"
        type="checkbox"
        filters={[
          "White",
          "Blue",
          "Black",
          "Red",
          "Yellow",
          "Green",
          "Brown",
          "Orange",
        ]}
      />

      <hr className="my-8 border-slate-200 " />

      <FilterField
        title="Sort order"
        type="radio"
        filters={[
          "Most Popular",
          "Best Rating",
          "Newest",
          "Price Low - Hight",
          "Price Hight - Low",
        ]}
      />
    </div>
  );
}

export default Filter;
