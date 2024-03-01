"use client";
import { motion } from "framer-motion";
import { NavLinks } from "./nav-bar";
import Link from "next/link";

export const MobileNavBar = ({ links }: { links: NavLinks[] }) => {
  return (
    <motion.aside
      className="absolute left-4 right-4 top-full flex flex-col gap-6 rounded-lg bg-primary-dark-violet px-6 py-8 font-bold text-white md:hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.3, ease: "backInOut" }}
    >
      <div className="flex flex-col items-center gap-6 border-b border-neutral-gray pb-6">
        {links.map((link) => (
          <Link href={link.href} key={link.name}>
            {link.name}
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-6">
        <button className="rounded-full px-4 py-2.5">Login</button>
        <button className="rounded-full bg-primary-cyan px-4 py-2.5 text-white transition-colors hover:bg-primary-cyan/50">
          Sign Up
        </button>
      </div>
    </motion.aside>
  );
};
