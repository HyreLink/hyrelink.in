import AboutSectionOne from "@/components/AboutPage/AboutSectionOne";
import AboutSectionTwo from "@/components/AboutPage/AboutSectionTwo";
import AboutSectionThree from "@/components/AboutPage/AboutSectionThree";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
    <div>
      <AboutSectionOne />
      <AboutSectionTwo />
      <AboutSectionThree />
      </div>
    </>
  );
};

export default AboutPage;
