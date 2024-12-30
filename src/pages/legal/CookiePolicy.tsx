import React from 'react';

export function CookiePolicy() {
  return (
    <div className="prose max-w-none">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Cookie Policy</h1>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2>What Are Cookies?</h2>
        <p>
          Cookies are small text files that are placed on your device when you visit our website. They help us provide
          you with a better experience by remembering your preferences and analyzing how you use our site.
        </p>

        <h2>Types of Cookies We Use</h2>
        <ul>
          <li>
            <strong>Essential Cookies:</strong> Required for basic website functionality
          </li>
          <li>
            <strong>Analytical Cookies:</strong> Help us understand how visitors use our site
          </li>
          <li>
            <strong>Preference Cookies:</strong> Remember your settings and choices
          </li>
        </ul>

        <h2>Managing Cookies</h2>
        <p>
          You can control and/or delete cookies as you wish. You can delete all cookies that are already on your
          computer and you can set most browsers to prevent them from being placed.
        </p>

        <h2>Third-Party Cookies</h2>
        <p>
          Some of our pages may contain elements from third-party services. These services may set their own cookies
          for analytics and functionality purposes.
        </p>

        <h2>Updates to This Policy</h2>
        <p>
          We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated
          revision date.
        </p>
      </div>
    </div>
  );
}