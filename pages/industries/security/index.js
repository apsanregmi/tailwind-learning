import { Tab } from "react-bootstrap";
import Link from "next/link";
import Layout from "@/layout";
import PageBanner from "@/src/components/PageBanner";
import ExploreSection from "@/src/components/Industries/ExploreSection";

export default function Security() {
    return (
        <Layout>

            <PageBanner pageName={"Industries"} pageTitle={"Security"} />
            <section className="price-plan-page-middle bgc-lighter rpt-100 pb-100 rpb-70 rel z-1">
                <div className="price-page-shapes">
                    <img
                        className="shape two"
                        src="https://www.hurix.com/wp-content/uploads/2022/01/Cyber-security.jpg"
                        alt="Shape"
                    />
                </div>
                <div className="container">
                    <Tab.Container defaultActiveKey="securityCloud">
                        <div className="row">
                            <div className="col-xl-4 col-lg-8 col-md-10">
                                <div className="pricing-tab-wrap mt-75 wow fadeInUp delay-0-2s">
                                    <div className="section-title mb-25">
                                        <Link href="/services/securitycloud">
                                            <span className="sub-title mb-15">Security Cloud</span>
                                        </Link>
                                        <h2>Elevating Security with Cloud Solutions</h2>
                                    </div>
                                    <p>
                                        Embrace robust security measures with Cloud Pro AI. Our cloud security solutions
                                        utilize cutting-edge technologies to safeguard your data, infrastructure, and
                                        applications from cyber threats and vulnerabilities.
                                    </p>
                                    <p>
                                        Explore comprehensive security strategies to protect your digital assets in
                                        an ever-evolving threat landscape.
                                    </p>
                                    <Link href="/services/securitycloud">
                                        <span className="sub-title mb-15">
                                            Discover More Security Cloud Services
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
