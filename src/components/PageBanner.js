import Link from "next/link";
const PageBanner = ({ pageName, pageTitle }) => {
  return (
    <section
      className="page-banner-area bgs-cover py-135 rpy-100"
      style={{
        backgroundImage: pageName === "Industries" ?
          "url(https://plus.unsplash.com/premium_photo-1661421687248-7bb863c60723?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVjaCUyMGluZHVzdHJ5fGVufDB8fDB8fHww)"
          : "url(/assets/images/background/banner.jpg)"
      }}
    >
      <div className="container">
        <div className="banner-inner text-white text-center">
          <h1 className="page-title wow fadeInUp delay-0-2s animated">
            {pageTitle ? pageTitle : pageName}
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-5 wow fadeInUp delay-0-4s animated">
              <li className="breadcrumb-item">
                <Link legacyBehavior href="/index">
                  <a>home</a>
                </Link>
              </li>
              <li className="breadcrumb-item active">{pageName}</li>
              {pageTitle &&
                <li className="breadcrumb-item active">{pageTitle}</li>
              }
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
};
export default PageBanner;
