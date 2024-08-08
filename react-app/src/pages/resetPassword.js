import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [emailError, setEmailError] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData.entries());

    setEmailError("");
    console.log(payload)

  };

  return (
    <div>
      <Navbar />
      <div className="mt-[9rem] max-w-md mx-auto bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Forgot password?</h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
              Remember your password?
              <Link to="/login" className="text-blue-600 ml-2 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500">
                Sign in here
              </Link>
            </p>
          </div>
          <div className="mt-5">
            <form onSubmit={submitForm}>
              <div className="grid gap-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm mb-2 dark:text-white">
                    Email address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`py-3 px-4 block w-full border ${emailError ? 'border-red-500' : 'border-gray-200'} rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600`}
                      required
                      aria-describedby="email-error"
                    />
                    {emailError && (
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  {emailError && (
                    <p className="text-xs text-red-600 mt-2" id="email-error">
                      {emailError}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Reset password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
