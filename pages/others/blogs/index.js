import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogCard from '@/src/components/blogs/BlogCard';
import Layout from '@/src/layout/Layout';
import PageBanner from '@/src/components/PageBanner';
import styles from './Blogs.module.css';

const Blogs = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://cdn.contentful.com/spaces/0chql3dwavmp/entries?access_token=Ran701N8ENKFL4oOxD2SpeF6s8NGN9fEQeRGGtWZ6DM&content_type=blogs'
        );
        setBlogData(response.data.items);
      } catch (error) {
        console.error('Error fetching data from Contentful:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout title="Blogs - CloudProAI">
      <PageBanner pageName="Discover the latest Insights" />
      <section className="py-12 bg-gray-900 sm:py-16 lg:py-20 xl:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className={styles.cardContainer}>
            {blogData.map((blog) => (
              <div key={blog.sys.id} className={styles.card}>
                <a href={`/others/blogs/${blog.sys.id}`} className="block overflow-hidden aspect-w-16 aspect-h-9 rounded-xl">
                  <BlogCard
                    title={blog.fields.title}
                    introduction={blog.fields.introduction}
                    author={blog.fields.author}
                    publishedDate={blog.sys.createdAt}
                    coverImage={{
                      url: blog.fields.coverImage?.fields?.file?.url || '',
                      description: blog.fields.coverImage?.fields?.description || '',
                    }}
                  />
                </a>
              </div>
            ))}
          </div>
         
        </div>
      </section>
    </Layout>
  );
};

export default Blogs;
