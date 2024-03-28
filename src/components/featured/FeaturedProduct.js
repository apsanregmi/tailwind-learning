import React from 'react';
import { Card } from 'react-bootstrap';
import Link from 'next/link';
import styles from './FeaturedProduct.module.css';

const FeaturedProduct = () => {
  return (
    <Link href="/auth/signup" as="/auth/signup?redirect=https://zales.cloudpro.ai" target='_blank'>
      <Card className={styles.container}>
        <Card.Img variant="top" className={styles.coverImage} src="/assets/images/hero/feat.jpg" alt="Hero" />
        <Card.Body className={styles.overlay}>
          {/* <Card.Title as="h3">Innovate Your Marketing Strategies</Card.Title> */}
        </Card.Body>
      </Card>
    </Link>
  );
};

export default FeaturedProduct;
