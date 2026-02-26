import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";

export default function SecondLogin() {
  const formSchema = yup.object({
    email: yup
      .string()
      .required("Please provide your email address.")
      .trim()
      .lowercase("Email address should only be lowercase"),
    password: yup
      .string()
      .required("Please provide your password")
      .min(6, "Password must be at least six characters")
      .max(12, "Password must not exceed twelve characters"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: formSchema,
    onSubmit: async (value, {resetForm}) => {
      console.log(value);
      resetForm()
    },
  });
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-sans">
      <form
        onSubmit={formik.handleSubmit}
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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email && (
            <span className="text-xs text-red-600 font-semibold">
              {formik.errors.email}
            </span>
          )}
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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.errors.password && formik.touched.password && (
            <span className="text-xs text-red-600 font-semibold">
              {formik.errors.password}
            </span>
          )}
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
