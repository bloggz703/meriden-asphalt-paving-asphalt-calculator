import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LegalIndex } from './legal/LegalIndex';
import { Privacy } from './legal/Privacy';
import { Disclaimer } from './legal/Disclaimer';
import { CookiePolicy } from './legal/CookiePolicy';

export function Legal() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Routes>
        <Route path="/" element={<LegalIndex />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/cookies" element={<CookiePolicy />} />
      </Routes>
    </div>
  );
}