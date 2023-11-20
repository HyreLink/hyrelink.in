import React, { useEffect, useState } from "react";
import anime from "animejs";
import Image from "next/image";

export default function SplashScreen({ finishLoading }) {
  const [isMounted, setIsMounted] = useState(false);
  
  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });
    loader.add({
      targets: "#logo",
      delay: 0,
      scale: 3,
      duration: 2000,
      easing: "easeInOutExpo",
    });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`bg-aiesec-blue flex h-screen items-center justify-center ${isMounted ? 'mounted' : ''}`}>
      <img id="logo" src="/images/logo/HyreLink_Logo.png" alt="animation" width={60} />
    </div>
  );
}
