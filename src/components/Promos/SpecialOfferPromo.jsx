/* eslint-disable react/prop-types */
import Button from "../ui/Buttons/Button";
import Logo from "../ui/Navbar/Logo";

import promo2 from "../../assets/images/banner/promo2.webp";

function SpecialOfferPromo() {
  return (
    <>
      <img
        src={promo2}
        className="z-10 mt-20 hidden h-[332px] w-[332px] md:block lg:-mt-20 lg:h-[664px] lg:w-[664px]"
      />
      <div className="z-10 flex flex-col justify-center p-8">
        <Logo size="small" />
        <h1 className="mt-10 text-4xl font-semibold leading-[1.2] md:text-5xl lg:text-6xl">
          Special offer {<br />} in kids products
        </h1>
        <p className="mt-6 block w-[80%] text-slate-500">
          Fashion is a form of self-expression and autonomy at a particular
          period and place
        </p>
        <div className="mt-12">
          <Button color="black" size="medium">
            Discover more
          </Button>
        </div>
      </div>
    </>
  );
}

export default SpecialOfferPromo;
