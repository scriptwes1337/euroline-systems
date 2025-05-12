import React from 'react';
import { Nav } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer';

const PrivacyPolicy = () => {
  return (
    <>
    <Nav />
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 24 }}>
      <h1>Privacy Policy</h1>
      <p>
        This Privacy Policy sets out how we collect, use, disclose, and protect your personal data in accordance with the Personal Data Protection Act 2012 (PDPA) of Singapore.
      </p>

      <h2>1. Collection of Personal Data</h2>
      <p>
        We may collect personal data from you when you use our website, contact us, or interact with our services. Personal data may include your name, contact details, email address, and any other information you provide to us.
      </p>

      <h2>2. Use of Personal Data</h2>
      <p>
        We may use your personal data for the following purposes:
      </p>
      <ul>
        <li>To provide and improve our services</li>
        <li>To respond to your enquiries and requests</li>
        <li>To send you updates and marketing materials (with your consent)</li>
        <li>To comply with legal and regulatory requirements</li>
      </ul>

      <h2>3. Disclosure of Personal Data</h2>
      <p>
        We may disclose your personal data to third parties where necessary for the above purposes, or as required by law. We will take reasonable steps to ensure that your data is protected.
      </p>

      <h2>4. Protection of Personal Data</h2>
      <p>
        We implement appropriate security measures to safeguard your personal data against unauthorised access, collection, use, disclosure, or similar risks.
      </p>

      <h2>5. Retention of Personal Data</h2>
      <p>
        We will retain your personal data only as long as necessary for the purposes for which it was collected, or as required by law.
      </p>

      <h2>6. Access and Correction</h2>
      <p>
        You may request access to or correction of your personal data by contacting us. We may require proof of identity before fulfilling such requests.
      </p>

      <h2>7. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy or your personal data, please contact us at: <a href="mailto:eurolinesystems@eurolinesystems.com">eurolinesystems@eurolinesystems.com</a>
      </p>

      <p>
        We may update this Privacy Policy from time to time. Please review it periodically for any changes.
      </p>
    </div>
    <Footer />
    </>  );
};

export default PrivacyPolicy;