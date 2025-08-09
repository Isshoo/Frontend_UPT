"use client";

import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import clsx from "clsx";
import Link from "next/link";

// This component is used for the navigation links in the navbar.
const LinkItem = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <li>
      <Link
        href={href}
        className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0"
      >
        {children}
      </Link>
    </li>
  );
};

const AuthLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <li className="pt-2 md:pt-0">
      <Link href={href} className="py-2.5 px-6 bg-orange-400 text-white hover:bg-orange-500 rounded-sm">
        {children}
      </Link>
    </li>
  );
};

const Navlink = () => {
  const [Open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(!Open)}
        className="inline-flex items-center p-2 justify-center text-sm text-gray-500 rounded-md md:hidden hover:bg-gray-100 cursor-pointer"
      >
        {!Open ? <IoMenu className="size-8" /> : <IoClose className="size-8" />}
      </button>
      <div className={clsx("w-full md:block md:w-auto", { hidden: !Open })}>
        <ul className="flex flex-col font-semibold text-sm uppercase p-4 mt-4 rounded-sm bg-gray-50 md:flex-row md:items-center md:space-x-10 md:p-0 md:mt-0 md:border-0 md:bg-white ">
          {/* navlink */}
          <LinkItem href="/">Home</LinkItem>
          <LinkItem href="/about">About</LinkItem>
          <LinkItem href="/room">Room</LinkItem>
          <LinkItem href="/contact">Contact</LinkItem>
          <LinkItem href="/myreservation">My Reservation</LinkItem>
          <LinkItem href="/admin/dashboard">Dashboard</LinkItem>
          <LinkItem href="/admin/room">Manage Room</LinkItem>
          {/* authentication */}
          <AuthLink href="/signin">Sign In</AuthLink>
        </ul>
      </div>
    </>
  );
};

export default Navlink;
