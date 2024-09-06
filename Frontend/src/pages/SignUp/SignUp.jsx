import React from "react";
import GenderCheckBox from "./GenderCheckBox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div
        className="w-full p-6 rounded-lg shadow-md bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-md
      bg-opacity-50 border border-gray-700"
      >
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-400">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full input bg-gray-800 border-gray-600 input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text  text-gray-400">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input bg-gray-800 border-gray-600 input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text  text-gray-400">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input  bg-gray-800 border-gray-600 input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text  text-gray-400">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input  bg-gray-800 border-gray-600 input-bordered h-10"
            />
          </div>
          <GenderCheckBox />

          <a
            href="#"
            className="text-sm  text-gray-400 hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            already have an account?
          </a>
          <div>
            <button className="btn btn-block btn-info btn-sm mt-2">
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
