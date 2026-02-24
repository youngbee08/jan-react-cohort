import React, { useState } from "react";

export default function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    // console.log(`"${name}"`, value);
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-sans">
      <form
        onSubmit={handleSubmit}
        className="w-75 rounded-lg bg-white p-8 shadow-lg"
      >
        <h2 className="text-center text-2xl font-semibold mb-6">Login Test</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-300"
            placeholder="you@example.com"
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-300"
            placeholder="••••••••"
            onChange={handleInputChange}
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-gray-900 py-2.5 text-white font-medium hover:bg-gray-800 active:scale-[0.99] transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
