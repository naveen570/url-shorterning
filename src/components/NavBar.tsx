import { useState } from "react";

export const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='flex px-4 justify-between py-2 relative'>
      <h2 className='text-primary-dark-violet font-bold text-2xl'>Shortly</h2>
      <button onClick={() => setToggle(!toggle)} className='visible md:hidden'>
        <div
          className={`w-6 h-1 bg-neutral-gray mb-1  origin-[left_center] duration-200 transition-transform ${
            toggle ? "-translate-y-0.5 rotate-45" : ""
          } `}
        ></div>
        <div
          className={`w-6 h-1 bg-neutral-gray mb-1  origin-[left_center] duration-200  transition-all ${
            toggle ? "w-0 opacity-0" : ""
          } `}
        ></div>
        <div
          className={`w-6 h-1 bg-neutral-gray mb-1  origin-[left_center]  duration-300 transition-transform ease-in-out ${
            toggle ? "-rotate-45 -translate-y-[1px]" : ""
          } `}
        ></div>
      </button>

      <div
        className={`absolute md:static top-full w-[calc(100%_-_32px)] z-10 bg-primary-dark-violet flex flex-col rounded-md transition-all duration-500   ${
          toggle ? "opacity-100 translate-y-0 " : "-translate-y-1/2 opacity-0"
        }`}
      >
        hi
      </div>
    </nav>
  );
};
