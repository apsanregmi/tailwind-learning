// signup.js
import React from 'react';
import Signup from '@/src/components/forms/SignupForm';
import Layout from '@/src/layout/Layout';
import styles from './Signup.module.css';

const SignupPage = () => {
  return (
    <Layout title="Registration - CloudProAI">
      <div className={styles.signupContainer}>
        <div className={styles.companyLogo}>
          {/* Add your company logo here */}
          <img src="/assets/images/logos/logowhite.png" />
          <h4 className={styles.tagline}>Software Data and AI | Innovative AI Solutions</h4>
          
        </div>
        <div className={styles.signupForm}>
          <Signup />
        </div>
      </div>
    </Layout>
  );
};

export default SignupPage;
