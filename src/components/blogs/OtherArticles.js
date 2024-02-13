// components/OtherArticles.js
import React from 'react';
import Link from 'next/link';
import BlogCard from './BlogCard';

const OtherArticles = ({ otherArticles }) => {
  return (
    <div className={styles.otherArticles}>
      <h2>Other Articles</h2>
      <div className={styles.blogList}>
        {otherArticles.map((article) => (
          <Link key={article.sys.id} href={`/others/blogs/${article.sys.id}`} passHref>
            <BlogCard
              title={article.fields.title}
              introduction={article.fields.introduction}
              author={article.fields.author}
              publishedDate={article.sys.createdAt}
              tags={article.fields.tags || []}
              coverImage={{
                url: article.fields.coverImage?.fields?.file?.url || '',
                description: article.fields.coverImage?.fields?.description || '',
              }}
              slug={article.sys.id}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OtherArticles;
