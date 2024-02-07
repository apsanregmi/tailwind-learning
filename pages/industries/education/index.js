import { Tab } from "react-bootstrap";
import Link from "next/link";
import Layout from "@/layout";
import PageBanner from "@/src/components/PageBanner";
import ExploreSection from "@/src/components/Industries/ExploreSection";

export default function Education() {
    return (
        <Layout>
        <PageBanner pageName={"Industries"} pageTitle={"Education"}/>
            <section className="price-plan-page-middle bgc-lighter rpt-100 pb-100 rpb-70 rel z-1">
                <div className="price-page-shapes">
                    <img
                        className="shape two"
                        src="https://img.freepik.com/free-photo/education-day-arrangement-table-with-copy-space_23-2148721266.jpg"
                        alt="Shape"
                    />
                </div>
                <div className="container">
                    <Tab.Container defaultActiveKey="educationCloud">
                        <div className="row">
                            <div className="col-xl-4 col-lg-8 col-md-10">
                                <div className="pricing-tab-wrap mt-75 wow fadeInUp delay-0-2s">
                                    <div className="section-title mb-25">
                                        <Link href="">
                                            <span className="sub-title mb-15">Education Cloud</span>
                                        </Link>
                                        <h2>Empowering Education with Cloud AI</h2>
                                    </div>
                                    <p>
                                        Cloud Pro AI offers cutting-edge cloud solutions tailored for education. 
                                        Our AI-powered platforms and tools foster collaborative learning environments, 
                                        enabling educational institutions to innovate and excel.
                                    </p>
                                    <Link href="">
                                        <span className="sub-title mb-15">
                                            Explore More Education Cloud Services
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
