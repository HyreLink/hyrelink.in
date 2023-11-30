import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
// import Integration from "@/components/Integration";
// import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
// import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
// import Head from "./head";

export const metadata: Metadata = {
  title: "HyreLink Solutions & Services Co. | Transforming Ideas into Digital Excellence",
  description: "Unlock unparalleled business growth with HyreLink. Our comprehensive services span Digital Marketing, SEO, Website Development, App Development, Logistics, Data Analytics, AI Solutions, Event Management, and Interior Design. From concept to execution, we redefine success with innovative solutions tailored to your needs. Explore the possibilities and elevate your business with HyreLink's expertise.",
  keywords: "Solutions, SEO, Development, Logistics, Analytics, AI, Event, Interior, Growth, Technology, Transformation, Innovation, Marketing, Creative, Professional, Excellence, Strategy, Client-Centric, Customized, Execution",
  // other metadata
};

export default function Home() {
  return (
    <main>
      {/* <Head/> */}
      <Hero />
      <Brands />
      <Feature />
      {/* <About /> */}
      <FeaturesTab />
      <FunFact />
      {/* <Integration /> */}
      {/* <CTA /> */}
      <FAQ />
      <Testimonial />
      {/* <Pricing /> */}
      <Contact />
      <Blog />
    </main>
  );
}
