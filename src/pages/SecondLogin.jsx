import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";

export default function SecondLogin() {
  const base_url = "https://dummyjson.com";
  const formSchema = yup.object({
    username: yup
      .string()
      .required("Please provide your username address.")
      .trim()
      .lowercase("Username address should only be lowercase"),
    password: yup
      .string()
      .required("Please provide your password")
      .min(6, "Password must be at least six characters")
      .max(12, "Password must not exceed twelve characters"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: formSchema,
    onSubmit: async (value, { resetForm, setSubmitting }) => {
      setSubmitting(true);
      try {
        const res = await fetch(`${base_url}/auth/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(value),
        });
        const data = await res.json();
        if (res.status === 200) {
          alert("Login successful");
          console.log(data);
          return;
        }
        alert(data.message);
      } catch (error) {
        console.log(error);
      } finally {
        setSubmitting(false);
        resetForm();
      }
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
            username
          </label>
          <input
            type="text"
            name="username"
            className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-300"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          {formik.errors.username && formik.touched.username && (
            <span className="text-xs text-red-600 font-semibold">
              {formik.errors.username}
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
          disabled={formik.isSubmitting}
          className="w-full rounded-md bg-gray-900 py-2.5 text-white font-medium hover:bg-gray-800 active:scale-[0.99] transition"
        >
          {formik.isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

//SAVE: POST - PATCH - DELETE - GET - PUT
