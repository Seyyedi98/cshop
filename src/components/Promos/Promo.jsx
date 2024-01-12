/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
function Promo({ children, bgColor, marginTop, bgImage }) {
  return (
    <div
      style={{ backgroundColor: bgColor, marginTop: marginTop }}
      className={`${bgImage} container relative flex h-[586px] w-full justify-between rounded-[40px] bg-cover`}
    >
      {children}
    </div>
  );
}

export default Promo;
