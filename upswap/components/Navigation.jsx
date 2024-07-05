"use client";

import Link from "next/link";

export default function Navigation({ layout, setIsOpen }) {
  return (
    <nav className="w-full lg:max-w-fit lg:bg-transparent">
      <ul
        className={
          "flex w-full h-full justify-end items-center text-medium gap-3 lg:gap-5 *:text-white " +
          layout
        }
      >
        <li className="cursor-pointer">
          <Link
            onClick={() => setIsOpen && setIsOpen(false)}
            href={`/about-us`}
            className="hover:text-blue leading-[25px] transition duration-300 ease-linear"
          >
            About us
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(true);
            }}
            href={`#`}
            className="hover:text-blue leading-[25px] transition duration-300 ease-linear"
          >
            Explore
          </Link>
        </li>
        <button
          onClick={() => setIsOpen(true)}
          className="hover-fill-gradient relative z-10 px-4 py-2 bg-black text-white rounded-full"
        >
          Get started
        </button>
      </ul>
    </nav>
  );
}
