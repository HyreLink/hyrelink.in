"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Hero = () => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/app/support/page.tsx");
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                Hyre
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                  Link.Co
                </span>
              </h1>
              <p className="mb-5">
                Embark on a transformative journey with HyreLink – Pioneers of
                Innovation. Unleash the power of AI & Data Science, Elevate
                Design & App Development, Streamline Logistics, Redefine
                Interior Designing, and Elevate Events to Extraordinary. Ignite
                success through our unparalleled expertise. Your vision, our
                expertise – Together, we redefine excellence.
              </p>
              <button
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-15 text-lg py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                      onClick={handleSubmit}
                    >
                     Let's Connect
                    </button>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0 z-30 "
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-30"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-30"
                />
                <div className=" relative aspect-[700/444] w-full">
                  <video
                    autoPlay
                    muted
                    playsInline
                    loop
                    className="absolute inset-0 z-10 h-full w-full object-cover rounded-3xl"
                  >
                    <source src="/videos/homevid.webm" type="video/webm" />
                    {/* Add additional source elements for different video formats if needed */}
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
