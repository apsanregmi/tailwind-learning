import Layout from '@/src/layout/Layout';
import React from 'react';

const PrivacyPolicy = () => {
  const containerStyle = {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    color: '#333',
    marginBottom:'70px'
  };

  const headingStyle = {
    color: '#007bff',
  };

  const listItemStyle = {
    marginBottom: '10px',
  };

  return (
    <Layout title={"Privacy Policy- CloudProAI"}>
    <div style={containerStyle}>
      <h2 style={headingStyle}>Privacy Policy</h2>
      <p>Last Updated: 2024/02/11</p>

      <p>
        Thank you for visiting CLOUDPROAI. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information. By using our website or services, you agree to the terms outlined in this policy.
      </p>

      <h3 style={headingStyle}>1. Information We Collect:</h3>
      <ul>
        <li style={listItemStyle}>
          <strong>Personal Information:</strong> We may collect information such as your name, email address, and contact details when you use our services.
        </li>
        <li style={listItemStyle}>
          <strong>Usage Information:</strong> We collect data about how you interact with our website, including your IP address, browser type, and pages visited.
        </li>
        <li style={listItemStyle}>
          <strong>Cookies:</strong> We use cookies and similar technologies to enhance your experience and gather additional information.
        </li>
      </ul>

      <h3 style={headingStyle}>2. How We Use Your Information:</h3>
      <ul>
        <li style={listItemStyle}>
          <strong>Providing Services:</strong> We use your personal information to provide and improve our services.
        </li>
        <li style={listItemStyle}>
          <strong>Communication:</strong> We may contact you with updates, newsletters, and marketing materials. You can opt-out at any time.
        </li>
        <li style={listItemStyle}>
          <strong>Analytics:</strong> We analyze user behavior to enhance our website and services.
        </li>
      </ul>

      <h3 style={headingStyle}>3. Data Sharing and Disclosure:</h3>
      <ul>
        <li style={listItemStyle}>
          <strong>Service Providers:</strong> We may share information with third-party service providers who assist us in delivering our services.
        </li>
        <li style={listItemStyle}>
          <strong>Legal Compliance:</strong> We may disclose information when required by law or to protect our rights.
        </li>
      </ul>

      <h3 style={headingStyle}>4. Security:</h3>
      <p>We implement security measures to protect your information from unauthorized access, alteration, disclosure, or destruction.</p>

      <h3 style={headingStyle}>5. Your Choices:</h3>
      <p>You can control and manage your personal information by contacting us. You have the right to access, correct, or delete your data.</p>

      <h3 style={headingStyle}>6. Third-Party Links:</h3>
      <p>Our website may contain links to third-party websites. We are not responsible for their privacy practices or content.</p>

      <h3 style={headingStyle}>7. Changes to This Policy:</h3>
      <p>We may update this Privacy Policy periodically. The latest revision date will be indicated at the top.</p>

      <h3 style={headingStyle}>8. Contact Us:</h3>
      <p>If you have questions or concerns about our Privacy Policy, please contact us at contact@cloudproai.com.</p>

      <p>By using our website or services, you agree to the terms outlined in this Privacy Policy.</p>
    </div>
    </Layout>
  );
}

export default PrivacyPolicy;
