"use client";

import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Link from "next/link";
import { formInputStyles } from "../../components/FormInputStyles";

// password rules to check if the password is strong enough
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

// basic yup schema to validate input data and shwoing user errors accrodingly
const signUpSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string(),
  email: yup
    .string()
    .email("Please enter a valid Email Address")
    .required("Email address is required"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters long")
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
  profileImage: yup.mixed().nullable().required("Profile image is required")
});

const SignUpPage = () => {
  // setting up formik here
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      profileImage: null,
    },
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
    validationSchema: signUpSchema,
  });
  

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-full md:w-11/12 flex flex-col items-center">
          <h1 className="py-10 font-bold text-3xl">Sign Up</h1>
          <div className="bg-gray-300 h-4/5 w-full lg:w-1/2 rounded-md">
            <form
              className="px-10 flex flex-col mt-8"
              onSubmit={formik.handleSubmit}
            >
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                className={
                  formik.errors.firstName && formik.touched.firstName
                    ? formInputStyles.errorStyle
                    : formInputStyles.normalStyle
                }
              />
              {formik.errors.firstName && formik.touched.firstName && (
                <p className="text-red-400 text-sm text-left">
                  {formik.errors.firstName}
                </p>
              )}
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                className={
                  formik.errors.lastName && formik.touched.lastName
                    ? formInputStyles.errorStyle
                    : formInputStyles.normalStyle
                }
              />
              {formik.errors.lastName && formik.touched.lastName && (
                <p className="text-red-400 text-sm text-left">
                  {formik.errors.lastName}
                </p>
              )}
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
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
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
                className={
                  formik.errors.confirmPassword &&
                  formik.touched.confirmPassword
                    ? formInputStyles.errorStyle
                    : formInputStyles.normalStyle
                }
              />
              {formik.errors.confirmPassword &&
                formik.touched.confirmPassword && (
                  <p className="text-red-400 text-sm text-left">
                    {formik.errors.confirmPassword}
                  </p>
                )}
              <label htmlFor="profileImage">Profile Picture</label>
              <input
                id="profileImage"
                name="profileImage"
                type="file"
                onChange={(event) => {
                  if (!event.target.files) return;
                  formik.setFieldValue("profileImage", event.target.files[0]);
                }}
                onBlur={formik.handleBlur}
                className={
                  formik.errors.profileImage && formik.touched.profileImage
                    ? formInputStyles.errorStyle
                    : formInputStyles.normalStyle
                }
              />
              {formik.errors.profileImage && formik.touched.profileImage && (
                <p className="text-red-400 text-sm text-left">
                  {formik.errors.profileImage}
                </p>
              )}

              <button
                type="submit"
                className="mt-4 py-2 bg-gray-200 w-1/4 rounded-lg hover:bg-slate-600 hover:text-white"
              >
                Submit
              </button>
              <div className="py-5">
                Already a member ?{" "}
                <Link href="/sign-up/login" className="text-sky-600">
                  Login here
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
