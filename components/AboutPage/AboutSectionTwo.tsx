import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const AboutSectionTwo = () => {
  return (
    <section className="font-poppins flex items-center bg-stone-100 dark:bg-gray-800 lg:h-screen ">
      <div className="mx-auto max-w-6xl flex-1 justify-center py-4 md:px-6 lg:py-6">
        <div className="mb-10 px-4 md:mb-20 md:text-center">
        <div className="relative flex flex-col items-center">
                <div className="absolute -top-14 left- hidden text-[120px]  font-bold text-gray-400 opacity-10 md:block">
                 What We DO
                </div>
                <h1 className="text-5xl font-bold dark:text-white">
                  {" "}
                  What <span className="text-blue-500">We Do</span>{" "}
                </h1>
                </div>
        
          <div className="mb-6 mt-1 flex w-32 overflow-hidden rounded md:mx-auto md:mb-14">
            <div className="h-2 flex-1 bg-blue-200"></div>
            <div className="h-2 flex-1 bg-blue-400"></div>
            <div className="h-2 flex-1 bg-blue-300"></div>
          </div>
        </div>
        <div className="flex flex-wrap items-center">
          <div className="mb-10 w-full px-4 md:w-1/2 lg:mb-0 ">
            <h2 className="mb-4 text-2xl font-bold text-gray-700 dark:text-gray-300">
              We are providing a better facility
            </h2>
            <p className="mb-4 text-justify text-base leading-7 text-gray-500 dark:text-gray-400">
              At HyreLink, we believe in the power of your vision. It's not just
              a statement it's a mission. Your aspirations become our driving
              force as we collaborate to shape a future where possibilities are
              limitless. We redefine excellence by igniting success through
              unparalleled expertise. Your vision becomes our mission as we work
              together to create a future where possibilities are limitless.We
              specialize in unleashing the power of technology, streamlining
              operations, and elevating every facet of your business to
              extraordinary heights. Join us in reshaping industries and
              embracing innovation – because at HyreLink, we don't just meet
              expectations but we redefine them.
            </p>
          </div>
          <div className="relative mb-10 w-full px-4 md:w-1/2 lg:mb-0">
            <img
              src="/images/about/about.png"
              alt=""
              className="relative z-40 h-44 w-full rounded-md object-cover md:h-96"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSectionTwo;
