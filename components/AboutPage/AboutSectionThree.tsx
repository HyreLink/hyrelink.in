import { motion } from "framer-motion";
const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="text-body-color mb-1 flex items-center text-lg font-medium">
      <span className="mr-1 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary"></span>
      {text}
    </p>
  );

  return (
    <>
      <section className="font-poppins flex items-center bg-gray-100 py-10 dark:bg-gray-800 ">
        <div className="mx-auto max-w-6xl flex-1 justify-center px-4 py-4 md:px-6 lg:py-6">
          <div className="flex flex-wrap items-center">
            <div className="mb-10 w-full px-4 lg:mb-8 xl:w-1/2">
              <div className="flex flex-wrap">
                <div className="h-96px-4  w-full ">
                  <img
                    src="/images/about/whyy.png"
                    alt=""
                    className="h- mb-6 w-full rounded-lg object-cover"
                  ></img>
                </div>
              </div>
            </div>
            <div className="mb-10 w-full px-4 lg:mb-8 xl:w-1/2">
              <h2 className="mb-4 mt-2 text-2xl font-bold text-gray-700 dark:text-gray-300">
                Why choose us ?
              </h2>
              <p className="mb-4 text-justify text-base leading-7 text-gray-500 dark:text-gray-400">
                At HyreLink, we believe in the power of your vision. It's not
                just Understanding that every client is unique, we specialize in
                providing customized solutions. Your requirements are at the
                forefront of our approach, and we craft strategies and services
                that align seamlessly with your specific goals and aspirations.
                Our team of experts spans various domains, from logistics and
                interior design to cutting-edge fields like data science and
                artificial intelligence. We bring a wealth of knowledge to the
                table, ensuring that we can cater to your unique needs, no
                matter how diverse they may be.Our commitment to excellence is
                woven into every project, ensuring that your vision is met with
                precision and dedication.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 lg:h-screen">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="mx-auto max-w-xl">
            <div className="text-center ">
              <div className="relative flex flex-col items-center">
                <div className="absolute -top-14 left-0 hidden text-[120px] font-bold text-gray-400 opacity-10 md:block">
                  FEATURES
                </div>
                <h1 className="text-5xl font-bold dark:text-white">
                  {" "}
                  Our <span className="text-blue-500"> Features</span>{" "}
                </h1>
                <div className="mb-10 mt-1 flex w-24 overflow-hidden rounded">
                  <div className="h-2 flex-1 bg-blue-200"></div>
                  <div className="h-2 flex-1 bg-blue-400"></div>
                  <div className="h-2 flex-1 bg-blue-600"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
            <div className="mb-5 w-full rounded bg-white p-8 text-center shadow transition-all hover:shadow-lg dark:bg-gray-700">
              <div className="-mt-16 mb-6 inline-block rounded-full bg-blue-400 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-semibold dark:text-white">
                {" "}
                Innovative Technology Solutions{" "}
              </h3>
              <p className="text-base text-gray-500 dark:text-gray-400"></p>
            </div>
            <div className="mb-5 w-full rounded bg-blue-500 p-8 text-center shadow transition-all hover:shadow-lg">
              <div className="-mt-16 mb-6 inline-block rounded-full bg-white p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="text-blue-400"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm-.5 5a.5.5 0 0 1 1 0v1.5H10a.5.5 0 0 1 0 1H8.5V9a.5.5 0 0 1-1 0V7.5H6a.5.5 0 0 1 0-1h1.5V5z"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-white">
                {" "}
                Streamlined Operations{" "}
              </h3>
              <p className="text-base text-gray-300"></p>
            </div>
            <div className="mb-5 w-full rounded bg-white p-8 text-center shadow transition-all hover:shadow-lg dark:bg-gray-700">
              <div className="-mt-16 mb-6 inline-block rounded-full bg-blue-400 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-semibold dark:text-white">
                {" "}
                Unparellel Expertise{" "}
              </h3>
              <p className="text-base text-gray-500 dark:text-gray-400"></p>
            </div>
            <div className="mb-5 w-full rounded bg-blue-500 p-8 text-center shadow transition-all hover:shadow-lg">
              <div className="-mt-16 mb-6 inline-block rounded-full bg-white p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="text-blue-400"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm-.5 5a.5.5 0 0 1 1 0v1.5H10a.5.5 0 0 1 0 1H8.5V9a.5.5 0 0 1-1 0V7.5H6a.5.5 0 0 1 0-1h1.5V5z"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-white">
                {" "}
                Intelligent Insights Ecosystem{" "}
              </h3>
              <p className="text-base text-gray-300"></p>
            </div>
            <div className="mb-5 w-full rounded bg-white p-8 text-center shadow transition-all hover:shadow-lg dark:bg-gray-700">
              <div className="-mt-16 mb-6 inline-block rounded-full bg-blue-400 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-semibold dark:text-white">
                {" "}
                Strategic Digital Transformation{" "}
              </h3>
              <p className="text-base text-gray-500 dark:text-gray-400"></p>
            </div>
            <div className="mb-5 w-full rounded bg-blue-500 p-8 text-center shadow transition-all  hover:shadow-lg">
              <div className="-mt-16 mb-6 inline-block rounded-full bg-blue-400 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                  <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z" />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-semibold dark:text-white">
                {" "}
                Data-Driven Decision Support
              </h3>
              <p className="text-base text-gray-500 dark:text-gray-400"></p>
            </div>
          </div>
        </div>
      </section>

      <section className="font-poppins flex items-center bg-stone-100 dark:bg-gray-800 xl:h-screen ">
        <div className="mx-auto max-w-6xl flex-1 justify-center py-4 md:px-6 lg:py-6">
          <div className="flex flex-wrap ">
            <div className="mb-10 w-full px-4 lg:mb-0 lg:w-1/2">
              <div className="relative lg:max-w-md">
                <img
                  src="./images/about/story.png"
                  alt="aboutimage"
                  className="relative z-10 h-96 w-full rounded object-cover"
                ></img>
                <div className="absolute bottom-0 right-0 z-10 rounded border-4 border-blue-500 bg-white p-8 shadow dark:border-blue-400 dark:bg-gray-800 dark:text-gray-300 sm:p-8 lg:-mb-8 lg:-mr-11 ">
                  <p className="text-lg font-semibold md:w-72">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="absolute left-0 top-0 h-16 w-16 text-blue-700 opacity-10 dark:text-gray-300"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path>
                    </svg>{" "}
                    From Tech to Events, We Deliver it All
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-10 w-full px-6 lg:mb-0 lg:w-1/2 ">
              <div className="mb-6 border-l-4 border-blue-500 pl-4 ">
                <h1 className="mt-2 text-3xl font-black text-gray-700 dark:text-gray-300 md:text-5xl">
                  Our Story
                </h1>
              </div>
              <p className="mb-6 text-base leading-7 text-gray-500 dark:text-gray-400">
                With newfound determination and a fresh perspective, we embarked
                on a transformative journey. What emerged was not just a
                startup, but a manifestation of our unwavering commitment to
                success. We rebranded with a clear mission, expanded our
                services, and embraced innovation at its core. HyreLink was
                reborn  a testament to resilience and adaptability. We set out
                to provide innovative business solutions, carving a niche in
                logistics, interior design, data science, artificial
                intelligence, design, app development, and event management.
                Today, HyreLink stands tall as a beacon of expertise. We don't
                just meet expectations we exceed them.
              </p>
          
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AboutSectionOne;
