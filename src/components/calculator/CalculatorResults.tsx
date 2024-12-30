import React from 'react';

interface CalculationResult {
  volumeCubicFeet: number;
  volumeCubicYards: number;
  weightPounds: number;
  weightTons: number;
}

interface CalculatorResultsProps {
  results: CalculationResult;
}

export function CalculatorResults({ results }: CalculatorResultsProps) {
  return (
    <div className="mt-8 p-4 bg-slate-50 rounded-md">
      <h3 className="text-lg font-semibold text-slate-800 mb-4">Results</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-600">Volume</p>
          <p className="font-medium">{results.volumeCubicFeet.toFixed(2)} cubic feet</p>
          <p className="font-medium">{results.volumeCubicYards.toFixed(2)} cubic yards</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Weight</p>
          <p className="font-medium">{results.weightPounds.toFixed(2)} pounds</p>
          <p className="font-medium">{results.weightTons.toFixed(2)} tons</p>
        </div>
      </div>
    </div>
  );
}