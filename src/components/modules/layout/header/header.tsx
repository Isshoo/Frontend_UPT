import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navlink from "@/components/base/header/navlink";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-20">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between px-4 py-6">
        <Link href="/">
          <Image priority src={"/next.svg"} alt="Logo UPT" width={120} height={50} />
        </Link>
        <Navlink />
      </div>
    </header>
  );
};

export default Header;
