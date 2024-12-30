import React, { useState, useCallback } from 'react';
import { Calculator as CalcIcon, RefreshCw } from 'lucide-react';
import { CalculatorInput } from './calculator/CalculatorInput';
import { CalculatorResults } from './calculator/CalculatorResults';
import { calculateAsphalt, CalculationResult } from '../utils/calculatorUtils';

export function Calculator() {
  const [length, setLength] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [thickness, setThickness] = useState<string>('');
  const [density, setDensity] = useState<string>('145');
  const [results, setResults] = useState<CalculationResult | null>(null);

  const calculateResults = useCallback(() => {
    if (!length || !width || !thickness || !density) return;

    const result = calculateAsphalt(
      parseFloat(length),
      parseFloat(width),
      parseFloat(thickness),
      parseFloat(density)
    );

    setResults(result);
  }, [length, width, thickness, density]);

  const resetCalculator = () => {
    setLength('');
    setWidth('');
    setThickness('');
    setDensity('145');
    setResults(null);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      <div className="flex items-center space-x-2 mb-6">
        <CalcIcon className="h-6 w-6 text-slate-600" />
        <h2 className="text-2xl font-bold text-slate-800">Asphalt Calculator</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <CalculatorInput
            id="length"
            label="Length"
            value={length}
            onChange={setLength}
            placeholder="Enter length"
            unit="feet"
          />
          <CalculatorInput
            id="width"
            label="Width"
            value={width}
            onChange={setWidth}
            placeholder="Enter width"
            unit="feet"
          />
        </div>

        <div className="space-y-4">
          <CalculatorInput
            id="thickness"
            label="Thickness"
            value={thickness}
            onChange={setThickness}
            placeholder="Enter thickness"
            unit="inches"
            step="0.5"
          />
          <CalculatorInput
            id="density"
            label="Density"
            value={density}
            onChange={setDensity}
            placeholder="Enter density"
            unit="lbs/cubic foot"
          />
        </div>
      </div>

      <div className="mt-6 flex space-x-4">
        <button
          onClick={calculateResults}
          className="flex-1 bg-slate-600 text-white px-4 py-2 rounded-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
        >
          Calculate
        </button>
        <button
          onClick={resetCalculator}
          className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
        >
          <RefreshCw className="h-4 w-4 mr-2" />
          Reset
        </button>
      </div>

      {results && <CalculatorResults results={results} />}
    </div>
  );
}