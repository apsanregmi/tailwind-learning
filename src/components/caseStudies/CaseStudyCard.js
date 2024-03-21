// CaseStudyCard.js

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'; // Import Link from Next.js
import styles from './CaseStudyCard.module.css';

// Function to format date
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', options);
};

const CaseStudyCard = ({ title, date, slug, imageUrl, imageDescription }) => {
  // Format the date
  const formattedDate = formatDate(date);

  return (
    <Link href={`/others/case-studies/${slug}`} passHref>
      <div className={styles.card}>
        {imageUrl && <img className={styles.image} src={imageUrl} alt={imageDescription} />}
        <div className={styles.content}>
          <p className={styles.min}>2 MIN READ</p>
          <div className={styles.ellipse}></div>
          <p className={styles.date}>{formattedDate}</p> {/* Use the formatted date */}
        </div>
        <div className={styles.titleLayout}>
          <p className={styles.title}>{title}</p>
        </div>
      </div>
    </Link>
  );
};

CaseStudyCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  imageDescription: PropTypes.string,
};

export default CaseStudyCard;
