import { useState } from "react";
import { toast } from "react-hot-toast";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { contactEmail } from "@/constants/url";

const Support = () => {
  const [copied, setCopied] = useState(false);
  const email = contactEmail;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      toast.success("Email copied to clipboard!");

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      toast.error("Failed to copy email");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-primary/5 to-white text-gray-900">
      <Navbar />
      <div className="container mx-auto px-4 py-24 min-h-screen">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Support</h1>
          <p className="text-xl text-gray-600 mb-12">
            Have questions or need assistance? Feel free to reach out to me.
          </p>

          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
            <p className="text-lg mb-4 text-gray-700">You can contact me at:</p>
            <div className="flex items-center justify-center space-x-4 flex-wrap gap-4">
              <span className="text-xl font-mono bg-gray-50 px-4 py-2 rounded border border-gray-200">{email}</span>
              <button
                onClick={handleCopyEmail}
                className={`px-6 py-2 rounded-full transition-all font-medium ${
                  copied ? "bg-green-500 hover:bg-green-600 text-white" : "bg-primary hover:bg-primary/90 text-white"
                }`}
              >
                {copied ? "Copied!" : "Copy Email"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Support;
