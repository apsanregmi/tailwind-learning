import { Tab } from "react-bootstrap";
import Link from "next/link";
import Layout from "@/layout";
import PageBanner from "@/src/components/PageBanner";
import ExploreSection from "@/src/components/Industries/ExploreSection";

export default function Finance() {
    return (
        <Layout>
        <PageBanner pageName={"Industries"} pageTitle={"Financial"}/>
            <section className="price-plan-page-middle bgc-lighter rpt-100 pb-100 rpb-70 rel z-1">
                <div className="price-page-shapes">
                    <img
                        className="shape two"
                        src="https://dynamics.folio3.com/blog/wp-content/uploads/2021/04/Financial-Management.png"
                        alt="Shape"
                    />
                </div>
                <div className="container">
                    <Tab.Container defaultActiveKey="financeCloud">
                        <div className="row">
                            <div className="col-xl-4 col-lg-8 col-md-10">
                                <div className="pricing-tab-wrap mt-75 wow fadeInUp delay-0-2s">
                                    <div className="section-title mb-25">
                                        <Link href="/services/financecloud">
                                            <span className="sub-title mb-15">Finance Cloud</span>
                                        </Link>
                                        <h2>Revolutionizing Finance with AI Cloud</h2>
                                    </div>
                                    <p>
                                        Enter the future of finance with Cloud Pro AI. Our cloud solutions powered by AI 
                                        redefine financial management, enabling real-time insights, efficient processes, 
                                        and strategic decision-making.
                                    </p>
                                    <Link href="/services/financecloud">
                                        <span className="sub-title mb-15">
                                            Discover More Finance Cloud Services
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
