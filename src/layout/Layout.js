import { Fragment, useEffect } from "react";
import ImageView from "../components/ImageView";
import VideoPopup from "../components/VideoPopup";
import { animation } from "../utils";
import Footer from "./footer/Index";
import Header from "./header/Index";
import ScrollTopButton from "./ScrollTopButton";
import Head from "next/head";
const Layout = ({ children, header,showCtaSection,title }) => {
  useEffect(() => {
    animation();
  }, []);
  const pageTitle = title || "Software, Data and AI | Innovative Cloud Solutions";

  return (
    <Fragment>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <VideoPopup />
      <ImageView />
      <div className="page-wrapper">
        {/* Preloader */}
        {/* <Preloader /> */}
        <Header header={header} />
        {children}
        {/* footer area start */}
        <Footer showCtaSection={showCtaSection} />
        {/* footer area end */}
        {/* Scroll Top Button */}
        <ScrollTopButton />
      </div>
    </Fragment>
  );
};
export default Layout;
