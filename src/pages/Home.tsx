import React from 'react';
import { Calculator } from '../components/Calculator';
import { ArrowRight } from 'lucide-react';

export function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Asphalt Calculator – Instantly Estimate Your Asphalt Needs
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Save time and money with our advanced asphalt calculator designed for accuracy and ease of use.
        </p>
      </div>

      <Calculator />

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">How to Use the Calculator</h2>
          <ol className="space-y-3 text-gray-600">
            <li>1. Measure your project area in feet</li>
            <li>2. Enter the length and width measurements</li>
            <li>3. Select desired thickness (typically 2-4 inches for driveways)</li>
            <li>4. Review the calculated results</li>
          </ol>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Pro Tips</h2>
          <ul className="space-y-3 text-gray-600">
            <li>• Add 10% extra for waste and compaction</li>
            <li>• Verify density with your supplier</li>
            <li>• Consider drainage when planning thickness</li>
            <li>• Account for base material separately</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Need Help?</h2>
          <p className="text-gray-600 mb-4">
            Our team of experts is here to help you with your asphalt project calculations.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center text-slate-600 hover:text-slate-800"
          >
            Contact us <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="font-semibold mb-2">What is the standard density for asphalt?</h3>
            <p className="text-gray-600">
              The standard density for asphalt is typically 145 pounds per cubic foot, though this can vary based on the specific mix design.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">How do I calculate irregular shapes?</h3>
            <p className="text-gray-600">
              Break down irregular areas into simple shapes, calculate each separately, then add the results together for total material needed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}