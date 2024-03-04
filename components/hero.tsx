import { source } from "@/utils/images";
import Image from "next/image";
import React from "react";
import { Form } from "@/components";

export const Hero = () => {
  return (
    <header className="relative bg-white pb-36 pt-4 lg:pt-10">
      <div className="container relative flex flex-col items-center gap-6 overflow-hidden bg-white font-medium md:flex-row md:gap-0">
        <div className="order-2 flex  flex-col items-center gap-8 text-center text-xl md:order-1 md:w-1/2 md:items-start md:text-start">
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold leading-tight text-neutral-very-dark-blue lg:text-6xl lg:leading-tight">
              More than just shorter links
            </h1>
            <p className="text-neutral-gray">
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>
          </div>

          <button className="rounded-full bg-primary-cyan px-8 py-2.5 font-bold text-white transition-colors hover:bg-primary-cyan/50">
            Get Started
          </button>
        </div>
        <div className="relative z-10 order-1 min-h-80 w-full md:order-2 md:w-1/2 lg:min-h-96">
          <div className="absolute left-[5%] w-[450px] sm:relative sm:left-1/2 sm:w-full sm:-translate-x-1/2 lg:absolute  lg:left-1/4 lg:w-[500px] lg:translate-x-0 xl:w-[600px]">
            <Image
              src={source.illustrationWorking.src}
              alt="hero-image-illustration"
              width={700}
              height={700}
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
      <Form />
    </header>
  );
};
