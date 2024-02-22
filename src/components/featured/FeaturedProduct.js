import React from 'react';
import Link from 'next/link';
import styles from './FeaturedProduct.module.css';

const FeaturedProduct = () => {
  return (
    <Link href="/signup" as="/signup?redirect=https://zales.cloudpro.ai" target='_blank'>
      <div className={styles.container}>
        <div className={styles.overlay}>
          <h3>Innovate Your Marketing Strategies</h3>
          <h3 className={styles.secondaryText}>Free Trial For MR.A</h3>
        </div>
        <img className={styles.coverImage} src="/assets/images/hero/feat.jpg" alt="Hero" />
      </div>
    </Link>
  );
};

export default FeaturedProduct;