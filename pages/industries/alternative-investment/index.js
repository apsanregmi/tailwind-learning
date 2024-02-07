import { Tab } from "react-bootstrap";
import Link from "next/link";
import Layout from "@/layout";
import PageBanner from "@/src/components/PageBanner";
import ExploreSection from "@/src/components/Industries/ExploreSection";

export default function AlternativeInvestment() {
    return (
        <Layout>
            
      <PageBanner pageName={"Industries"} pageTitle={"Alternative Investment"}/>
            <section className="price-plan-page-middle bgc-lighter rpt-100 pb-100 rpb-70 rel z-1">
                <div className="price-page-shapes">
                    <img
                        className="shape two"
                        src="https://online.hbs.edu/Style%20Library/api/resize.aspx?imgpath=/PublishingImages/Business-professional-evaluating-alternative-investments-in-real-estate.jpg&w=1200&h=630"
                        alt="Shape"
                    />
                </div>
                <div className="container">
                    <Tab.Container defaultActiveKey="alternativeInvestmentCloud">
                        <div className="row">
                            <div className="col-xl-4 col-lg-8 col-md-10">
                                <div className="pricing-tab-wrap mt-75 wow fadeInUp delay-0-2s">
                                    <div className="section-title mb-25">
                                        <Link href="/services/alternativeinvestmentcloud">
                                            <span className="sub-title mb-15">Alternative Investment Cloud</span>
                                        </Link>
                                        <h2>Revolutionizing Investments with Alternative Strategies</h2>
                                    </div>
                                    <p>
                                        Step into the world of alternative investments with Cloud Pro AI. Our cloud-based solutions 
                                        leverage alternative strategies, providing diversified investment opportunities 
                                        across various asset classes beyond traditional stocks and bonds.
                                    </p>
                                    <p>
                                        Explore new avenues for generating returns and mitigating risks in the dynamic landscape 
                                        of alternative investments.
                                    </p>
                                    <Link href="/services/alternativeinvestmentcloud">
                                        <span className="sub-title mb-15">
                                            Discover More Alternative Investment Cloud Services
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
