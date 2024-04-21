import Layout from "@/layout";
import IndustriesImage from "@/src/components/Industries/IndustriesImage";
import PageBannerMain from "@/src/components/PageBannerMain";
import Logolist from "@/src/components/others/Logolist";
import ServiceCard from "@/src/components/services/ServiceCard";
import ServiceCardLarge from "@/src/components/services/ServiceCardLarge";

const Index = () => {
  return (
    <Layout header={8}>
      <PageBannerMain
        title="Data, AI and Software Cloud Services Consultant"
        subtitle="We're Gen AI-Ready and Eager to Collaborate. Let's Assess Your Business and Infrastructure Readiness for the Ultimate Technological Leap."
      />
      <container className="bg-white mt-8">
          <Logolist />
        </container>
        <div className=" container">
          <div className="weProvide mt-4 mb-3 md:w-1/2 lg:w-1/3" >
            <p className="ml-6" >WHAT WE DO</p>
            <h1 className="text-bold  text-3xl m-4 md:text-3xl xxl:text-5xl">
              We Provide Best Cloud Services
            </h1>
          </div>
        </div>
        <div className="serviceContainer grid lg:grid-rows-2 gap-4">
          <div className="container grid lg:grid-cols-12 gap-5">
            <div className="left lg:col-span-4">
              <ServiceCard
                title="Cloud Engineering Services"
                description="Cloud engineering services encompass the strategic planning, implementation, and management"
                position="left-96"
                image="/assets/cloudlogo.svg"
                link="/services/cloudengineering"
              ></ServiceCard>
            </div>
            <div className="right lg:col-span-8 ">
              <ServiceCardLarge
                title="Generative AI And ML"
                description="Unlock the Power of Intelligent Creation with CloudPro AI In the era of data-driven innovation, Generative Artificial Intelligence (AI)"
                position="left-96"
                image="/assets/group2493.svg"
                link="/services/generativeaiandml"
              ></ServiceCardLarge>
            </div>
          </div>

          <div className="  2ndrow-3column container grid lg:grid-cols-12 gap-5">
            <div className="left lg:col-span-4">
              <ServiceCard
                title="Data Engineering"
                description="Data engineering services encompass the design, development, and management of robust data architecture"
                position="left-96"
                image="/assets/group2494.svg"
              ></ServiceCard>
            </div>
            <div className="right lg:col-span-4 ">
              <ServiceCard
                title="Generative AI And ML"
                description="Unlock the Power of Intelligent Creation with CloudPro AI In the era of data-driven innovation, Generative Artificial Intelligence (AI)"
                position="left-96"
                image="/assets/group2495.svg"
              ></ServiceCard>
            </div>
            <div className="right lg:col-span-4 ">
              <ServiceCard
                title="Generative AI And ML"
                description="Unlock the Power of Intelligent Creation with CloudPro AI In the era of data-driven innovation, Generative Artificial Intelligence (AI)"
                position="left-96"
                image="/assets/group102.svg"
              ></ServiceCard>
            </div>
          </div>
        </div>
        <div className="industries ">
          <IndustriesImage/>

        </div>
    </Layout>
  );
};
export default Index;
