import { contactEmail } from "@/constants/url";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Eula = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mx-auto px-4 py-12 w-full md:max-w-[800px]">
      <h1 className="text-3xl font-bold mb-8">
        Flow AI End-User License Agreement (EULA)
      </h1>

      <p className="mb-6">
        This End-User License Agreement ("Agreement") is a legal agreement
        between you ("User") and Flow AI ("We" or "Our") that governs your use
        of the Flow AI mobile application and services. By installing or using
        Flow AI, you agree to be bound by this Agreement. If you do not agree to
        the terms of this Agreement, you must not install or use Flow AI.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">1. License Grant</h2>
        <p>
          We grant you a limited, non-transferable, revocable license to use
          Flow AI on any compatible device that you own or control. This license
          includes the right to use the AI-powered rap music generation features
          within the credit limits of your subscription. You may not rent,
          lease, or sublicense the app to any third party. This license is for
          personal and commercial use of generated content.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">2. License Restrictions</h2>
        <p className="mb-3">You agree not to:</p>
        <ul className="list-disc ml-6">
          <li>
            Modify, adapt, translate, or reverse engineer Flow AI or its AI
            models
          </li>
          <li>
            Use Flow AI to generate content that infringes on the rights of any
            third party
          </li>
          <li>Attempt to interfere with or disrupt the operation of Flow AI</li>
          <li>
            Share or transfer your credits or account access to other users
          </li>
          <li>Use the app to generate inappropriate or illegal content</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">3. Updates and Changes</h2>
        <p>
          We may update Flow AI from time to time with new features, AI model
          improvements, or bug fixes. You agree to install any updates that we
          provide. Failure to update the app may result in degraded
          functionality or inability to generate music.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">4. Data Collection</h2>
        <p>
          We collect analytics data and AI interaction data as part of the app's
          functionality. This data may be used to improve our AI models and
          shared with third-party analytics providers to help us improve the
          performance and features of Flow AI. For more information about our
          data collection practices, please review our Privacy Policy.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">5. Termination</h2>
        <p>
          This Agreement is effective until terminated by either you or us. We
          may terminate the license at any time for violation of these terms.
          Upon termination, you must cease using Flow AI, uninstall the app from
          your device, and any unused credits will be forfeited.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          6. Limitation of Liability
        </h2>
        <p>
          To the maximum extent permitted by law, Flow AI shall not be liable
          for any damages resulting from the use or inability to use the app,
          including but not limited to direct, indirect, incidental, or
          consequential damages. We are not responsible for the content
          generated by our AI models or how that content is used by users.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">7. Governing Law</h2>
        <p>
          This Agreement shall be governed by and construed in accordance with
          the laws of the jurisdiction in which Flow AI operates, without regard
          to its conflict of law provisions.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>
          If you have any questions about this Agreement or the app, please
          contact us at:{" "}
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
          <Link to="/privacy-policy" className="text-blue-400 underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link to="/terms-of-service" className="text-blue-400 underline">
            Terms of Service
          </Link>
          .
        </p>
      </section>
    </div>
  );
};

export default Eula;
