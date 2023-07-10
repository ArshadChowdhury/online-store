"use client";

import Link from "next/link";
import React from "react";

import { useFormik } from "formik";
import * as yup from "yup";

import { formInputStyles } from "@/components/FormInputStyles";

// basic yup schema to validate input data and shwoing user errors accrodingly
const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid Email Address")
    .required("Email address is required"),
  password: yup.string().required("Password is required"),
});

const LoginPage = () => {
  // setting up formik here
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
    validationSchema: loginSchema,
  });

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-full md:w-11/12 flex flex-col items-center">
          <h1 className="py-10 font-bold text-3xl text-gray-700">Login</h1>
          <div className="bg-gray-300 h-4/5 w-11/12 lg:w-1/2 rounded-md">
            <form
              className="px-10 flex flex-col mt-8"
              onSubmit={formik.handleSubmit}
            >
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={
                  formik.errors.email && formik.touched.email
                    ? formInputStyles.errorStyle
                    : formInputStyles.normalStyle
                }
              />
              {formik.errors.email && formik.touched.email && (
                <p className="text-red-400 text-sm text-left">
                  {formik.errors.email}
                </p>
              )}
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className={
                  formik.errors.password && formik.touched.password
                    ? formInputStyles.errorStyle
                    : formInputStyles.normalStyle
                }
              />
              {formik.errors.password && formik.touched.password && (
                <p className="text-red-400 text-sm text-left">
                  {formik.errors.password}
                </p>
              )}
              <button
                type="submit"
                className="mt-4 py-2 bg-gray-200 min-w-1/4 rounded-lg hover:bg-slate-600 hover:text-white"
              >
                Submit
              </button>
              <div className="py-5 text-center lg:text-left">
                Not a member yet ?{" "}
                <Link href="/sign-up" className="text-sky-600">
                  Signup here
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
