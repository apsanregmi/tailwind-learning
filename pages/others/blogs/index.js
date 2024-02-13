import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import BlogCard from '@/src/components/blogs/BlogCard';
import styles from './Blogs.module.css'; 
import Layout from '@/src/layout/Layout';
import PageBanner from '@/src/components/PageBanner';

const Blogs = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://cdn.contentful.com/spaces/0chql3dwavmp/entries?access_token=Ran701N8ENKFL4oOxD2SpeF6s8NGN9fEQeRGGtWZ6DM'
        );
        setBlogData(response.data.items);
      } catch (error) {
        console.error('Error fetching data from Contentful:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <PageBanner pageName={"Discover the latest Insights"} />
    <div className={styles.blogsContainer}>
      <div className={styles.blogList}>
        {blogData.map((blog) => (
          <Link key={blog.sys.id} href={`/others/blogs/${blog.sys.id}`} passHref>
            <BlogCard
              title={blog.fields.title}
              introduction={blog.fields.introduction}
              author={blog.fields.author}
              publishedDate={blog.sys.createdAt}
              tags={blog.fields.tags || []}
              coverImage={{
                url: blog.fields.coverImage?.fields?.file?.url || '',
                description: blog.fields.coverImage?.fields?.description || '',
              }}
            />
          </Link>
        ))}
      </div>
    </div>
    </Layout>
  );
};

export default Blogs;
