import React, { useEffect, useState } from "react";
import Link from "next/link";
import Layout from "@/layout";
import PageBannerRev from "@/src/components/PageBannerRev";
import { JeenaAccordion2 } from "@/src/components/JeenaAccordion";
import Image from "next/image";
import PercentageSection from "@/src/components/services/PercentageSection";
import ImageWithText from "@/src/components/others/ImageWithText";
import ServiceCard from "@/src/components/services/ServiceCard";
// import Discover from "@/src/components/others/Discover";
import Discover from "@/src/components/contact/Discover";
// import Link from "next/link";
const Index = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    console.log("useEffect is running ");

    fetch(window.origin + "/api/services/generativeaiandml/services")
      .then((response) => response.json())
      .then((parsed) => {
        setServices(parsed);
        console.log(parsed);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }, []);

  return (
    <Layout>
      <PageBannerRev
        title="SERVICES/DATA ENGINEERING"
        subtitle="DATA ENGINEERING APPLICATIONS"
      />
      <div className="mb-36 justify-center">
        <div className="container grid grid-cols-1 md:grid-cols-9 gap-4 mt-14 justify-center">
          <div className="left  col-span-5">
            <h1 className="text-4xl font-bold p-4">
              Revolutionizing Business Growth with Cloud Pro AI's Data
              Engineering Services
            </h1>
            <p className="p-4 justify-right">
              Welcome to the forefront of data-driven innovation. In this
              digital age, the importance of data cannot be overstated. Our
              dedicated team of data and cloud engineering experts is committed
              to unlocking the full potential of data for your organization.{" "}
            </p>
          </div>
          <div className="right  col-span-4">
            <div>
              {" "}
              <Image
                src="/assets/images/services/generativeaiandml/Group2506.svg"
                width={340}
                height={240}
              ></Image>{" "}
            </div>
          </div>
        </div>

        <div className="bg-gray-100 pt-10">
          <div className=" container 2nddiv col-span-1 row-span-8 mt-28 ">
            <div className="top  grid grid-cols-1 md:grid-cols-2 ">
              <div className="cols">
                <h1 className="text-4xl font-bold p-4">
                  Seamless Integration with API Data Extraction  
                </h1>

                <p className="p-4 justify-right">
                  Tap into the benefits of external data with our API data
                  extraction services, providing real-time access to valuable
                  information. We make integrating this data into your existing
                  systems easy and convenient.
                </p>
              </div>
              <div className="hidden"></div>
            </div>
            <hr></hr>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <PercentageSection
                percent="70%"
                bold="Reduction"
                description="in time allocated to content creation and design tasks. "
              />
              <PercentageSection
                percent="40%"
                bold="Increase"
                description=" in customer engagement through personalized marketing campaigns. "
              />
              <PercentageSection
                percent="50%"
                bold="Decrease"
                description=" in operational costs by automating routine tasks.  "
              />
              <PercentageSection
                percent="35%"
                bold="Uplift"
                description="in sales conversions with tailored product recommendations. . "
              />
            </div>
          </div>

          <div className="superCharging container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Image
                src="/assets/images/services/generativeaiandml/Group2507.svg"
                height={528}
                width={400}
              />
            </div>
            <div className="textSection lg:col-span-5">
              <h1 className="text-4xl font-bold p-4">
                Custom BI Reports and Dynamic Dashboards
              </h1>
              <p class="font-inter text-base font-normal leading-6 text-left pt-8">
                Visualize data through custom-built BI reports and dynamic
                dashboards, enabling you to track key performance indicators and
                uncover hidden opportunities. Our solutions are user-friendly
                and visually appealing, transforming raw data into actionable
                insights.
                {/* <span className="font-bold text-black">
                  {" "}
                  Cloud Pro AI ensures the seamless integration and scalability
                  of AI apps within your business operations.
                </span> */}
              </p>

              <p class="font-inter text-base font-normal leading-6 text-left pt-8">
                Understanding the unique challenges and opportunities each
                business faces, Cloud Pro AI offers bespoke solutions to
                automate content creation, streamline product design, or enhance
                customer interactions, driving substantial improvements in
                efficiency, customer satisfaction, and overall growth.
              </p>
              {/* <p class="font-inter text-base font-normal leading-6 text-left pt-8">
                Understanding the unique challenges and opportunities each
                business faces, Cloud Pro AI offers bespoke solutions to
                automate content creation, streamline product design, or enhance
                customer interactions, driving substantial improvements in
                efficiency, customer satisfaction, and overall growth.
              </p> */}
            </div>
            <div className="hidden lg:col-span-2"></div>
          </div>
        </div>

        <div className="bg-[#0C2126] pt-10">
          <div className=" container ImageSection col-span-1 row-span-8 mt-28 ">
            <div className="top  grid grid-cols-1 md:grid-cols-2 ">
              <div className="cols">
                <h1 className="text-4xl text-white font-bold p-4">
                  Transformative Data Analytics
                </h1>

                <p className="p-4 justify-right text-white">
                  Harness the power of data analytics to predict trends and make
                  strategic decisions. Our analytics services breathe life into
                  data, boosting operational efficiency and enhancing customer
                  experiences.
                </p>
              </div>
              <div className="hidden"></div>
            </div>
            <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4">
              <div className="col-span-3">
                <ImageWithText
                  imageUrl="/assets/images/services/generativeaiandml/Group2508.svg"
                  text="Revolutionizing inventory management with precise demand forecasting, reducing stockouts and overstock by up to 30%. "
                ></ImageWithText>
              </div>
              <div className="col-span-3">
                <ImageWithText
                  imageUrl="/assets/images/services/generativeaiandml/Group2508.svg"
                  text="Revolutionizing inventory management with precise demand forecasting, reducing stockouts and overstock by up to 30%. "
                ></ImageWithText>
              </div>
              <div className="col-span-3">
                <ImageWithText
                  imageUrl="/assets/images/services/generativeaiandml/Group2508.svg"
                  text="Revolutionizing inventory management with precise demand forecasting, reducing stockouts and overstock by up to 30%. "
                ></ImageWithText>
              </div>
            </div>
          </div>
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-9 gap-4 mt-14 justify-center">
          <div className="left  col-span-5">
            <h1 className="text-4xl font-bold p-4">Robust Data Architecture</h1>
            <p className="p-4 justify-right">
              Lay a strong data foundation with our data architecture services,
              designed to scale, secure, and support growth. Tailored
              architectures help enterprises effectively manage their data
              infrastructure.
            </p>
            <h1 className="text-4xl font-bold p-4">
              End-to-End Data Pipeline Solutions
            </h1>
            <p className="p-4 justify-right">
              Automate and streamline data processes with our efficient
              end-to-end data pipelines, minimizing errors, reducing latency,
              and allowing focus on strategic initiatives.
            </p>
            <p>
              We believe in the power of partnership and collaboration. Reach
              out to us for a consultation or to learn more about how we can
              guide your organization toward data-driven excellence.
            </p>
          </div>
          <div className="right  col-span-4">
            <div>
              {" "}
              <Image
                src="/assets/images/services/generativeaiandml/Group.svg"
                width={486}
                height={509}
              ></Image>
            </div>
          </div>
        </div>
        <div className="ServicesFooter container grid grid-cols-1 xl:grid-cols-3 pt-16">
          <div>
            <ServiceCard
              title="Data Engineering Services"
              description="Unlock the Power of Intelligent Creation with CloudPro AI In the era of data-driven innovation, Generative Artificial Intelligence (AI)"
              position="left-96"
              image="/assets/group2493.svg"
              link="/services/generativeaiandml"
            ></ServiceCard>
          </div>
          <div className="grid grid-rows-3 gap-4">
            <div className="pr-16 pl-10">
              <h1 className="text-2xl font-bold">Data Analytics</h1>
              <p className="">
                Explore the transformative realm of AI Chatbot Services, where
                artificial intelligence meets seamless communication.
              </p>
            </div>
            {/* <div className="pr-16 pl-10">
              <h1 className="text-2xl font-bold">AI Chatbot Services</h1>
              <p className="">
                Explore the transformative realm of AI Chatbot Services, where
                artificial intelligence meets seamless communication.
              </p>
            </div> */}
            <div className="pr-16 pl-10">
              <h1 className="text-2xl font-bold">Data Lakes And Warehousing</h1>
              <p className="">
                Explore the transformative realm of AI Chatbot Services, where
                artificial intelligence meets seamless communication.
              </p>
            </div>
          </div>
          <div className=" grid grid-rows-3">
            <div className="pr-16 pl-10">
              <h1 className="text-2xl font-bold">Data PipeLining</h1>
              <p className="">
                Explore the transformative realm of AI Chatbot Services, where
                artificial intelligence meets seamless communication.
              </p>
            </div>
            {/* <div className="pr-16 pl-10">
              <h1 className="text-2xl font-bold">AI Chatbot Services</h1>
              <p className="">
                Explore the transformative realm of AI Chatbot Services, where
                artificial intelligence meets seamless communication.
              </p>
            </div> */}
            <div className="pr-16 pl-10">
              <h1 className="text-2xl font-bold">Data Platform Engineering</h1>
              <p className="">
                Explore the transformative realm of AI Chatbot Services, where
                artificial intelligence meets seamless communication.
              </p>
            </div>
          </div>
        </div>
        <Discover title="Discover more ways our team can help." />
      </div>
    </Layout>
  );
};

export default Index;
