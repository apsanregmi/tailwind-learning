import { Tab } from "react-bootstrap";
import Link from "next/link";
import Layout from "@/layout";
import PageBanner from "@/src/components/PageBanner";
import ExploreSection from "@/src/components/Industries/ExploreSection";

export default function RealEstate() {
    return (
        <Layout>
            
      <PageBanner pageName={"Industries"} pageTitle={"Real Estate"}/>
            <section className="price-plan-page-middle bgc-lighter rpt-100 pb-100 rpb-70 rel z-1">
                <div className="price-page-shapes">
                    <img
                        className="shape two"
                        src="https://ellingtonproperties.ae/wp-content/uploads/how-does-investing-in-real-estate-work-1301x700.jpg"
                        alt="Shape"
                    />
                </div>
                <div className="container">
                    <Tab.Container defaultActiveKey="realEstateCloud">
                        <div className="row">
                            <div className="col-xl-4 col-lg-8 col-md-10">
                                <div className="pricing-tab-wrap mt-75 wow fadeInUp delay-0-2s">
                                    <div className="section-title mb-25">
                                        <Link href="/services/realestatecloud">
                                            <span className="sub-title mb-15">Real Estate Cloud</span>
                                        </Link>
                                        <h2>Revolutionizing Real Estate with AI Cloud</h2>
                                    </div>
                                    <p>
                                        Enter the future of real estate with Cloud Pro AI. Our cloud solutions powered by AI 
                                        redefine property management, investment analytics, market insights, and smart decision-making.
                                    </p>
                                    <p>
                                        Explore a new era of real estate technology that empowers investors, developers, and agents
                                        to innovate and succeed in a dynamic market.
                                    </p>
                                    <Link href="/services/realestatecloud">
                                        <span className="sub-title mb-15">
                                            Discover More Real Estate Cloud Services
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Tab.Container>
                </div>
            </section>
            <ExploreSection/>
        </Layout>
    );
}
