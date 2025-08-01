import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const PrivacyPolicy = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16">
        <div className="w-full max-w-none px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12 lg:p-16">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
                Privacy Policy
              </h1>
              <p className="text-gray-600 text-lg">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-lg prose-blue max-w-none">
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  DigiCinta ("we," "our," or "us") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website digicinta.com and use our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
                
                <h3 className="text-xl font-medium text-gray-800 mb-3">Personal Information</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When you contact us through our website or use our services, we may collect:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Company name and position</li>
                  <li>Project requirements and service inquiries</li>
                  <li>Files and documents you upload through our contact forms</li>
                  <li>Communication history and preferences</li>
                </ul>

                <h3 className="text-xl font-medium text-gray-800 mb-3">Technical Information</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We automatically collect certain technical information when you visit our website:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Device information and operating system</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referring websites and search terms</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use the collected information for the following purposes:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>To respond to your inquiries and provide our services</li>
                  <li>To communicate with you about our digital transformation solutions</li>
                  <li>To improve our website and service offerings</li>
                  <li>To send you relevant updates about our services (with your consent)</li>
                  <li>To comply with legal obligations and protect our business interests</li>
                  <li>To analyze website usage and optimize user experience</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing and Disclosure</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and conducting our business</li>
                  <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights, property, or safety</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
                <p className="text-gray-700 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our website uses SSL encryption, and we store data using Firebase's secure cloud infrastructure with industry-standard security protocols.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Retention</h2>
                <p className="text-gray-700 leading-relaxed">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. We will delete or anonymize your information when it is no longer needed.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate or incomplete information</li>
                  <li>Deletion of your personal information</li>
                  <li>Restriction of processing</li>
                  <li>Data portability</li>
                  <li>Objection to processing</li>
                  <li>Withdrawal of consent</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can control cookie settings through your browser preferences, though some features may not function properly if cookies are disabled.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">International Data Transfers</h2>
                <p className="text-gray-700 leading-relaxed">
                  As we serve clients across Southeast Asia and MENA regions, your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-gray-800 font-medium mb-2">DigiCinta</p>
                  <p className="text-gray-700">Email: business@digicinta.com</p>
                  <p className="text-gray-700">Location: South Jakarta, Indonesia</p>
                  <p className="text-gray-700">Business Hours: Monday - Friday, 8am - 6pm WIB</p>
                </div>
              </section>

            </div>

            {/* Navigation */}
            <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
              <Link 
                to="/" 
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                ← Back to Home
              </Link>
              <Link 
                to="/terms-of-service" 
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                View Terms of Service →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default PrivacyPolicy;