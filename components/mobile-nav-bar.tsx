"use client";
import { motion } from "framer-motion";
import { NavLinks } from "./nav-bar";
import Link from "next/link";

export const MobileNavBar = ({ links }: { links: NavLinks[] }) => {
  return (
    <motion.aside
      className="absolute -bottom-20 left-4 right-4 mr-1 rounded-lg bg-primary-dark-violet py-8 font-bold text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      <div className="flex flex-col items-center gap-6">
        {links.map((link) => (
          <Link href={link.href} key={link.name}>
            {link.name}
          </Link>
        ))}
      </div>
    </motion.aside>
  );
};
