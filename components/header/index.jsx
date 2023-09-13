"use client";

import Link from "next/link";

import MainNav from "../main-nav";
import MobileMainNav from "../main-nav/MobileUI";
import { SIGN_IN_LINK } from "@/lib/constants";

export default function Header() {
  return (
    <header className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <MobileMainNav />
        </div>
        <a className="text-xl normal-case btn btn-ghost">Safe Space</a>
      </div>

      <MainNav />

      <div className="navbar-end">
        <Link href={SIGN_IN_LINK.path} className="btn">
          {SIGN_IN_LINK.label}
        </Link>
      </div>
    </header>
  );
}
