"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { XMarkIcon, Bars3Icon, UserIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [mobileNavBar, setMobileNavBar] = useState(false);

  useEffect(() => {
    mobileNavBar
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [mobileNavBar]);

  const hoverStyle = {
    hover: "hover:text-teal-600 hover:border-b-2 hover:border-teal-600",
  };

  return (
    <>
      {!mobileNavBar && (
        <>
          <div
            onClick={() => setMobileNavBar(!mobileNavBar)}
            className="flex md:hidden justify-end m-4"
          >
            <Bars3Icon className="w-8 text-gray-900" />
          </div>
          <nav className="hidden md:flex gap-4 justify-around items-center my-2 text-gray-700">
            <div>
              <Link href={"/"}>Logo</Link>
            </div>
            <div className="flex justify-between items-center gap-8 text-lg">
              <Link className={hoverStyle.hover} href={"/"}>
                Home
              </Link>
              <Link className={hoverStyle.hover} href={"/about"}>
                About
              </Link>
              <Link className={hoverStyle.hover} href={"/categories"}>
                Categories
              </Link>
              <Link className={hoverStyle.hover} href={"/services"}>
                Services
              </Link>
              <Link className={hoverStyle.hover} href={"/contact"}>
                Contact
              </Link>
              <Link
                className="flex items-center gap-2 bg-slate-600 text-slate-50 px-4 py-2 rounded-md hover:text-teal-600 hover:bg-slate-100"
                href={"/sign-up"}
              >
                <UserIcon className="w-5" /> Account
              </Link>
            </div>
          </nav>
        </>
      )}
      {mobileNavBar && (
        <nav className="overscroll-y-contain bg-slate-50 h-screen w-11/12 flex flex-col items-center text-gray-700 relative">
          <div
            onClick={() => setMobileNavBar(!mobileNavBar)}
            className="absolute right-4 top-4"
          >
            <XMarkIcon className="w-8" />
          </div>
          <div className="my-4">
            <Link onClick={() => setMobileNavBar(!mobileNavBar)} href={"/"}>
              Logo
            </Link>
          </div>
          <div className="flex flex-col items-center gap-8 text-lg">
            <Link
              onClick={() => setMobileNavBar(!mobileNavBar)}
              className={hoverStyle.hover}
              href={"/"}
            >
              Home
            </Link>
            <Link
              onClick={() => setMobileNavBar(!mobileNavBar)}
              className={hoverStyle.hover}
              href={"/about"}
            >
              About
            </Link>
            <Link
              onClick={() => setMobileNavBar(!mobileNavBar)}
              className={hoverStyle.hover}
              href={"/categories"}
            >
              Categories
            </Link>
            <Link
              onClick={() => setMobileNavBar(!mobileNavBar)}
              className={hoverStyle.hover}
              href={"/services"}
            >
              Services
            </Link>
            <Link
              onClick={() => setMobileNavBar(!mobileNavBar)}
              className={hoverStyle.hover}
              href={"/contact"}
            >
              Contact
            </Link>
            <Link
              onClick={() => setMobileNavBar(!mobileNavBar)}
              className="flex gap-2 bg-slate-600 text-slate-50 px-4 py-2 rounded-md hover:text-teal-600 hover:bg-slate-100"
              href={"/sign-up"}
            >
             <UserIcon className="w-5" /> Account
            </Link>
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;
