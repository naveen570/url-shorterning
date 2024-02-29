"use client";
import { source } from "@/utils/images";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "./nav-bar.css";
import { MobileNavBar } from "@/components";
import { AnimatePresence } from "framer-motion";
export type NavLinks = {
  name: string;
  href: string;
};
export const NavBar = () => {
  const [open, setOpen] = useState(false);
  const links: NavLinks[] = [
    {
      name: "Features",
      href: "/",
    },
    {
      name: "Pricing",
      href: "/",
    },
    {
      name: "Resources",
      href: "/",
    },
  ];
  return (
    <nav className="relative z-50 mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-5 text-sm font-bold text-neutral-gray md:gap-10 md:px-8 md:py-10 lg:px-16">
      <Image src={source.logo.src} alt="logo" width={100} height={40} />
      <div className="hidden items-center gap-8 md:flex">
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.name}
            className="hover:text-neutral-very-dark-blue"
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className="ml-auto hidden items-center gap-6 md:flex">
        <button className="rounded-full px-4 py-2.5">Login</button>
        <button className="rounded-full bg-primary-cyan px-4 py-2.5 text-white transition-colors hover:bg-primary-cyan/50">
          Sign Up
        </button>
      </div>
      <button
        className="block cursor-pointer bg-transparent p-1 hover:bg-neutral-50 md:hidden"
        onClick={() => setOpen(!open)}
      >
        <div
          className={`hamburger flex h-8 w-8 flex-col items-center justify-center gap-1 [&>*]:mx-auto [&>*]:h-1 [&>*]:w-4/5 [&>*]:origin-center [&>*]:bg-neutral-gray [&>*]:duration-300 ${open ? "active" : ""} `}
        >
          <p className="hamburger-top"></p>
          <p className="hamburger-middle"></p>
          <p className="hamburger-bottom"></p>
        </div>

        <AnimatePresence>
          {open ? <MobileNavBar links={links} /> : null}
        </AnimatePresence>
      </button>
    </nav>
  );
};