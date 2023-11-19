import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="text-body-color mb-5 flex items-center text-lg font-medium">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <>
      <section>
        <div className="relative h-screen overflow-hidden text-black">
          <div>
            <video
              autoPlay
              muted
              playsInline
              loop
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src="/videos/about.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 bg-opacity-25 backdrop-blur-sm"></div>
          </div>
        </div>
          <div className="relative z-10 flex h-3/4 flex-col items-center justify-center text-center md:h-full">
            <h1 className="mb-5 text-[120px] font-bold uppercase sm:text-4xl md:text-4xl lg:text-4xl">
              About HyreLink
            </h1>
            <p className="mb-10 w-9/12 text-justify text-xl sm:text-xl md:text-xl lg:text-xl">
              Welcome to HyreLink, where we go beyond providing services, we
              craft a seamless experience, redefining excellence and igniting
              success through unparalleled expertise. Elevating Your Vision t
              HyreLink, we believe in the power of your vision. 
              {/* It's not just a
              statement; it's a mission. Your aspirations become our driving
              force as we collaborate to shape a future where possibilities are
              limitless. Together, we embark on a journey to transform ideas
              into reality. HyreLink stands as the premier destination for
              cutting-edge business solutions. Immerse yourself in excellence as
              we bring expertise to various domains, including logistics,
              interior design, data science, artificial intelligence, design and
              app development, and event management. At HyreLink, we
              consistently surpass expectations, going above and beyond. Elevate
              your business with us, where innovation meets unparalleled
              proficiency */}
            </p>
          </div>
        </div>
      </section>

      <section className="">
        <div className="container mx-auto max-w-xl space-y-12 p-6 lg:max-w-7xl lg:px-8">
          <div>
            <h2 className="text-center text-3xl font-bold sm:text-5xl">
              Every Service, Every Need, Every Time
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSectionOne;
