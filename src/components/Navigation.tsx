import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Info, FileText, Mail, Home } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="bg-slate-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Calculator className="h-8 w-8" />
            <span className="font-bold text-xl">Asphalt Calculator</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="flex items-center space-x-1 hover:text-gray-300">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link to="/about" className="flex items-center space-x-1 hover:text-gray-300">
              <Info className="h-4 w-4" />
              <span>About</span>
            </Link>
            <Link to="/contact" className="flex items-center space-x-1 hover:text-gray-300">
              <Mail className="h-4 w-4" />
              <span>Contact</span>
            </Link>
            <Link to="/legal" className="flex items-center space-x-1 hover:text-gray-300">
              <FileText className="h-4 w-4" />
              <span>Legal</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}