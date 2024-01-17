/* eslint-disable react/prop-types */
function PriceTag({ price }) {
  return (
    <span className="rounded-md border-2 border-solid px-2.5 py-[3px] text-sm font-semibold text-green-500">
      ${price}
    </span>
  );
}

export default PriceTag;
