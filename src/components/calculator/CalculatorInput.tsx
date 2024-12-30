import React from 'react';

interface CalculatorInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  min?: string;
  step?: string;
  unit: string;
}

export function CalculatorInput({
  id,
  label,
  value,
  onChange,
  placeholder,
  min = "0",
  step = "1",
  unit
}: CalculatorInputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label} ({unit})
      </label>
      <input
        type="number"
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500"
        placeholder={placeholder}
        min={min}
        step={step}
      />
    </div>
  );
}