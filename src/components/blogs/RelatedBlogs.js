// components/RelatedBlogs.js
import React from 'react';
import Link from 'next/link';
import BlogCard from './BlogCard';
import styles from './RelatedBlogs.module.css'; // Import your module CSS

const RelatedBlogs = ({ relatedBlogs }) => {
  return (
    <div className={styles.relatedBlogs}>
      <h2>Related Blogs</h2>
      <div className={styles.blogList}>
        {Array.isArray(relatedBlogs) && relatedBlogs.length > 0 ? (
          relatedBlogs.map((blog) => (
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
                slug={blog.sys.id}
              />
            </Link>
          ))
        ) : (
          <p>No related blogs found.</p>
        )}
      </div>
    </div>
  );
};

export default RelatedBlogs;
