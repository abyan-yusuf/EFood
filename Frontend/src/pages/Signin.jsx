import React, { useState } from "react";
import Layout from "../layout/Layout";
import logo from "../../public/Title.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
let user;
export const Signin = () => {
  const navigateTo = useNavigate();
  const [newUser, setNewUser] = useState({});

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const formData = async (data) => {
    setNewUser(data);
    reset();
    try {
      const response = await axios.post("https://efood-qzna.onrender.com/api/v1/users/signin", data);
      console.log(response.data);
      user = response.data.user;
    } catch (error) {
      console.error(error);
    }
    navigateTo("/");
  };

  console.log(newUser);

  return (
    <Layout>
      <section>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <div className="mb-2 flex justify-center">
              <img src={logo} />
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight text-black">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 ">
              Don't have an account?{" "}
              <Link
                to="/signup"
                title
                className="font-semibold text-black transition-all duration-200 hover:underline"
              >
                Create a free account
              </Link>
            </p>
            <form className="mt-8" onSubmit={handleSubmit(formData)}>
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-gray-900"
                  >
                    {"  "}
                    Email address{"  "}
                  </label>
                  <div className="mt-2">
                    <input
                      {...register("email")}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      id="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-base font-medium text-gray-900"
                    >
                      {"  "}
                      Password{"  "}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      {...register("password")}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      id="password"
                      placeholder="Password"
                      required
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Get started{"  "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2"
                    >
                      <line x1={5} y1={12} x2={19} y2={12} />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export { user };
