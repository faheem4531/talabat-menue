import React from "react";

const LoginModal = () => {
  return (
    <div>
      <h4 className="text-center mt-6 mb-10 text-lg font-[600] text-[#494949]">
        Login
      </h4>
      <form>
        <div className="mb-6">
          <label className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg block w-full p-2.5 "
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-xs font-medium text-gray-900">
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg block w-full p-2.5"
            required
          />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
              required
            />
          </div>
          <label className="ml-2 text-xs font-medium text-gray-900 ">
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700  font-medium rounded-lg text-xs w-full px-5 py-2.5 text-center "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginModal;
