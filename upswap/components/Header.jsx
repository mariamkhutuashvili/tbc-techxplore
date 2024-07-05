"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";
import BurgerMenu from "./BurgerMenu";

export default function Header({ setOpen }) {
  return (
    <header className="w-full h-[70px] lg:h-[85px] bg-gradient-to-r from-black to-black/10 sticky top-0 z-10">
      <div className="w-full h-full flex mx-auto justify-between items-center px-10 lg:px-0 lg:pr-10 max-w-[1600px]">
        <Link className="w-[120px] lg:w-[150px]" href={`/`}>
          <Image src="/assets/logo.png" alt="logo" width={150} height={150} />
        </Link>
        <div className="hidden lg:block">
          <Navigation layout="flex-row" setIsOpen={setOpen} />
        </div>
        <BurgerMenu />
      </div>
    </header>
  );
}
