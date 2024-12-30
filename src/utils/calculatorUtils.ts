export interface CalculationResult {
  volumeCubicFeet: number;
  volumeCubicYards: number;
  weightPounds: number;
  weightTons: number;
}

export function calculateAsphalt(
  length: number,
  width: number,
  thickness: number,
  density: number
): CalculationResult {
  // Convert thickness from inches to feet
  const thicknessInFeet = thickness / 12;
  
  const volumeCubicFeet = length * width * thicknessInFeet;
  const volumeCubicYards = volumeCubicFeet / 27;
  const weightPounds = volumeCubicFeet * density;
  const weightTons = weightPounds / 2000;

  return {
    volumeCubicFeet,
    volumeCubicYards,
    weightPounds,
    weightTons
  };
}