import Link from "next/link";
// import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";

import { Fragment } from "react";

const Menu = ({ whiteLogo }) => {
  return (
    <Fragment>
      <DeskTopMenu />
      <MobileMenu whiteLogo={whiteLogo} />
    </Fragment>
  );
};

const RightArrow = () => {
  return <span className="fas fa-chevron-right" />
}

const MobileMenu = ({ whiteLogo }) => {
  const [services, setServices] = useState([]);
  const [cloudServices, setCloudServices] = useState([]);
  const [dataEngineeringServices, setDataEngineeringServices] = useState([]);
  const [biDataServices, setBiDataServices] = useState([]);
  const [webAppServices, setWebAppServices] = useState([]);
  const [mobileAppServices, setMobileAppServices] = useState([]);

  const [hoveredService, setHoveredService] = useState(null)

  const fetchAndSet = (url, setFunction) => {
    fetch(window.origin + url)
      .then((response) => response.json())
      .then((data) => {
        setFunction(data);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }

  useEffect(() => {
    fetchAndSet("/api/services/generativeaiandml/services", setServices)
    fetchAndSet("/api/services/cloudengineering/services", setCloudServices)
    fetchAndSet("/api/services/dataengineering/services", setDataEngineeringServices)
    fetchAndSet("/api/services/bianddataanalytics/services", setBiDataServices)
    fetchAndSet("/api/services/webappdevelopment/services", setWebAppServices)
    fetchAndSet("/api/services/mobileappdevelopment/services", setMobileAppServices)
  }, []);

  const [activeMenu, setActiveMenu] = useState(null);
  const [activeMenu2, setActiveMenu2] = useState(null);

  const active = (value) => setActiveMenu(value === activeMenu ? null : value)
  const active2 = (value) => setActiveMenu2(value === activeMenu2 ? null : value)

  const activeSubMenu = (value) =>
    value == activeMenu ? { display: "block" } : { display: "none" };
  const activeSubMenu2 = (value) =>
    value == activeMenu2 ? { display: "block" } : { display: "none" };
  return (
    <nav className="main-menu navbar-expand-lg mobile-menu">
      <Accordion>
        <div className="navbar-header">
          <div className="mobile-logo">
            <Link href="/">
              <img
                src={whiteLogo ? '/assets/images/logos/logowhite.png' : '/assets/images/logos/cloudpro.png'}
                alt="Logo"
                title="Logo"
                style={{ maxHeight: '123px', maxWidth: '123px' }}
              />
            </Link>
          </div>
          <Accordion.Toggle
            as={"button"}
            type="button"
            className="navbar-toggle"
            eventKey="collapse"
            data-bs-target=".navbar-collapse"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse
          eventKey="collapse"
          className="navbar-collapse clearfix"
        >
          <ul className="navigation clearfix">
            <li className="dropdown">
              <a href="/" onClick={() => active("services")}>
                CLOUD PRO AI
              </a>
            </li>

            <li className="dropdown">
              <a href="/services" onClick={() => active("services")}>
                SERVICES
              </a>
              <ul style={activeSubMenu("services")}>
                <li className="dropdown">
                  <Link href="/services/generativeaiandml" onClick={() => active2("servicesGenerative")}>
                    Generative AI And ML
                  </Link>
                  <ul style={activeSubMenu2("servicesGenerative")}>
                    {services.map(service =>
                      <li key={service.slug}><Link href={`/services/generativeaiandml/${service.slug}`}>{service.title}</Link></li>)}

                  </ul>
                  <div className="dropdown-btn" onClick={() => active2("servicesGenerative")}>
                    <span className="fas fa-chevron-down" />
                  </div>
                </li>
                <li className="dropdown">
                  <Link href="/services/cloudengineering" onClick={() => active2("servicesCloud")}>
                    Cloud Engineering </Link>
                  <ul style={activeSubMenu2("servicesCloud")}>
                    {cloudServices.map(service =>
                      <li key={service.slug}><Link href={`/services/cloudengineering/${service.slug}`}>{service.title}</Link></li>)}

                  </ul>
                  <div className="dropdown-btn" onClick={() => active2("servicesCloud")}>
                    <span className="fas fa-chevron-down" />
                  </div>
                </li>
                <li className="dropdown" onClick={() => active2("servicesData")}>
                  <Link href="/services/dataengineering">Data Engineering</Link>
                  <ul style={activeSubMenu2("servicesData")}>
                    {dataEngineeringServices.map(service =>
                      <li key={service.slug}><Link href={`/services/dataengineering/${service.slug}`}>{service.title}</Link></li>)}

                  </ul>
                  <div className="dropdown-btn" onClick={() => active2("servicesData")}>
                    <span className="fas fa-chevron-down" />
                  </div>
                </li>
                <li className="dropdown" onClick={() => active2("servicesBi")}>
                  <Link href="/services/bianddataanalytics">BI And Data Analytics</Link>
                  <ul style={activeSubMenu2("servicesBi")}>
                    {biDataServices.map(service =>
                      <li key={service.slug}><Link href={`/services/bianddataanalytics/${service.slug}`}>{service.title}</Link></li>)}

                  </ul>
                  <div className="dropdown-btn" onClick={() => active2("servicesBi")}>
                    <span className="fas fa-chevron-down" />
                  </div>
                </li>
                <li className="dropdown" onClick={() => active2("servicesWeb")}>
                  <Link href="/services/webappdevelopment">Web App Development </Link>
                  <ul style={activeSubMenu2("servicesWeb")}>
                    {webAppServices.map(service =>
                      <li key={service.slug}><Link href={`/services/webappdevelopment/${service.slug}`}>{service.title}</Link></li>)}

                  </ul>
                  <div className="dropdown-btn" onClick={() => active2("servicesWeb")}>
                    <span className="fas fa-chevron-down" />
                  </div>
                </li>
                <li className="dropdown">
                  <Link href="/services/mobileappdevelopment" onClick={() => active2("servicesMobile")}
                  >Mobile App Development </Link>
                  <ul style={activeSubMenu2("servicesMobile")}>
                    {mobileAppServices.map(service =>
                      <li key={service.slug}><Link href={`/services/mobileappdevelopment/${service.slug}`}>{service.title}</Link></li>)}

                  </ul>
                  <div className="dropdown-btn" onClick={() => active2("servicesMobile")}>
                    <span className="fas fa-chevron-down" />
                  </div>
                </li>
              </ul>
              <div className="dropdown-btn" onClick={() => active("services")}>
                <span className="fas fa-chevron-down" />
              </div>
            </li>
            <li className="dropdown">
              <a href="/industries" onClick={() => active("industries")}>
                INDUSTRIES
              </a>
              <ul style={activeSubMenu("industries")}>

                <li>
                  <Link href="/industries/media-entertainment-gaming">Media, Entertainment And Gaming</Link>
                </li>
                <li>
                  <Link href="/industries/real-estate">Real Estate</Link>
                </li>
                <li>
                  <Link href="/industries/financial">Financial</Link>
                </li>
                <li>
                  <Link href="/industries/healthcare">Healthcare</Link>
                </li>
                <li>
                  <Link href="/industries/education">Education</Link>
                </li>
                <li>
                  <Link href="/industries/manufacturing">Manufacturing</Link>
                </li>
                <li>
                  <Link href="/industries/alternative-investment">Alternative Investment</Link>
                </li>
                <li>
                  <Link href="/industries/insurance">Insurance</Link>
                </li>
                <li>
                  <Link href="/industries/security">Security</Link>
                </li>

              </ul>
              <div
                className="dropdown-btn"
                onClick={() => active("industries")}
              >
                <span className="fas fa-chevron-down" />
              </div>
            </li>
            <li className="dropdown">
              <a href="/contact" onClick={() => active("contact")}>
                CONTACT
              </a>
            </li>

            <li className="dropdown">
              <a href="/about" onClick={() => active("about")}>
                ABOUT
              </a>
              <ul style={activeSubMenu("about")}>
                <li>
                  <Link href="/about">About us</Link>
                </li>
                <li>
                  <Link href="/others/blogs">Blogs</Link>
                </li>

                <li>
                  <Link href="/contact">Contact us</Link>
                </li>


              </ul>
              <div
                className="dropdown-btn"
                onClick={() => active("about")}
              >
                <span className="fas fa-chevron-down" />
              </div>
            </li>
          </ul>
        </Accordion.Collapse>
      </Accordion>
    </nav>
  );
};

const DeskTopMenu = () => {

  const [services, setServices] = useState([]);
  const [cloudServices, setCloudServices] = useState([]);
  const [dataEngineeringServices, setDataEngineeringServices] = useState([]);
  const [biDataServices, setBiDataServices] = useState([]);
  const [webAppServices, setWebAppServices] = useState([]);
  const [mobileAppServices, setMobileAppServices] = useState([]);

  const [hoveredService, setHoveredService] = useState(null)

  const fetchAndSet = (url, setFunction) => {
    fetch(window.origin + url)
      .then((response) => response.json())
      .then((data) => {
        setFunction(data);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }

  useEffect(() => {
    fetchAndSet("/api/services/generativeaiandml/services", setServices)
    fetchAndSet("/api/services/cloudengineering/services", setCloudServices)
    fetchAndSet("/api/services/dataengineering/services", setDataEngineeringServices)
    fetchAndSet("/api/services/bianddataanalytics/services", setBiDataServices)
    fetchAndSet("/api/services/webappdevelopment/services", setWebAppServices)
    fetchAndSet("/api/services/mobileappdevelopment/services", setMobileAppServices)
  }, []);

  const handleMouseOver = (service) => {
    setHoveredService(service)
  }

  const handleMouseOut = () => {
    setHoveredService(null)
  }

  return (
    <nav className="main-menu navbar-expand-lg desktop-menu">
      <div className="navbar-header">
        <div className="mobile-logo">
          <Link href="/">
            <img
              src="assets/images/logos/cloudpro.png"
              alt="Logo"
              title="Logo"
            />
          </Link>
        </div>
        {/* Toggle Button */}
        <button
          type="button"
          className="navbar-toggle"
          data-bs-toggle="collapse"
          data-bs-target=".navbar-collapse"
        >
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
      </div>
      <div className="navbar-collapse collapse clearfix">
        <ul className="navigation clearfix">
          <li>
            <a href="/">CLOUD PRO AI</a>
          </li>
          <li className="dropdown">
            <a href="/services">SERVICES</a>
            <ul>
              <li className="dropdown2" onMouseOver={() => handleMouseOver('generative')} onMouseOut={handleMouseOut}>
                <Link href="/services/generativeaiandml">
                  Generative AI And ML
                </Link>
                <ul>
                  {services.map(service =>
                    <li key={service.slug}><Link href={`/services/generativeaiandml/${service.slug}`}>{service.title}</Link></li>)}
                </ul>
                {hoveredService === "generative" && <RightArrow />}
              </li>
              <li className="dropdown2" onMouseOver={() => handleMouseOver('cloud')} onMouseOut={handleMouseOut}>
                <Link href="/services/cloudengineering">Cloud Engineering </Link>
                <ul>
                  {cloudServices.map(service =>
                    <li key={service.slug}><Link href={`/services/cloudengineering/${service.slug}`}>{service.title}</Link></li>)}
                </ul>
                {hoveredService === "cloud" && <RightArrow />}
              </li>
              <li className="dropdown2" onMouseOver={() => handleMouseOver('data')} onMouseOut={handleMouseOut}>
                <Link href="/services/dataengineering">Data Engineering</Link>
                <ul>
                  {dataEngineeringServices.map(service =>
                    <li key={service.slug}><Link href={`/services/dataengineering/${service.slug}`}>{service.title}</Link></li>)}
                </ul>
                {hoveredService === "data" && <RightArrow />}
              </li>
              <li className="dropdown2" onMouseOver={() => handleMouseOver('biData')} onMouseOut={handleMouseOut}>
                <Link href="/services/bianddataanalytics">BI And Data Analytics</Link>
                <ul>
                  {biDataServices.map(service =>
                    <li key={service.slug}><Link href={`/services/bianddataanalytics/${service.slug}`}>{service.title}</Link></li>)}
                </ul>
                {hoveredService === "biData" && <RightArrow />}
              </li>
              <li className="dropdown2" onMouseOver={() => handleMouseOver('webApp')} onMouseOut={handleMouseOut}>
                <Link href="/services/webappdevelopment">WebApp Development </Link>
                <ul>
                  {webAppServices.map(service =>
                    <li key={service.slug}><Link href={`/services/webappdevelopment/${service.slug}`}>{service.title}</Link></li>)}
                </ul>
                {hoveredService === "webApp" && <RightArrow />}
              </li>
              <li className="dropdown2" onMouseOver={() => handleMouseOver('mobileapp')} onMouseOut={handleMouseOut}>
                <Link href="/services/mobileappdevelopment">
                  Mobile App Development
                </Link>
                <ul>
                  {mobileAppServices.map(service =>
                    <li key={service.slug}><Link href={`/services/mobileappdevelopment/${service.slug}`}>{service.title}</Link></li>)}
                </ul>
                {hoveredService === "mobileapp" && <RightArrow />}
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div>
          </li>
          <li className="dropdown">
            <a href="/industries">INDUSTRIES</a>
            <ul>

              <li>
                <Link href="/industries/media-entertainment-gaming">Media, Entertainment And Gaming</Link>
              </li>
              <li>
                <Link href="/industries/real-estate">Real Estate</Link>
              </li>
              <li>
                <Link href="/industries/alternative-investment">Alternative Investment</Link>

              </li>
              <li>
                <Link href="/industries/financial">Financial</Link>
              </li>
              <li>
                <Link href="/industries/healthcare">Healthcare</Link>
              </li>
              <li>
                <Link href="/industries/education">Education</Link>
              </li>
              <li>
                <Link href="/industries/manufacturing">Manufacturing</Link>
              </li>
              <li>
                <Link href="/industries/insurance">Insurance</Link>
              </li>
              <li>
                <Link href="/industries/security">Security</Link>
              </li>

            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div>
          </li>
          <li className="dropdown">
            <a href="/contact">CONTACT</a>


          </li>
          <li className="dropdown">
            <a href="/about">ABOUT US</a>
            <ul>
              <li>
                <Link href="/about">ABOUT US</Link>
              </li>
              <li>
                  <Link href="/others/blogs">BLOGS</Link>
                </li>

              <li>
                <Link href="/contact">CONTACT US</Link>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Menu;
