"use client";

import { MAIN_NAV_ITEMS } from "@/lib/constants";
import Link from "next/link";

export default function MainNav() {
  return (
    <nav className="hidden navbar-center lg:flex">
      <ul className="px-1 menu menu-horizontal menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
        {MAIN_NAV_ITEMS.map(({ path, id, label }) => (
          <li tabIndex={id} key={id}>
            <Link href={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
