// components/caseStudies/CaseStudyCard.js
import React from 'react';
import Link from 'next/link';
import styles from './CaseStudyCard.module.css';

const CaseStudyCard = ({ caseStudy }) => {
  const { title, slug, date, author, introduction, image } = caseStudy.fields;

  // Limit the title to 200 characters using substring
  const truncatedTitle = title.length > 200 ? title.substring(0, 200) + '...' : title;

  return (
    <div className={styles.caseStudyCard}>
      {image && (
        <div className={styles.caseStudyCardImageContainer}>
          <img
            src={image.fields.file.url}
            alt={image.fields.description}
            className={styles.caseStudyCardImage}
          />
        </div>
      )}
      <div className={styles.caseStudyCardContent}>
        <h2 className={styles.caseStudyCardTitle}>{truncatedTitle}</h2>
        <p className={styles.caseStudyCardDateAuthor}>
          Date: {date} ||<br></br>
           Author: Cloud Pro AI
        </p>
        <p className={styles.caseStudyCardIntroduction}>{introduction}</p>
        <Link href={`/others/case-studies/${slug}`}>
          {/* Make sure there is no <a> tag inside Link */}
          <div className={styles.readMoreButton}>Read More</div>
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyCard;
