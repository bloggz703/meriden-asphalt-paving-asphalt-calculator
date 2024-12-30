import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-slate-800 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-gray-300">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/legal/privacy" className="hover:text-gray-300">Privacy Policy</Link></li>
              <li><Link to="/legal/disclaimer" className="hover:text-gray-300">Disclaimer</Link></li>
              <li><Link to="/legal/cookies" className="hover:text-gray-300">Cookie Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <p className="text-sm">Stay updated with our latest calculators and tools.</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Asphalt Calculator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}