import { useEffect } from "react";
import { contactEmail } from "@/constants/url";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mx-auto px-4 py-12 w-full md:max-w-[800px]">
      <h1 className="text-3xl font-bold mb-8">
        Flow AI Privacy and Personal Data Protection Policy (GDPR Compliant)
      </h1>

      <p className="mb-6">
        This Privacy and Personal Data Protection Policy ("Policy") outlines how
        your personal data is collected, used, and protected when you use the
        Flow AI mobile application ("App"). We are committed to protecting your
        privacy and processing your data in accordance with applicable data
        protection laws, including GDPR.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          1. Data Collection and Usage
        </h2>
        <ul className="list-disc ml-6">
          <li>
            <b>App usage data:</b> We collect data about how you use the app,
            such as the rap music you generate, your interactions with the AI
            features, and the time you spend on the app.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">2. App Permissions</h2>
        <p className="mb-3">
          Flow AI requires the following permissions to function properly:
        </p>
        <ul className="list-disc ml-6">
          <li>
            <strong>Background Audio:</strong> To continue playing and
            generating music when the app is in the background
          </li>
          <li>
            <strong>Background Fetch:</strong> To download new AI models and
            updates while the app is not active
          </li>
          <li>
            <strong>Remote Notifications:</strong> To send you updates about
            your generated music and app notifications
          </li>
          <li>
            <strong>File Sharing & Documents Access:</strong> To save your
            generated rap music and allow you to export them
          </li>
          <li>
            <strong>Downloads Folder Access:</strong> To save your downloaded
            and generated music files
          </li>
          <li>
            <strong>User Tracking:</strong> To analyze user behavior and improve
            our AI music generation algorithms
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Data</h2>
        <ul className="list-disc ml-6">
          <li>
            To improve our AI music generation algorithms and user experience
          </li>
          <li>
            To analyze how users interact with the music generation features
          </li>
          <li>
            To train and improve our AI models with anonymized usage patterns
          </li>
          <li>To provide personalized music generation suggestions</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          4. Data Storage and Security
        </h2>
        <p>
          Your generated music, user data, and preferences are securely stored
          and encrypted. We implement appropriate technical measures to protect
          your personal data and creative content against unauthorized access.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">5. Data Sharing</h2>
        <p>
          We share anonymized user data with our AI processing services to
          improve our music generation algorithms. No personal information or
          generated content is shared with advertisers or other third parties
          without your consent.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">6. Advertising</h2>
        <p>
          Flow AI works with SKAdNetwork for advertising attribution. Your
          device identifier may be used for analyzing user behavior and
          improving app performance.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">7. Third-Party Services</h2>
        <p className="mb-3">Our app uses these third-party services:</p>
        <ul className="list-disc ml-6">
          <li>Google Play Services</li>
          <li>App Store Services</li>
          <li>Firebase Analytics</li>
          <li>Expo</li>
          <li>Our AI Processing Services</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">8. Data Retention</h2>
        <p>
          We retain your generated music and data only for as long as necessary.
          You can delete your account and associated generated content at any
          time through the app settings.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">9. Your Rights</h2>
        <p>
          You retain full rights to the rap music you generate with our AI. You
          can export, share, or delete your generated content at any time.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          10. Updates to This Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be communicated to users via the app stores (Google Play or App
          Store), where users will be notified of updates to the policy.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
        <p>
          For any privacy-related questions or concerns, please contact us at:{" "}
          <a
            href={`mailto:${contactEmail}`}
            className="text-blue-400 underline"
          >
            {contactEmail}
          </a>
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Additional Information</h2>
        <p className="mb-6">
          Please also review our{" "}
          <Link to="/terms-of-service" className="text-blue-400 underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/eula" className="text-blue-400 underline">
            End User License Agreement (EULA)
          </Link>
          .
        </p>

        <p>
          For more details about our subscription terms, please refer to our{" "}
          <Link to="/terms-of-service" className="text-blue-400 underline">
            Terms of Service
          </Link>
          .
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
