import Link from "next/link";
import { Fragment } from "react";
import HiddenSidebar from "../HiddenSidebar";
import Search from "../Search";
import HeaderTop from "./HeaderTop";
import Menu from "./Menu";

const Header4 = () => {
  const handleMouseOver = () => {
    console.log('defaultheader44')
  } 
  return (
    <Fragment>
      <header className="main-header header-four" onMouseOver={handleMouseOver}>
        <HeaderTop />
        {/*Header-Upper*/}
        <div className="header-upper bg-white">
          <div className="container clearfix">
            <div className="header-inner rel d-flex align-items-center">
              <div className="logo-outer">
                <div className="logo">
                  <Link legacyBehavior href="/index">
                    <a>
                      <img className="navBarLogo"
                        src="/assets/images/logos/logowhite.png"
                        alt="Logo"
                        title="Logo"
                        height={75}
                      width={75}
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="nav-outer ms-lg-auto clearfix">
                {/* Main Menu */}
                <Menu />
                {/* Main Menu End*/}
              </div>
              {/* Nav Search */}
              <div className="nav-search py-10">
                <Search />
              </div>
              {/* Menu Button */}
              <div className="menu-btns">
                {/* menu sidbar */}
                <div className="menu-sidebar">
                  <button>
                    <span className="toggle-btn" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End Header Upper*/}
      </header>
      <HiddenSidebar />
    </Fragment>
  );
};
export default Header4;
