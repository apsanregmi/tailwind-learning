import { Tab } from "react-bootstrap";
import Link from "next/link";
import Layout from "@/layout";
import PageBanner from "@/src/components/PageBanner";
import ExploreSection from "@/src/components/Industries/ExploreSection";

export default function Manufacturing() {
    return (
        <Layout>
            <PageBanner pageName={"Industries"} pageTitle={"Manufacturing"} />
            <section className="price-plan-page-middle bgc-lighter rpt-100 pb-100 rpb-70 rel z-1 manufacturing">
                <div className="price-page-shapes">
                    <img
                        className="shape two"
                        src="https://www.twi-global.com/CachedImage.axd?ImageName=What-is-Manufacturing.jpg&ImageWidth=784&ImageHeight=379&ImageVersionID=104810&ImageModified=20210302095954"
                        alt="Shape"
                    />
                </div>
                <div className="container">
                    <Tab.Container defaultActiveKey="manufacturingCloud">
                        <div className="row">
                            <div className="col-xl-4 col-lg-8 col-md-10">
                                <div className="pricing-tab-wrap mt-75 wow fadeInUp delay-0-2s">
                                    <div className="section-title mb-25">
                                        <Link href="/services/manufacturingcloud">
                                            <span className="sub-title mb-15">Manufacturing Cloud</span>
                                        </Link>
                                        <h2>Transforming Manufacturing with AI</h2>
                                    </div>
                                    <p>
                                        Experience the future of manufacturing with Cloud Pro AI. Our AI-driven
                                        cloud solutions optimize processes, enhance productivity, and drive innovation
                                        across manufacturing operations.
                                    </p>
                                    <Link href="/services/manufacturingcloud">
                                        <span className="sub-title mb-15">
                                            Explore More Manufacturing Cloud Services
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
