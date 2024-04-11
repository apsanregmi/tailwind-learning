import React, { useEffect, useState } from "react";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import { JeenaAccordion2 } from "@/src/components/JeenaAccordion";
import Image from "next/image";
import PercentageSection from "@/src/components/services/PercentageSection";
import ImageWithText from "@/src/components/others/ImageWithText";
import ServiceCard from "@/src/components/services/ServiceCard";
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
      <PageBanner
        title="SERVICES/ GENERATIVE AI AND ML"
        subtitle="GENERATIVE AI APPLICATIONS"
      />
      <div className="mb-36 justify-center">
        <div className="container grid grid-cols-1 md:grid-cols-9 gap-4 mt-14 justify-center">
          <div className="left  col-span-5">
            <h1 className="text-4xl font-bold p-4">
              Revolutionizing Business Growth with Cloud Pro AI's Generative AI
              Applications 
            </h1>
            <p className="p-4 justify-right">
              In today's competitive and rapidly evolving digital landscape,
              businesses of all sizes are on a quest for innovative solutions
              that can propel them ahead of the curve. At the heart of this
              quest is generative AI, a transformative force in artificial
              intelligence that offers unparalleled creativity and efficiency.
              Cloud ProAI stands as a beacon in this journey, enabling
              businesses to harness the power of generative AI apps to foster
              originality, automate processes, and personalize customer
              experiences at an unprecedented scale. 
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
                  The Transformative Impact of Generative AI in Business  
                </h1>

                <p className="p-4 justify-right">
                  Generative AI apps are revolutionizing the way businesses
                  operate, offering a myriad of possibilities from crafting
                  personalized marketing content to innovating product designs
                  swiftly and cost-effectively. These technological marvels
                  significantly enhance operational efficiencies, foster
                  customer engagement, and drive a dramatic upsurge in growth
                  and competitiveness. By leveraging generative AI, businesses
                  can achieve: 
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
                Supercharging Businesses with Customized AI Solutions
              </h1>
              <p class="font-inter text-base font-normal leading-6 text-left pt-8">
                Cloud Pro AI excels in transforming the potential of generative
                AI into a tangible reality for businesses. Combining deep
                industry knowledge with a sophisticated technical stack,
                including TensorFlow, PyTorch, GPT, and premier cloud computing
                platforms like AWS, Google Cloud, and Azure,
                <span className="font-bold text-black">
                  {" "}
                  Cloud Pro AI ensures the seamless integration and scalability
                  of AI apps within your business operations.
                </span>
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
                  Empowering Industries with Tailored Generative AI Solutions
                </h1>

                <p className="p-4 justify-right text-white">
                  Cloud Pro AI's expertise in generative AI extends across
                  various sectors, addressing specific industry pain points and
                  unlocking growth:
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
              Embark on Your AI Journey with Cloud ProAI
            </h1>
            <p className="p-4 justify-right">
              The future of business innovation and growth is inextricably
              linked to the capabilities of generative AI. With Cloud Pro AI,
              your business is poised to navigate this new frontier with
              confidence, leveraging the full spectrum of AI's capabilities to
              revolutionize operations, engage customers, and outpace
              competition.
            </p>
            <p className="p-4 justify-right">
              Cloud Pro AI is not just a service provider but a partner
              committed to ensuring that the generative AI solutions evolve with
              your business, addressing new challenges and seizing
              opportunities. Contact Cloud Pro AI today to discover how
              generative AI can transform your business, driving unprecedented
              growth and success in the digital era.
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
              title="Generative AI And ML"
              description="Unlock the Power of Intelligent Creation with CloudPro AI In the era of data-driven innovation, Generative Artificial Intelligence (AI)"
              position="left-96"
              image="/assets/group2493.svg"
              link="/services/generativeaiandml"
            ></ServiceCard>
          </div>
          <div className="grid grid-rows-3">
            <div className="pr-16 pl-10">
              <h1 className="text-2xl font-bold">AI Chatbot Services</h1>
              <p className="">
                Explore the transformative realm of AI Chatbot Services, where
                artificial intelligence meets seamless communication.
              </p>
            </div>
            <div className="pr-16 pl-10">
              <h1 className="text-2xl font-bold">AI Chatbot Services</h1>
              <p className="">
                Explore the transformative realm of AI Chatbot Services, where
                artificial intelligence meets seamless communication.
              </p>
            </div>
            <div className="pr-16 pl-10">
              <h1 className="text-2xl font-bold">AI Chatbot Services</h1>
              <p className="">
                Explore the transformative realm of AI Chatbot Services, where
                artificial intelligence meets seamless communication.
              </p>
            </div>
          </div>
          <div className=" grid grid-rows-3">
            <div className="pr-16 pl-10">
              <h1 className="text-2xl font-bold">AI Chatbot Services</h1>
              <p className="">
                Explore the transformative realm of AI Chatbot Services, where
                artificial intelligence meets seamless communication.
              </p>
            </div>
            <div className="pr-16 pl-10">
              <h1 className="text-2xl font-bold">AI Chatbot Services</h1>
              <p className="">
                Explore the transformative realm of AI Chatbot Services, where
                artificial intelligence meets seamless communication.
              </p>
            </div>
            <div className="pr-16 pl-10">
              <h1 className="text-2xl font-bold">AI Chatbot Services</h1>
              <p className="">
                Explore the transformative realm of AI Chatbot Services, where
                artificial intelligence meets seamless communication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
