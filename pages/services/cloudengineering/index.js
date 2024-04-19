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
        title="SERVICES/ CLOUD ENGINEERING"
        subtitle="GENERATIVE AI APPLICATIONS"
      />
      <div className="mb-36 justify-center">
        <div className="container grid grid-cols-1 md:grid-cols-9 gap-4 mt-14 justify-center">
          <div className="left  col-span-5">
            <h1 className="text-4xl font-bold p-4">
              Unlock the Power of Cloud Computing for Your Business
            </h1>
            <p className="p-4 justify-right">
              Welcome to our world of cloud computing excellence. With our
              advanced cloud engineering services, we empower businesses to
              harness the full potential of the cloud. Explore our range of
              solutions designed to elevate your operations and propel you
              towards success.
            </p>{" "}
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
                  Reliable Cloud Service Operations and Maintenance  
                </h1>

                <p className="p-4 justify-right">
                  Trust us with your cloud infrastructure and experience
                  unparalleled reliability. Our proven expertise ensures zero
                  downtime and operational excellence. From maintenance to
                  optimization, we handle everything seamlessly, allowing you to
                  focus on your core business.
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
                Cost Optimization for Cloud Infrastructure
              </h1>
              <p class="font-inter text-base font-normal leading-6 text-left pt-8">
                Strategically optimize your cloud infrastructure with our
                tailored solutions. We strike the perfect balance between cost
                reduction and exceptional performance, maximizing your
                investment and boosting your bottom line. Say goodbye to
                unnecessary expenses and hello to efficiency.
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
              <p class="font-inter text-base font-normal leading-6 text-left pt-8">
                Understanding the unique challenges and opportunities each
                business faces, Cloud Pro AI offers bespoke solutions to
                automate content creation, streamline product design, or enhance
                customer interactions, driving substantial improvements in
                efficiency, customer satisfaction, and overall growth.
              </p>
            </div>
            <div className="hidden lg:col-span-2"></div>
          </div>
        </div>

        <div className="bg-[#0C2126] pt-10">
          <div className=" container ImageSection col-span-1 row-span-8 mt-28 ">
            <div className="top  grid grid-cols-1 md:grid-cols-2 ">
              <div className="cols">
                <h1 className="text-4xl text-white font-bold p-4">
                  Data Services Best Practices on Cloud
                </h1>

                <p className="p-4 justify-right text-white">
                  Unlock the true value of your data with our cloud-based data
                  services. Our experts guide you through secure and efficient
                  data handling, transforming raw data into strategic assets.
                  Leverage our expertise to make informed decisions and stay
                  ahead of the competition.
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
            <h1 className="text-4xl font-bold p-4">
              Information Governance in the Cloud
            </h1>
            <p className="p-4 justify-right">
              Navigate the complexities of information governance in the cloud
              with confidence. Our comprehensive strategies ensure compliance,
              data privacy, and security. Trust us to safeguard your valuable
              information and meet regulatory requirements without compromise.
            </p>
            <h1 className="text-4xl font-bold p-4">
              Seamless On-Prem to Cloud Migrations
            </h1>
            <p className="p-4 justify-right">
              Experience a seamless transition from on-premises to the cloud
              with our specialized migration services. Minimize downtime and
              maintain productivity as we securely and swiftly move your
              operations to the cloud. Embrace the future without missing a
              beat.
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
              title="Cloud Engineering"
              description="Unlock the Power of Intelligent Creation with CloudPro AI In the era of data-driven innovation, Generative Artificial Intelligence (AI)"
              position="left-96"
              image="/assets/cloudlogo.svg"
              link="/services/generativeaiandml"
            ></ServiceCard>
          </div>
          <div className="grid grid-rows-3">
            <div className="pr-16 pl-10">
            <h4 className="widget-title">Services Category</h4>
                  <ul>
                    {services.map((service) => (
                      <div key={service.slug}>
                        <li>
                          <Link
                            href={`/services/cloudengineering/${service.slug}`}
                          >
                            {service.title}
                          </Link>
                        </li>

                        {/* <p>{service.description.slice(0.10)}</p> */}
                      </div>
                    ))}
                  </ul>
              </div>
          </div>
        </div>
        <Discover title="Discover more ways our team can help." />
      </div>
    </Layout>
  );
};

export default Index;
