import { source } from "@/utils/images";
import Image from "next/image";

export const NavBar = () => {
  return (
    <nav className="mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-16 ">
      <Image src={source.logo.src} alt="logo" width={100} height={40} />
    </nav>
  );
};
