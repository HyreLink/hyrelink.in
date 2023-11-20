import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import Image from "next/image";

const SingleBlogPage = async () => {
  return (
    <>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-3.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection"></div>

              <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
                  Explore
                </h4>

                <ul>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="/blog">Blog</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="/events">Events</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="/podcast">Podcast</a>
                  </li>
                 
                </ul>
              </div>

              <RelatedPost />
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={"/images/blog/blog3.jpg"}
                      alt="Kobe Steel plant that supplied"
                      fill
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>

                <div className="blog-details">
                  <h3>
                    Unveiling the Power of Data Science: Transforming Insights
                    into Action
                  </h3>
                  <p>
                    Data science is not just a buzzword; it's a
                    multidisciplinary field that uses scientific methods,
                    processes, algorithms, and systems to extract knowledge and
                    insights from structured and unstructured data. It combines
                    expertise from statistics, mathematics, computer science,
                    and domain-specific knowledge to make informed decisions and
                    predictions.
                  </p>
                  <p>
                    At the heart of every data science endeavor lies the data
                    itself. Collecting and cleaning data is a meticulous
                    process. Raw data often comes in messy, incomplete, or
                    inconsistent formats. Data scientists employ various
                    techniques to process and clean the data, ensuring its
                    quality and reliability.
                  </p>

                  <p>
                    EDA is the detective work of data science. It involves
                    visualizing and analyzing data sets to summarize their main
                    characteristics, often with the help of statistical graphics
                    and other data visualization methods. EDA helps in
                    identifying patterns, trends, and outliers, laying the
                    groundwork for further analysis.
                  </p>

                  <div className="flex flex-wrap gap-5">
                    <Image
                      src={"/images/blog/data.png"}
                      width={350}
                      height={200}
                      alt="image"
                    />
                    <Image
                      src={"/images/blog/blog5.jpg"}
                      width={350}
                      height={200}
                      alt="image"
                    />
                  </div>

                  <p>
                    Machine learning is the engine that drives predictive
                    modeling and pattern recognition. Algorithms are trained on
                    historical data to make predictions or decisions without
                    being explicitly programmed. From recommendation systems to
                    fraud detection, machine learning is the backbone of many
                    data-driven applications
                  </p>
                </div>

                <SharePost />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;
