/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.svg";

function Logo({ size }) {
  const navigate = useNavigate();

  return (
    <img
      onClick={() => navigate("/")}
      src={logo}
      className={`${size === "big" && "w-36"} ${
        size === "small" && "w-28"
      } cursor-pointer`}
    />
  );
}

export default Logo;
