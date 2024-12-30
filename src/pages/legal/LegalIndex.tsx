import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Cookie } from 'lucide-react';

export function LegalIndex() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Legal Information</h1>
      <div className="grid gap-8 md:grid-cols-3">
        <Link to="/legal/privacy" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Lock className="h-8 w-8 text-slate-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Privacy Policy</h2>
          <p className="text-gray-600">Learn how we collect, use, and protect your personal information.</p>
        </Link>
        
        <Link to="/legal/disclaimer" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Shield className="h-8 w-8 text-slate-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Disclaimer</h2>
          <p className="text-gray-600">Important information about the use of our calculator and services.</p>
        </Link>
        
        <Link to="/legal/cookies" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Cookie className="h-8 w-8 text-slate-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Cookie Policy</h2>
          <p className="text-gray-600">Information about how we use cookies on our website.</p>
        </Link>
      </div>
    </div>
  );
}