/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/ui/Buttons/Button";
import ArrowButton from "../components/ui/Buttons/ArrowButton";
import { useState } from "react";
import { useSignUp } from "../features/authentication/useSignUp";
import Spinner from "../components/ui/Spinner";
import { useUser } from "../features/authentication/useUser";

function SignUp() {
  const { signup, isLoading } = useSignUp();
  const { isAuthenticated } = useUser();

  const navigate = useNavigate();
  const [email, setEmail] = useState("mr.seyyedi76@gmail.com");
  const [fullName, setFullName] = useState("Sabine");
  const [password, setPassword] = useState("sabinesabine");

  const resetForm = function () {
    setEmail("");
    setFullName("");
    setPassword("");
  };

  const onSubmit = function () {
    signup(
      { password, fullName, email },
      {
        onSettled: () => resetForm(),
      },
    );
  };

  return (
    <>
      {isAuthenticated ? (
        navigate("/")
      ) : (
        <section className=" grid h-screen w-screen place-items-center bg-gray-100">
          <div className="relative mx-auto flex w-[90%] flex-col items-center justify-center rounded-lg bg-slate-50 px-6 py-8 shadow-md md:max-w-[850px]">
            <span className="absolute left-10 top-10">
              <ArrowButton direction="left" action={() => navigate("/")} />
            </span>
            <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
              <h1 className="px-6 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Create new account
              </h1>
              <form className="space-y-4 md:space-y-6">
                {/* name */}
                <div>
                  <label
                    htmlFor="text"
                    className="mb-2 block text-sm font-medium text-gray-900 "
                  >
                    Your Name
                  </label>
                  <input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    disabled={isLoading}
                    type="text"
                    name="text"
                    id="name"
                    className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
                    placeholder="Name"
                    required
                  />
                </div>

                {/* email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-900 "
                  >
                    Your email address
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                    type="email"
                    name="email"
                    id="email"
                    className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
                    placeholder="name@company.com"
                    required
                  />
                </div>

                {/* password */}
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
                    required
                  />
                </div>

                <Button
                  size="medium"
                  color="black"
                  full
                  action={() => onSubmit()}
                >
                  Sign up
                </Button>
                <p className="text-sm font-light text-gray-500 ">
                  Allready have an account?{" "}
                  <Link
                    to={"/signin"}
                    className="text-primary-600 font-medium hover:underline"
                  >
                    Sign in
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default SignUp;
