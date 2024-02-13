// Blogs.js

import React, { useState, useEffect } from 'react';

const Blogs = () => {
  const [contentfulData, setContentfulData] = useState([]);

  useEffect(() => {
    const spaceId = 'YOUR_SPACE_ID';
    const deliveryApiKey = 'YOUR_DELIVERY_API_KEY';

    const contentfulEndpoint = `https://cdn.contentful.com/spaces/${spaceId}/entries?access_token=${deliveryApiKey}`;

    fetch(contentfulEndpoint)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
        return response.json();
      })
      .then((parsed) => {
        setContentfulData(parsed.items); // Assuming items is the array of entries in Contentful
      })
      .catch((error) => {
        console.error("Error fetching Contentful data:", error);
      });
  }, []);

  return (
    <div>
      <h2>Blogs</h2>
      <ul>
        {contentfulData.map((blog) => (
          <li key={blog.sys.id}>{blog.fields.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
