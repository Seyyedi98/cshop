/* eslint-disable react/prop-types */
import logo from "../../../assets/images/logo.svg";

function Logo({ size }) {
  return (
    <img
      src={logo}
      className={`${size === "big" && "w-36"} ${
        size === "small" && "w-28"
      } cursor-pointer`}
    />
  );
}

export default Logo;
