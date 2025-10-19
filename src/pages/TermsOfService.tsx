import { useEffect } from "react";
import { contactEmail } from "@/constants/url";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mx-auto px-4 py-12 w-full md:max-w-[800px]">
      <h1 className="text-3xl font-bold mb-8">Flow AI Terms of Service</h1>

      <p className="mb-6">
        Welcome to Flow AI. By downloading, installing, or using our AI-powered
        rap music generation application, you agree to be bound by these Terms
        of Service ("Terms"). Please read these Terms carefully before using the
        App.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p>
          By using Flow AI, you acknowledge that you have read, understood, and
          agree to be bound by these Terms. If you do not agree to these Terms,
          please do not use the App.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          2. License and App Usage
        </h2>
        <p className="mb-3">
          We grant you a limited, non-exclusive, non-transferable license to use
          Flow AI for your personal use. You may use the generated content for
          both personal and commercial purposes.
        </p>
        <ul className="list-disc ml-6">
          <li>
            You may not modify, distribute, or reverse engineer the App or its
            AI models
          </li>
          <li>
            You may not use the App to generate harmful or illegal content
          </li>
          <li>
            You may not attempt to manipulate or bypass the AI generation
            systems
          </li>
          <li>You may not access the App's services through automated means</li>
          <li>
            You may not share, sell, or transfer your credits to other users
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          3. User Content and Behavior
        </h2>
        <p className="mb-3">When using Flow AI, you agree to:</p>
        <ul className="list-disc ml-6">
          <li>Use the AI generation features responsibly</li>
          <li>Not generate content that infringes on others' rights</li>
          <li>
            Maintain ownership and responsibility for your generated content
          </li>
          <li>
            Not use the app to create harmful, offensive, or illegal content
          </li>
          <li>
            Not share or distribute AI-generated content in ways that violate
            these terms
          </li>
          <li>
            Use your credits appropriately and within the specified guidelines
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">4. Credit System</h2>
        <p className="mb-3">Flow AI operates on a credit-based system:</p>
        <ul className="list-disc ml-6">
          <li>Credits are required to generate rap music using our AI</li>
          <li>Each generation consumes a specified number of credits</li>
          <li>Credits are available through subscription plans</li>
          <li>Unused credits expire at the end of your billing period</li>
          <li>
            Credits cannot be refunded, transferred, or exchanged for cash
          </li>
          <li>
            The cost of credits and generation may be adjusted with notice
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          5. Intellectual Property Rights
        </h2>
        <p className="mb-3">
          The Flow AI application, including its AI models and technology, is
          protected by copyright and other intellectual property rights.
          However, you retain rights to the rap music content you generate using
          our platform, subject to the following conditions:
        </p>
        <ul className="list-disc ml-6">
          <li>You may use your generated content for commercial purposes</li>
          <li>
            You are responsible for ensuring your generated content doesn't
            infringe on others' rights
          </li>
          <li>
            We may use anonymized generated content to improve our AI models
          </li>
          <li>
            The app's core technology and AI models remain our intellectual
            property
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          6. Content Generation Guidelines
        </h2>
        <p>You agree not to use Flow AI to generate content that is:</p>
        <ul className="list-disc ml-6">
          <li>Harmful, threatening, or discriminatory</li>
          <li>
            Infringing on copyrights or other intellectual property rights
          </li>
          <li>Explicitly violent or inappropriate</li>
          <li>Intended to harass or bully others</li>
          <li>In violation of any applicable laws or regulations</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          7. Data Usage and Storage
        </h2>
        <p className="mb-3">By using Flow AI, you understand and agree that:</p>
        <ul className="list-disc ml-6">
          <li>We store your generated content and usage data</li>
          <li>We use your interaction data to improve our AI models</li>
          <li>You can export or delete your generated content at any time</li>
          <li>We may collect usage analytics to improve the service</li>
          <li>We track credit usage and generation history</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          8. Disclaimer of Warranties
        </h2>
        <p>
          Flow AI is provided "as is" without any warranties. We do not
          guarantee that the App will be uninterrupted, secure, or error-free.
          We are not responsible for the quality or appropriateness of generated
          content.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          9. Limitation of Liability
        </h2>
        <p>
          To the maximum extent permitted by law, we shall not be liable for any
          indirect, incidental, special, consequential, or punitive damages
          arising from your use of the App or its generated content.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">10. Termination</h2>
        <p>
          We reserve the right to terminate or suspend your access to Flow AI at
          any time, without notice, for any reason, including violation of these
          Terms. Upon termination, any remaining credits will be forfeited.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
        <p>
          We may modify these Terms at any time. Continued use of the App after
          changes constitutes acceptance of the modified Terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">12. Third Party Access</h2>
        <p className="mb-3">
          Flow AI utilizes the following third-party services:
        </p>
        <ul className="list-disc ml-6">
          <li>Google Play Services</li>
          <li>App Store Services</li>
          <li>Firebase Analytics</li>
          <li>Expo</li>
          <li>Our AI Processing Services</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">13. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the
          applicable laws of your jurisdiction, without regard to its conflict
          of law provisions.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          14. Subscription and Credits
        </h2>
        <p className="mb-3">
          Subscriptions are available on a weekly, monthly, or annual basis.
          All purchases are final and non-refundable unless required by law.
          Subscriptions automatically renew unless cancelled before the renewal
          date. You can manage and cancel subscriptions through your device's
          app store settings.
        </p>
        <h3 className="text-xl font-semibold mb-3">Subscription Plans:</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>
            <strong>Annual Plan:</strong> $79.99/year - 650 credits per year
          </li>
          <li>
            <strong>Monthly Plan:</strong> $6.99/month - 50 credits per month
          </li>
          <li>
            <strong>Weekly Plan:</strong> $2.99/week - 12 credits per week
          </li>
        </ul>
        <h3 className="text-xl font-semibold mb-3">Additional Credits:</h3>
        <ul className="list-disc ml-6">
          <li>35 credits - $12.99</li>
          <li>15 credits - $5.99</li>
          <li>5 credits - $1.99</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">15. Contact Information</h2>
        <p>
          For questions about these Terms, please contact us at:{" "}
          <a
            href={`mailto:${contactEmail}`}
            className="text-blue-400 underline"
          >
            {contactEmail}
          </a>
        </p>
      </section>

      <section className="mb-6">
        <p className="mb-6">
          Please also review our{" "}
          <Link to="/privacy-policy" className="text-blue-400 underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link to="/eula" className="text-blue-400 underline">
            End User License Agreement (EULA)
          </Link>
          .
        </p>
      </section>
    </div>
  );
};

export default TermsOfService;
