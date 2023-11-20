import Link from "next/link";
import React from "react";

const podcasts = () => {
  return (
    <>
      <div className="relative h-screen overflow-hidden text-white">
        <div>
          <video
            autoPlay
            muted
            playsInline
            loop
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/videos/podcast.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 bg-opacity-25 backdrop-blur-sm"></div>
          </div>
        </div>

        <div className="relative z-10 flex h-3/4 flex-col items-center justify-center text-center md:h-full">
          <h1 className="mb-5 text-3xl max-sm:text-2xl max-sm:mt-35 font-bold uppercase sm:text-4xl md:text-4xl lg:text-4xl">
            Coming Up Soon
          </h1>
          <p className="mb-10 w-9/12 text-xl sm:text-xl md:text-xl lg:text-xl">
            At HyreLink, we go beyond delivering excellence — we unveil the
            riveting stories echoing across the globe. Join us for a podcast
            experience that transforms every episode into an immersive journey
            of innovation, insight, and unparalleled success. Stay tuned for
            stories that redefine the podcast landscape.
          </p>
          <Link
            href="/"
            className="flex rounded-full bg-black px-6 py-2 text-base text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho sm:text-lg md:text-lg lg:text-lg"
          >
            Explore More →
          </Link>
        </div>
      </div>
    </>
  );
};

export default podcasts;
