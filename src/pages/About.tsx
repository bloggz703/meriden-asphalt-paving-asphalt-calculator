import React from 'react';
import { Users, Wrench, Award } from 'lucide-react';

export function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">About Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're a passionate group of industry enthusiasts dedicated to providing accurate and reliable asphalt calculation tools.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 mb-16">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
            <Users className="h-8 w-8 text-slate-600" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
          <p className="text-gray-600">
            Our team combines decades of experience in construction and engineering.
          </p>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
            <Wrench className="h-8 w-8 text-slate-600" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Precision Tools</h3>
          <p className="text-gray-600">
            We develop accurate, user-friendly calculators for construction professionals.
          </p>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
            <Award className="h-8 w-8 text-slate-600" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Industry Standard</h3>
          <p className="text-gray-600">
            Our calculations follow industry best practices and standards.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
        <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
        <p className="text-gray-600 mb-6">
          We're committed to simplifying construction calculations while maintaining the highest standards of accuracy. Our goal is to help contractors, DIY enthusiasts, and construction professionals make informed decisions about their projects.
        </p>
        <p className="text-gray-600">
          By providing free, accurate calculation tools, we aim to reduce waste, save time, and improve project outcomes across the construction industry.
        </p>
      </div>

      <div className="bg-slate-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Why Trust Us?</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="font-semibold mb-2">Industry Expertise</h3>
            <p className="text-gray-600">
              Our team has extensive experience in construction, engineering, and materials science.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Continuous Updates</h3>
            <p className="text-gray-600">
              We regularly update our calculators based on industry standards and user feedback.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">User-Focused Design</h3>
            <p className="text-gray-600">
              Our tools are designed with user experience in mind, making complex calculations simple.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Community Support</h3>
            <p className="text-gray-600">
              We actively engage with our user community to improve our tools and provide support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}