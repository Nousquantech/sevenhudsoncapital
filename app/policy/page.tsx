import React from "react";
import { Container } from "@/components/index";

const policePage = () => {
  return (
    <Container bgColor="bg-bg-bage">
      <h1 className="text-3xl font-bold text-navi py-12">Privacy Notice</h1>

      <section>
        <h2 className="text-2xl font-bold text-navi py-3">1. Introduction</h2>
        <p>
          <strong>Seven Hudson Capital</strong> ("we", "us", "our") located at{" "}
          <em>2351 81st Street, Brooklyn, NY 11214</em> is committed to
          protecting your personal data. This Notice explains how we collect,
          use, share, and safeguard your information when you interact with us
          or use our services.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-navi py-3">
          2. Data We Collect
        </h2>
        <ul>
          <li>
            <strong>Identity:</strong> Name, username
          </li>
          <li>
            <strong>Contact:</strong> Address, email, phone number
          </li>
          <li>
            <strong>Financial:</strong> Bank account and payment card details
          </li>
          <li>
            <strong>Transaction:</strong> Records of payments and services
            purchased
          </li>
          <li>
            <strong>Technical:</strong> IP address, browser type, device info
          </li>
          <li>
            <strong>Profile:</strong> Account credentials, preferences, feedback
          </li>
          <li>
            <strong>Usage:</strong> How you interact with our site and services
          </li>
          <li>
            <strong>Marketing & Communications:</strong> Subscription and
            communication preferences
          </li>
        </ul>
        <p>
          We do <strong>not</strong> collect sensitive data such as race,
          religion, health, or biometric information.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-navi py-3">
          3. How We Use Your Personal Data
        </h2>
        <p>We use your data under four lawful bases:</p>
        <ul>
          <li>
            <strong>Contract:</strong> To provide services you request.
          </li>
          <li>
            <strong>Legitimate Interest:</strong> For business improvement,
            marketing, and security.
          </li>
          <li>
            <strong>Legal Obligation:</strong> To comply with laws.
          </li>
          <li>
            <strong>Consent:</strong> When you expressly agree (e.g.,
            marketing).
          </li>
        </ul>
        <p>
          You may withdraw consent at any time by contacting us or using
          unsubscribe links.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-navi py-3">
          4. Sharing Your Personal Data
        </h2>
        <p>We may share data with:</p>
        <ul>
          <li>Internal affiliates or departments</li>
          <li>Service providers (IT, hosting, payment, logistics)</li>
          <li>Professional advisors (legal, accounting, insurance)</li>
          <li>Regulatory authorities or law enforcement when required</li>
          <li>Potential business acquirers in a merger or sale</li>
          <li>With your explicit consent</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-navi py-3">
          5. International Transfers
        </h2>
        <p>
          Some data may be transferred outside your country. We apply safeguards
          to protect your personal information.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-navi py-3">6. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to
          secure personal data and manage breaches according to legal
          requirements.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-navi py-3">7. Data Retention</h2>
        <p>
          We retain personal data only as long as necessary to fulfill our
          services, legal, and regulatory obligations, after which it is deleted
          or anonymized.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-navi py-3">8. Your Rights</h2>
        <p>You may exercise the following rights:</p>
        <ul>
          <li>Access your personal data</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion (“right to be forgotten”)</li>
          <li>Restrict or object to processing</li>
          <li>Obtain data portability</li>
          <li>Withdraw consent at any time</li>
        </ul>
        <p>
          Contact us at
          <a href="mailto:privacy@sevenhudson.com">privacy@sevenhudson.com</a>
          to exercise your rights. We aim to respond within 30 days.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-navi py-3">
          9. Contact Information
        </h2>
        <p>
          <strong>Seven Hudson Capital</strong>
          <br />
          2351 81st Street
          <br />
          Brooklyn, NY 11214
          <br />
          Email:
          <a href="mailto:privacy@sevenhudson.com">
            privacy@sevenhudsoncapital.com
          </a>
        </p>
      </section>

      <p className="text-base pb-12">
        <strong>Effective Date:</strong> 6/26/2025
      </p>
    </Container>
  );
};

export default policePage;
