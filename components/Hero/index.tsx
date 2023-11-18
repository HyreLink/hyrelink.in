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
      <div className="relative h-screen overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            playsInline
            loop
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/videos/homevid.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 bg-opacity-25 backdrop-blur-sm"></div>
          </div>
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h5 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Fueling Innovation.
          </h5>
          <h1 className="mb-5 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            Powering Progress.
          </h1>
          <p className="mb-5 w-9/12 text-lg sm:text-xl md:text-2xl lg:text-2xl">
            HyreLink transforms ideas into impactful solutions for swift
            business evolution.
          </p>
          <button
            aria-label="get started button"
            className="flex rounded-full bg-black px-6 py-2 text-base text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho sm:text-lg md:text-lg lg:text-lg"
            onClick={handleSubmit}
          >
            Let's Connect
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
