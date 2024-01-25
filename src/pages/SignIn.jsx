/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/ui/Buttons/Button";
import ArrowButton from "../components/ui/Buttons/ArrowButton";
import { useState } from "react";
import { useLogin } from "../features/authentication/useLogin";
import { useUser } from "../features/authentication/useUser";

function SignIn() {
  const { login, isLoading } = useLogin();
  const { isAuthenticated } = useUser();

  const navigate = useNavigate();
  const [email, setEmail] = useState("mr.seyyedi76@gmail.com");
  const [password, setPassword] = useState("sabinesabine");

  const resetForm = function () {
    setEmail("");
    setPassword("");
  };

  const onSubmit = function () {
    login(
      { email, password },
      {
        onSettled: resetForm(),
      },
    );
  };

  return (
    <>
      {isAuthenticated ? (
        navigate("/")
      ) : (
        <section className="grid h-screen w-screen place-items-center bg-gray-100">
          <div className="relative mx-auto flex w-[90%] flex-col items-center justify-center rounded-lg bg-slate-50 px-6 py-8 shadow-md md:max-w-[850px]">
            <span className="absolute left-10 top-10">
              <ArrowButton direction="left" action={() => navigate("/")} />
            </span>
            <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-900 "
                  >
                    Your email or username
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
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="focus:ring-3 focus:ring-primary-300 h-4 w-4 rounded border border-gray-300 bg-gray-50"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500 ">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-primary-600 text-sm font-medium hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <Button
                  size="medium"
                  color="black"
                  full
                  action={() => {
                    onSubmit();
                  }}
                >
                  Sign in
                </Button>
                <p className="text-sm font-light text-gray-500 ">
                  Don’t have an account yet?{" "}
                  <Link
                    to={"/signup"}
                    className="text-primary-600 font-medium hover:underline"
                  >
                    Sign up
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

export default SignIn;
