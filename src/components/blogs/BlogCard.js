import React from 'react';
import PropTypes from 'prop-types';
import { format, isValid } from 'date-fns';
import styles from './BlogCard.module.css';

const BlogCard = ({ title, introduction, author, publishedDate, coverImage }) => {
  const formattedDate = isValid(new Date(publishedDate))
    ? format(new Date(publishedDate), 'MMMM d, yyyy')
    : '';

  // Slice the description to 200 words
  const slicedDescription =
    introduction && typeof introduction === 'string'
      ? introduction.split(' ').slice(0, 200).join(' ')
      : '';

  const backgroundImageStyle = coverImage
    ? { backgroundImage: `url(${coverImage.url})` }
    : null;

  return (
    <div className={styles.blogCard} style={backgroundImageStyle}>
      <div className={styles.content}>
        <h3 className={styles.blogTitle}>{title}</h3>
        <p className={styles.description}>{slicedDescription}...</p>
        <div className={styles.metadata}>
          <p className={styles.author}>Author: {author}</p>
          {formattedDate && (
            <time className={styles.publishedDate}>Published Date: {formattedDate}</time>
          )}
        </div>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  introduction: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  publishedDate: PropTypes.string.isRequired,
  coverImage: PropTypes.shape({
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

export default BlogCard;
