"use client";

import { MAIN_NAV_ITEMS } from "@/lib/constants";
import Link from "next/link";

export default function MainNav() {
  return (
    <ul
      tabIndex={0}
      className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
    >
      {MAIN_NAV_ITEMS.map(({ path, id, label }) => (
        <li tabIndex={id} key={id}>
          <Link href={path}>{label}</Link>
        </li>
      ))}
    </ul>
  );
}
