import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [service, setService] = useState(null);

  useEffect(() => {
    if (slug) {
      fetch(window.origin+`/api/services/cloudengineering/getservice?slug=${slug}`)
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
      <h1>{service.title}</h1>
      <p>{service.description}</p>
    </div>
  );
};

export default Slug;