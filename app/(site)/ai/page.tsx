// pages/about-service.tsx

import Image from "next/image";
import React from "react";

const healthcare: React.FC = () => {
  return (
    <section className="mx-auto mt-20 flex max-w-lg flex-col px-4 py-10 lg:max-w-screen-xl lg:flex-row">
      <div className="max-w-md pr-20 lg:pt-28">
        <Image
          width={1200}
          height={1200}
          fill={false}
          src="/images/services/data.svg"
          alt=""
        />
      </div>
      <div className="">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-600/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
            />
          </svg>
        </div>
        <h2 className="mb-10 max-w-lg text-4xl font-bold leading-snug text-stone-900 dark:text-white lg:text-5xl lg:leading-snug ">
          Empower your <span className="text-indigo-600">Business</span> with
          Intelligent Insights
        </h2>
        <div className="grid gap-x-8 gap-y-12 lg:grid-cols-2">
          <div>
            <p className="mb-6 border-l-4 border-indigo-600 pl-4 text-2xl leading-10 text-black dark:text-white">
              Data-Driven Decision Making
            </p>
            <p className="text-lg text-black dark:text-white">
              Harnessing the power of data to guide your strategic business
              decisions. Our data science solutions provide actionable insights,
              enabling you to make informed choices that drive success.
            </p>
          </div>

          <div>
            <p className="mb-6 border-l-4 border-indigo-600 pl-4 text-2xl leading-10 text-black dark:text-white">
              Machine Learning Solutions
            </p>
            <p className="text-lg text-black dark:text-white">
              Implementing advanced machine learning algorithms for predictive
              analysis. From predictive maintenance to customer behavior
              forecasting, our ML solutions offer a competitive edge in today's
              dynamic business landscape.
            </p>
          </div>

          <div>
            <p className="mb-6 border-l-4 border-indigo-600 pl-4 text-2xl leading-10 text-black dark:text-white">
              Customized AI Solutions
            </p>
            <p className="text-lg text-black dark:text-white">
              Developing tailored AI solutions to address your specific business
              challenges. Whether it's automating processes, enhancing customer
              interactions, or optimizing workflows, our AI applications are
              crafted to fit your unique needs.
            </p>
          </div>

          <div>
            <p className="mb-6 border-l-4 border-indigo-600 pl-4 text-2xl leading-10 text-black dark:text-white">
              Continuous Optimization
            </p>
            <p className="text-lg text-black dark:text-white">
              Iteratively improving AI models to adapt to evolving business
              needs. We believe in staying ahead in the AI game, and continuous
              optimization ensures your solutions are always at the forefront of
              technological advancements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default healthcare;
