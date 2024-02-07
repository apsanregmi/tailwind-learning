import { Tab } from "react-bootstrap";
import Link from "next/link";
import Layout from "@/layout";
import PageBanner from "@/src/components/PageBanner";
import ExploreSection from "@/src/components/Industries/ExploreSection";

export default function MediaEntertainmentGaming() {
  return (
    <Layout>
      
      <PageBanner pageName={"Industries"} pageTitle={"Media, Entertainment & Gaming"}/>
      <section className="price-plan-page-middle bgc-lighter rpt-100 pb-100 rpb-70 rel z-1">
        <div className="price-page-shapes">
          <img
            className="shape two"
            src="https://kashmirage.net/wp-content/uploads/2022/08/Kashmirage-7J-Indias-Media-and-Entertainment-Industry-to-Grow-Spearheaded-by-Online-Gaming.jpg"
            alt="Shape"
          />
        </div>
        <div className="container">
          <Tab.Container defaultActiveKey="mediaEntertainmentGaming">
            <div className="row">
              <div className="col-xl-4 col-lg-8 col-md-10">
                <div className="pricing-tab-wrap mt-75 wow fadeInUp delay-0-2s">
                  <div className="section-title mb-25">
                    <Link href="/services/mediaentertainmentgamingcloud">
                      <span className="sub-title mb-15">Media, Entertainment & Gaming Cloud</span>
                    </Link>
                    <h2>Revolutionizing Media, Entertainment & Gaming with AI Cloud</h2>
                  </div>
                  <p>
                    Enter the future of media, entertainment, and gaming with Cloud Pro AI.
                    Our cloud solutions powered by AI redefine content creation, streaming,
                    interactive experiences, and gaming innovations.
                  </p>
                  <Link href="/services/mediaentertainmentgamingcloud">
                    <span className="sub-title mb-15">
                      Discover More Media, Entertainment & Gaming Cloud Services
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
