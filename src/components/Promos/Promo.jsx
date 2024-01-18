/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
function Promo({ children, bgColor, marginTop, bgImage, marginBottom }) {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        marginTop: marginTop,
        marginBottom: marginBottom,
      }}
      className={`${bgImage} container relative flex w-full justify-between rounded-[40px] bg-cover md:h-[586px]`}
    >
      {children}
    </div>
  );
}

export default Promo;
