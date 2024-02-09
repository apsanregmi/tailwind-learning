// BlogCard.js

import React from 'react';
import PropTypes from 'prop-types';
import styles from './BlogCard.module.css';

const BlogCard = ({ title, publishedDate, categories, tags, content }) => {
  return (
    <div className={styles.blogCard}>
      <h2 className={styles.blogTitle}>{title}</h2>
      <p className={styles.blogDate}>{new Date(publishedDate).toLocaleDateString()}</p>
      {categories && (
        <p className={styles.blogCategories}>Categories: {categories.join(', ')}</p>
      )}
      {tags && (
        <p className={styles.blogTags}>Tags: {tags.join(', ')}</p>
      )}
      <p className={styles.blogExcerpt}>{content}</p>
    </div>
  );
};

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  publishedDate: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
  tags: PropTypes.arrayOf(PropTypes.string),
  content: PropTypes.string.isRequired,
};

export default BlogCard;
