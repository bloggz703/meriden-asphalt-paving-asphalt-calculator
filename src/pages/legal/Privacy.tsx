import React from 'react';

export function Privacy() {
  return (
    <div className="prose max-w-none">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2>1. Information We Collect</h2>
        <p>We collect information that you provide directly to us, including:</p>
        <ul>
          <li>Contact information (name, email address)</li>
          <li>Usage data and calculator inputs</li>
          <li>Communication preferences</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the collected information to:</p>
        <ul>
          <li>Provide and improve our calculator services</li>
          <li>Respond to your inquiries</li>
          <li>Send updates and marketing communications (with your consent)</li>
          <li>Analyze usage patterns to improve user experience</li>
        </ul>

        <h2>3. Information Sharing</h2>
        <p>We do not sell or rent your personal information to third parties. We may share your information with:</p>
        <ul>
          <li>Service providers who assist in our operations</li>
          <li>Legal authorities when required by law</li>
        </ul>

        <h2>4. Data Security</h2>
        <p>We implement appropriate security measures to protect your personal information against unauthorized access or disclosure.</p>

        <h2>5. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal information</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Opt-out of marketing communications</li>
        </ul>
      </div>
    </div>
  );
}