import Link from "next/link";
import Search from "../Search";
import HeaderTop from "./HeaderTop";
import Menu from "./Menu";

const DefaultHeader = () => {
  const handleMouseOver = () => {
    console.log('defaultheaderrrr ')
  } 
  return (
    <header className="main-header header-two" onMouseOver={handleMouseOver}>
      <HeaderTop />
      {/*Header-Upper*/}
      <div className="header-upper bg-white">
        <div className="container-fluid clearfix">
          <div className="header-inner rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link legacyBehavior href="/index">
                  <a>
                    <img className="navBarLogo"
                      src="/assets/images/logos/logowhite.png"
                      alt="Logo"
                      title="Logo"
                      height={100}
                      width={100}
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="nav-outer mx-auto clearfix">
              {/* Main Menu */}
              <Menu whiteLogo={true}/>
              {/* Main Menu End*/}
            </div>
            {/* Nav Search */}
            <div className="nav-search ms-xl-auto py-10">
              <Search />
            </div>
            {/* Menu Button */}
            <div className="menu-btns">
              <Link legacyBehavior href="/schedule-appointment">
                <a className="theme-btn">
                Want a Pro? <br/>
 Schedule a Free Consultation  <i className="fas fa-long-arrow-right" />
                </a>
              </Link>
            </div>
            {/* Header Social */}
            <div className="social-style-two">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
              <a href="https://www.linkedin.com/company/cloudproai/">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};
export default DefaultHeader;
