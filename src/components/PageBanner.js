import React from 'react';

const PageBanner = ({ pageName, pageTitle, bannerImage }) => {
  const backgroundImage = bannerImage ? `url(${bannerImage})` : "url(/assets/images/background/banner.jpg)";

  return (
    <section
      className="page-banner-area bgs-cover py-135 rpy-100"
      style={{
        backgroundImage: backgroundImage,
      }}
    >
      <div className="container">
        <div className="banner-inner text-white text-center">
          <h3 className="page-title wow fadeInUp delay-0-2s animated">
            {pageTitle ? pageTitle : pageName}
          </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-5 wow fadeInUp delay-0-4s animated">
              <li className="breadcrumb-item">
                <a href="/index">home</a>
              </li>
              <li className="breadcrumb-item active">{pageName}</li>
              {pageTitle && <li className="breadcrumb-item active">{pageTitle}</li>}
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
