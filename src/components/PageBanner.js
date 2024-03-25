import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import styles from './PageBanner.module.css'; // Import CSS module for PageBanner styles

const PageBanner = ({ pageName, pageTitle, bannerImage }) => {
  const backgroundImage = bannerImage ? `url(${bannerImage})` : "url(/assets/images/background/banner.jpg)";

  return (
    <section
      className={`page-banner-area bgs-cover py-135 rpy-100 ${styles.container}`}
      style={{
        backgroundImage: backgroundImage,
      }}
    >
      <div className="container">
        <Breadcrumbs aria-label="breadcrumb" className="mb-3" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <div className='text-#02AFEF' >
            <Link href="/index" color="#02AFEF">Home /</Link>
          </div>
          <Typography color="#02AFEF" style={{ marginTop: '5px', marginLeft:'-8px'}}>{pageName}</Typography>
        </Breadcrumbs>
        <div className="banner-inner text-white text-left" style={{ marginTop: 'auto' }}>
          <Typography variant="h3" className="page-title">
            {pageTitle ? pageTitle : pageName}
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
