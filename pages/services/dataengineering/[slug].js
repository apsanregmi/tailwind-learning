import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/src/layout/Layout';
import PageBanner from '@/src/components/PageBanner';
import Link from 'next/link';

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [service, setService] = useState(null);

  useEffect(() => {
    if (slug) {
      fetch(window.origin +`/api/services/dataengineering/getservice?slug=${slug}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((parsed) => {
          setService(parsed);
        })
        .catch((error) => {
          console.error('Error fetching service:', error);
        });
    }
  }, [slug]);

  if (!service) {
    return <p>Loading...</p>;
  }

  return (
    <div>
       <Layout>
      <PageBanner pageName={service.title} />
      <section className="project-details-area pt-130 rpt-100 pb-60 rpb-30">
        <div className="container">
          <div className="project-details-content">
            <div className="section-title mb-25">
              <h2>{service.title}</h2>
            </div>
            <p>
              {service.serviceDescription}
            </p>
            <div className="image my-45">
              <img
                src="/assets/images/projects/project-details.jpg"
                alt="Project Details"
              />
            </div>
            
            {/* <div className="section-title mt-60 mb-25">
              <h3>{service.content.title1}</h3>
            </div>
            <p>
             {service.content.description1}
            </p> */}
            <div className="row mt-50">
              <div className="col-xl-3 col-lg-4 mb-30">
                <img
                  src="/assets/images/projects/project-middle1.jpg"
                  alt="Project"
                />
              </div>
              <div className="col-xl-3 col-lg-4 mb-30">
                <img
                  src="/assets/images/projects/project-middle2.jpg"
                  alt="Project"
                />
              </div>
              <div className="col-xl-3 col-lg-4 mb-30">
                <img
                  src="/assets/images/projects/project-middle3.jpg"
                  alt="Project"
                />
              </div>
              <div className="col-xl-3 col-lg-4 mb-30">
                <img
                  src="/assets/images/projects/project-middle4.jpg"
                  alt="Project"
                />
              </div>
            </div>
            
            <div className="section-title mt-60 mb-25">
              <h3>Key Features</h3>
            </div>
            <p>
             {service.keyFeatures}
            </p>

            
            <div className="section-title mt-60 mb-25">
              <h3>{service.caseStudies.title1}</h3>
            </div>
            <p>
             {service.caseStudies.description}
            </p>
            
            <div className="section-title mt-60 mb-25">
              <h3>{service.caseStudies.title2}</h3>
            </div>
            <p>
             {service.caseStudies.description}
            </p>
            
            
          </div>
        </div>
      </section>
      {/* Project Details Area end */}
      {/* Next Prev Project start */}
      
    </Layout>
      {/* <h1>{service.title}</h1>
      <p>{service.description}</p> */}
    </div>
  );
};

export default Slug;
