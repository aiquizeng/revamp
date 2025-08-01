import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const TermsOfService = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16">
        <div className="w-full max-w-none px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12 lg:p-16">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
                Terms of Service
              </h1>
              <p className="text-gray-600 text-lg">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-lg prose-blue max-w-none">
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Agreement to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  By accessing and using the DigiCinta website (digicinta.com) and our digital transformation services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">About DigiCinta</h2>
                <p className="text-gray-700 leading-relaxed">
                  DigiCinta is a digital transformation consultancy established in 2017, based in South Jakarta, Indonesia. We provide comprehensive digital solutions including AI automation, custom software development, cybersecurity, and strategic consulting services to clients across Southeast Asia and MENA regions.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Services Description</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  DigiCinta offers the following categories of services:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>AI Automation & Machine Learning:</strong> Development and implementation of AI solutions for business process optimization</li>
                  <li><strong>Custom Software Development:</strong> Bespoke web applications, mobile apps, and enterprise software solutions</li>
                  <li><strong>Cybersecurity Services:</strong> Security assessments, implementation of security protocols, and ongoing monitoring</li>
                  <li><strong>Digital Strategy Consulting:</strong> Digital transformation roadmaps and strategic planning</li>
                  <li><strong>Cloud Solutions:</strong> Cloud migration, architecture design, and managed cloud services</li>
                  <li><strong>DevOps & Infrastructure:</strong> CI/CD implementation, infrastructure automation, and system optimization</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use of Website</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  By using our website, you warrant that:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>You are at least 18 years of age</li>
                  <li>You have the legal capacity to enter into agreements</li>
                  <li>You will use the website only for lawful purposes</li>
                  <li>You will not use the website in any way that could damage, disable, overburden, or impair our servers</li>
                  <li>You will not attempt to gain unauthorized access to any part of the website</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Agreements</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Specific services provided by DigiCinta are governed by separate service agreements that include:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Project scope, deliverables, and timelines</li>
                  <li>Payment terms and conditions</li>
                  <li>Intellectual property rights and ownership</li>
                  <li>Confidentiality and non-disclosure provisions</li>
                  <li>Support and maintenance terms</li>
                  <li>Liability limitations and warranties</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The website and its original content, features, and functionality are owned by DigiCinta and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Unless otherwise specified in a separate service agreement, any custom solutions developed by DigiCinta for clients remain the intellectual property of the respective client upon full payment completion.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Content and Submissions</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When you submit content through our contact forms or file uploads:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>You retain ownership of your submitted content</li>
                  <li>You grant us permission to use submitted information to provide our services</li>
                  <li>You warrant that you have the right to submit the content</li>
                  <li>You agree not to submit any content that is illegal, harmful, or infringes on others' rights</li>
                  <li>We reserve the right to remove any content that violates these terms</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Privacy and Data Protection</h2>
                <p className="text-gray-700 leading-relaxed">
                  Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms of Service by reference. Please review our Privacy Policy to understand our practices.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Payment Terms</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For consulting and development services:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Payment terms are specified in individual service agreements</li>
                  <li>Invoices are typically payable within 30 days of receipt</li>
                  <li>Late payments may incur additional fees as specified in service agreements</li>
                  <li>All prices are quoted in USD unless otherwise specified</li>
                  <li>Taxes and applicable fees are additional unless explicitly included</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To the fullest extent permitted by applicable law:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>DigiCinta shall not be liable for any indirect, incidental, special, consequential, or punitive damages</li>
                  <li>Our total liability for any claim shall not exceed the amount paid by the client for the specific service</li>
                  <li>We make no warranties about the uninterrupted or error-free operation of our website</li>
                  <li>We are not responsible for any damages resulting from the use or inability to use our website</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Indemnification</h2>
                <p className="text-gray-700 leading-relaxed">
                  You agree to defend, indemnify, and hold harmless DigiCinta and its employees, contractors, agents, officers, and directors from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney's fees).
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Termination</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may terminate or suspend your access to our website immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms of Service. Upon termination, your right to use the website will cease immediately.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms of Service and any disputes arising out of or related to these terms shall be governed by and construed in accordance with the laws of Indonesia, without regard to its conflict of law provisions. Any legal proceedings shall be conducted in the courts of Jakarta, Indonesia.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Force Majeure</h2>
                <p className="text-gray-700 leading-relaxed">
                  DigiCinta shall not be liable for any failure or delay in performance under these terms due to circumstances beyond our reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, strikes, or government regulations.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right, at our sole discretion, to modify or replace these Terms of Service at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Severability</h2>
                <p className="text-gray-700 leading-relaxed">
                  If any provision of these Terms of Service is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law, and the remaining provisions will continue in full force and effect.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us:
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
                to="/privacy-policy" 
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                ← View Privacy Policy
              </Link>
              <Link 
                to="/" 
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                Back to Home →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default TermsOfService;