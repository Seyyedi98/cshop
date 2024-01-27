/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import { useEffect } from "react";
import Spinner from "./ui/Spinner";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useUser();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/");
    },
    [isAuthenticated, isLoading, navigate],
  );

  if (isLoading) return <Spinner />;
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
