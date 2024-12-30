import React from 'react';

export function Disclaimer() {
  return (
    <div className="prose max-w-none">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Disclaimer</h1>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2>General Disclaimer</h2>
        <p>
          The information provided by our asphalt calculator is for general guidance only. While we strive for accuracy,
          we make no representations or warranties of any kind about the completeness, accuracy, reliability, suitability,
          or availability of the calculator or the information it provides.
        </p>

        <h2>Calculation Accuracy</h2>
        <p>
          Results provided by the calculator are estimates and should not be considered final specifications for your project.
          Always consult with qualified professionals for precise measurements and requirements.
        </p>

        <h2>Professional Advice</h2>
        <p>
          This calculator is not a substitute for professional advice. Users should consult with qualified contractors
          or engineers for specific project requirements.
        </p>

        <h2>Affiliate Disclosure</h2>
        <p>
          Our website may contain affiliate links. If you click on these links and make a purchase, we may receive a
          commission at no additional cost to you. This helps support our website and allows us to continue providing
          free calculators and resources.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          In no event shall Asphalt Calculator be liable for any direct, indirect, incidental, consequential, or punitive
          damages arising out of the use or inability to use our calculator or website.
        </p>

        <h2>Updates</h2>
        <p>
          We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon posting
          to the website.
        </p>
      </div>
    </div>
  );
}