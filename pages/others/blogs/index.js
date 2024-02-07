// Blogs.js
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "@/layout";
import styles from "./Blogs.module.css";

const Blogs = () => {
  const [blogsData, setBlogsData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch(window.origin + "/api/blogs/blogs")
      .then((response) => response.json())
      .then((parsed) => {
        setBlogsData(parsed);
      })
      .catch((error) => {
        console.error("Error fetching Blogs:", error);
      });
  }, []);

  const handleBlogClick = (slug) => {
    router.push(`/others/blogs/[slug]`, `/others/blogs/${slug}`);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h5 className={styles.blogsHeading}>Blogposts</h5>
        <div className={styles.blogsList}>
          {Array.isArray(blogsData) && blogsData.length > 0 ? (
            blogsData.map((blog) => (
              <div
                key={blog.slug}
                className={styles.blogCard}
                onClick={() => handleBlogClick(blog.slug)}
              >
                {blog.coverImage && (
                  <div className={styles.coverImage}>
                    <img src={blog.coverImage} alt={blog.title} />
                  </div>
                )}
                <div className={styles.blogDetails}>
                  <h3 className={styles.blogTitle}>{blog.title}</h3>
                  <p className={styles.blogMeta}>
                    By {blog.author} | {blog.date}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>No blog data available.</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Blogs;
