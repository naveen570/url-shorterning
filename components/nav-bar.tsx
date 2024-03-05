"use client";
import { source } from "@/utils/images";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import "./nav-bar.css";
import { MobileNavBar } from "@/components";
import { AnimatePresence } from "framer-motion";
import { useSticky } from "@/utils/hooks/useSticky";
export type NavLinks = {
  name: string;
  href: string;
};
export const NavBar = () => {
  const [open, setOpen] = useState(false);
  const { isVisible } = useSticky();
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
    <nav
      className={`sticky top-0 z-30 bg-white transition-shadow ${!isVisible ? "shadow-lg" : ""}`}
    >
      <div className="container relative z-50 mx-auto flex w-full items-center justify-between py-5 text-sm font-bold text-neutral-gray md:gap-10 md:py-10">
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
        </button>
        <AnimatePresence>
          {open ? <MobileNavBar links={links} /> : null}
        </AnimatePresence>
      </div>
    </nav>
  );
};
