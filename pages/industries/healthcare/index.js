import { Tab } from "react-bootstrap";
import Link from "next/link";
import Layout from "@/layout";
import PageBanner from "@/src/components/PageBanner";
import ExploreSection from "@/src/components/Industries/ExploreSection";

export default function Healthcare() {
    return (
        <Layout>
        <PageBanner pageName={"Industries"} pageTitle={"Healthcare"}/>
            <section className="price-plan-page-middle bgc-lighter rpt-100 pb-100 rpb-70 rel z-1">
                <div className="price-page-shapes">
                    <img
                        className="shape two"
                        src="https://imageio.forbes.com/specials-images/imageserve/651bbeb1c78cc403f92a6abd/The-10-Biggest-Trends-Revolutionizing-Healthcare-In-2024/0x0.jpg?crop=2500,1405,x0,y0,safe&height=399&width=711&fit=bounds"
                        alt="Shape"
                    />
                </div>
                <div className="container">
                    <Tab.Container defaultActiveKey="dataEngineering">
                        <div className="row">
                            <div className="col-xl-4 col-lg-8 col-md-10">
                                <div className="pricing-tab-wrap mt-75 wow fadeInUp delay-0-2s">
                                    <div className="section-title mb-25">
                                        <Link href="">
                                            <span className="sub-title mb-15">Healthcare</span>
                                        </Link>
                                        <h2>Transforming Healthcare through Data</h2>
                                    </div>
                                    <p>
                                        Embrace the power of data in healthcare. Our data engineering solutions 
                                        enable healthcare providers to derive meaningful insights, optimize operations, 
                                        and deliver improved patient care.
                                    </p>
                                    <Link href="/services/dataengineering">
                                        <span className="sub-title mb-15">
                                            Discover More Data Engineering Services
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
